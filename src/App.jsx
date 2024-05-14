import React from 'react';
import axios from 'axios'
import PeopleTable from './components/PeopleTable';
import PagesBar from './components/PagesBar';
import NavBar from './components/NavBar';

// const BASE_URL = 'http://localhost:3000/api/v1/people';
const BASE_URL = 'https://swapi.dev/api/people'; //test

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            page: 1,
            next: '',
            previous: '',
            count: 82 // Bad trick
        }

        // this.nextPage = this.nextPage.bind(this);
        // this.previousPage = this.previousPage.bind(this);
        this.setPeople = this.setPeople.bind(this);
    }

    componentDidMount() {
        this.setPeople(this.state.page);
    }

    render() {
        return (
            <>
                <NavBar />
                <div className='container'>
                    <PeopleTable people={this.state.people} />
                    <PagesBar onClick={this.setPeople} count={this.state.count} />
                </div>
            </>
        )
    }

    setPeople(page) {
        axios.get(`${BASE_URL}/?page=${page}`).then((res) => {
            this.setState({
                people: res.data.results,
                next: res.data.next,
                previous: res.data.previous,
                count: res.data.count,
                page
            });
        });
    }

    // nextPage() {
    //     if (this.state.next) {
    //         this.setPeople(this.state.page + 1)
    //     } else {
    //         alert('Це поки остання сторінка')
    //     }
    // }

    // previousPage() {
    //     if (this.state.previous) {
    //         this.setPeople(this.state.page - 1)
    //     } else {
    //         alert('Це і так перша сторінка. Далі нікуди')
    //     }
    // }
}
