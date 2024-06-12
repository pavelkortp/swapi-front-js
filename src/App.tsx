import React from 'react';
import {Bounce, toast, ToastContainer, ToastOptions} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EntitiesTable from './components/EntitiesTable';
import PagesBar from './components/PagesBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CreateEntity from './components/CreateEntity';
import Entity from './interfaces/Entity';
import {SWAPIResponsePage} from './interfaces/SWAPIResponse';
import axios from 'axios';

export const BASE_URL = 'http://localhost:3000/api/v1';
const LOCAL_PEOPLE_URL = 'http://localhost:3000/api/v1/people';
export const PEOPLE_URL = 'https://swapi.dev/api/people'; //test
export const PLANETS_URL = 'https://swapi.dev/api/planets'; //test
export const FILMS_URL = 'https://swapi.dev/api/films'; //test
export const STARSHIPS_URL = 'https://swapi.dev/api/starships'; //test
export const VEHICLES_URL = 'https://swapi.dev/api/vehicles'; //test
export const SPECIES_URL = 'https://swapi.dev/api/species'; //test

export const TOAST_OPTIONS: ToastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
}

interface AppState extends SWAPIResponsePage {
    url: string;
    page: number;
    modalVisible: boolean;
}

export default class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            url: LOCAL_PEOPLE_URL,
            results: [],
            page: 1,
            next: '',
            previous: '',
            count: 0,
            modalVisible: false,
        }

        this.setEntity = this.setEntity.bind(this);
        this.createEntity = this.createEntity.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);
        this.setItems = this.setItems.bind(this);
        this.deleteEntity = this.deleteEntity.bind(this);
    }

    componentDidMount() {
        this.setItems(this.state.page);
    }

    /**
     *
     * @param value
     */
    setModalVisible(value: boolean) {
        this.setState({...this.state, modalVisible: value});
    }

    render() {
        const count = this.state.count;
        if (!count) {
            return <div>Loading...</div>;
        }
        return (
            <>
                <NavBar onEntity={this.setEntity}/>
                <main className="container">
                    <EntitiesTable
                        items={this.state.results}
                        onDelete={this.deleteEntity}
                        onEdit={this.editEntity}
                    />
                    <br></br>
                    <PagesBar onClick={this.setItems} count={count}/>
                    <br></br>
                    <button
                        className="btn btn-primary"
                        onClick={() => this.setModalVisible(true)}
                    >
                        Create entity
                    </button>
                    <CreateEntity
                        schema={this.getSchema(this.state.results[0])}
                        isOpen={this.state.modalVisible}
                        onClose={() => this.setModalVisible(false)}
                        onCreate={this.createEntity}
                    />
                </main>
                <ToastContainer/>
                <Footer/>
            </>
        )
    }


    getSchema(e: Entity): string[] {
        const {url, edited, created, ...rest} = e;
        const schema = Object.keys(rest).filter((key: string) => !Array.isArray(rest[key as keyof typeof rest]));
        schema.push('images');
        return schema
    }


    /**
     *
     * @param url
     */
    setEntity(url: string) {
        this.setState({url}, () => {
            this.setItems(1);
        });
    }

    /**
     *
     * @param data1
     */
    createEntity(data1: any) {
        const formData = new FormData();
        data1.images.forEach((e: any)=>{
            formData.append('images', e);
        })

        Object.keys(data1).forEach(key => {
            if(key!=='images'){
                formData.append(key, data1[key]);
            }
        })

        axios.post(LOCAL_PEOPLE_URL, formData)
            .then(response => {
                if (!response.data?.error) {
                    toast.success('🦄 Created!', TOAST_OPTIONS);
                    this.setItems(1);
                } else {
                    toast.error(`🦄 Error! ${response.data.message}`, TOAST_OPTIONS);
                }
            })
            .catch(error => {
                toast.error('🦄 There is some problem!', TOAST_OPTIONS);
            });
    }


    deleteEntity(id:string){
        axios.delete(LOCAL_PEOPLE_URL+`/${id}`)
            .then(response => {
                if (!response.data?.error) {
                    toast.success('🦄 Deleted!', TOAST_OPTIONS);
                    this.setItems(1);
                } else {
                    toast.error(`🦄 Error! ${response.data.message}`, TOAST_OPTIONS);
                }
            })
            .catch(error => {
                toast.error('🦄 There is some problem!', TOAST_OPTIONS);
            });

        this.setItems(1);
    }

    editEntity(id:string){
        // axios.patch(LOCAL_PEOPLE_URL+`/${id}`)
        //     .then(response => {
        //         if (!response.data?.error) {
        //             toast.success('🦄 Deleted!', TOAST_OPTIONS);
        //             this.setItems(1);
        //         } else {
        //             toast.error(`🦄 Error! ${response.data.message}`, TOAST_OPTIONS);
        //         }
        //     })
        //     .catch(error => {
        //         toast.error('🦄 There is some problem!', TOAST_OPTIONS);
        //     });
    }

    /**
     *
     * @param page
     */
    setItems(page: number): void {
        fetch(`${this.state.url}/?page=${page}`)
            .then((res): Promise<SWAPIResponsePage> => res.json())
            .then((res) => {
                this.setState({
                    url: this.state.url,
                    results: res.results,
                    next: res.next,
                    previous: res.previous,
                    count: res.count,
                    page
                });
            })
            .catch(error => toast.error(`🦄 There is some problem! ${error}`, TOAST_OPTIONS));
    }
}
