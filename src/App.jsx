import React from 'react';
import EntitiesTable from './components/EntitiesTable';
import PagesBar from './components/PagesBar';
import NavBar from './components/NavBar';

// const BASE_URL = 'http://localhost:3000/api/v1/people';
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
            count: 0
        }

        this.setEntity = this.setEntity.bind(this);
        this.setItems = this.setItems.bind(this);
    }

    componentDidMount() {
        this.setItems(this.state.page);
    }

    render() {
        const count = this.state.count;
        if (count === 0) {
            return <div>Loading...</div>;
        }
        console.log(count);
        return (
            <>
                <NavBar onEntity={this.setEntity} />
                <div className='container'>
                    <EntitiesTable items={this.state.items} />
                    <PagesBar onClick={this.setItems} count={count} />
                </div>
            </>
        )
    }

    setEntity(url) {
        this.setState({ url }, () => {
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
