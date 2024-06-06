import React from 'react';
import EntitiesTable from './components/EntitiesTable';
import PagesBar from './components/PagesBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CreateEntity from './components/CreateEntity';

const BASE_URL = 'http://localhost:3000/api/v1/people';
export const PEOPLE_URL = 'https://swapi.dev/api/people'; //test
export const PLANETS_URL = 'https://swapi.dev/api/planets'; //test
export const FILMS_URL = 'https://swapi.dev/api/films'; //test
export const STARSHIPS_URL = 'https://swapi.dev/api/starships'; //test
export const VEHICLES_URL = 'https://swapi.dev/api/vehicles'; //test
export const SPECIES_URL = 'https://swapi.dev/api/species'; //test

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: PEOPLE_URL,
            items: [],
            page: 1,
            next: '',
            previous: '',
            count: 0,
            modalVisible: false,
        }

        this.setEntity = this.setEntity.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);
        this.setItems = this.setItems.bind(this);
    }

    componentDidMount() {
        this.setItems(this.state.page);
    }


    setModalVisible(value) {
        this.setState({modalVisible: value});
    }

    render() {
        const count = this.state.count;
        if (count === 0) {
            return <div>Loading...</div>;
        }
        return (
            <>
                <NavBar onEntity={this.setEntity}/>
                <main className='container'>
                    <EntitiesTable items={this.state.items}/>
                    <br></br>
                    <PagesBar onClick={this.setItems} count={count}/>
                    <br></br>
                    <button className='btn btn-primary' onClick={() => this.setModalVisible(true)}>Create entity
                    </button>
                    <CreateEntity entity={this.state.items} isOpen={this.state.modalVisible} onClose={() => this.setModalVisible(false)} />
                </main>
                <Footer/>
            </>
        )
    }

    setEntity(url) {
        this.setState({url}, () => {
            this.setItems(1);
        });
    }

    setItems(page) {
        fetch(`${this.state.url}/?page=${page}`)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    url: this.state.url,
                    items: res.results,
                    next: res.next,
                    previous: res.previous,
                    count: res.count,
                    page
                });
            })
            .catch(error => console.error('Error fetching count:', error));
    }
}
