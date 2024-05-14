import React from 'react';
import People from './People';

export const ITEMS_PER_PAGE = 10;

class PeopleTable extends React.Component {
    render() {
        return (
            <div className='container'>
                <h1>People table</h1>
                <table className='table table-light table-hover table-striped-columns'>
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Height</th>
                            <th scope="col">Mass</th>
                            <th scope="col">hair_color</th>
                            <th scope="col">skin_color</th>
                            <th scope="col">eye_color</th>
                            <th scope="col">Birth Year</th>
                            <th scope="col">Gender</th>
                            <th scope="col">homeworld</th>
                            <th scope="col">films</th>
                            <th scope="col">species</th>
                            <th scope="col">vehicles</th>
                            <th scope="col">starships</th>
                            <th scope="col">created</th>
                            <th scope="col">edited</th>
                            <th scope="col">url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.people.map((p) => (
                            <People key={p.url.match(/(\d+)\/$/)[1]} data={p} />
                        )
                        )}
                    </tbody>


                </table>
            </div>

        )
    }
}

export default PeopleTable;