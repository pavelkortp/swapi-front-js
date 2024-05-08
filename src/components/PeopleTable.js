import React from 'react';
import People from './People';


class PeopleTable extends React.Component {
    render() {
        return (
            <div className='container'>
                <h1>People table</h1>
                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Birth Year</th>
                            <th scope="col">Gender</th>
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