import React from 'react';
import axios from 'axios'
import PeopleTable from './components/PeopleTable';

const BASE_URL = 'http://localhost:3000/api/v1/people';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            page: 1,
            next: '',
            previous: ''
        }

        this.nextPage = this.nextPage.bind(this);
        this.setPeople = this.setPeople.bind(this);

        this.setPeople(this.state.page)
    }

    render() {
        return (
            <div>
                <PeopleTable people={this.state.people} />
                <button type='button' id='next' onClick={this.nextPage}>NEXT</button>
            </div>
        )
    }

    setPeople(page) {
        axios.get(`${BASE_URL}/?page=${page}`).then((res) => {
            console.log(res.data);
            this.setState({
                people: res.data,
                next: res.data.next,
                previous: res.data.previous,
                page
            });
        });
    }

    nextPage() {
        if (this.state.next) {
            this.setPeople(this.state.page + 1)
        }else{
            alert('Це поки остання сторінка')
        }
    }
}

export default App;
