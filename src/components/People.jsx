import axios from 'axios';
import React from 'react';


class People extends React.Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.data.url.match(/(\d+)\/$/)[1]}</th>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.height}</td>
                <td>{this.props.data.mass}</td>
                <td>{this.props.data.hair_color}</td>
                <td>{this.props.data.skin_color}</td>
                <td>{this.props.data.eye_color}</td>
                <td>{this.props.data.birth_year}</td>
                <td>{this.props.data.gender}</td>
                <td>{this.props.data.homeworld}</td>
                <td>{this.props.data.films.join('\n')}</td>
                <td>{this.props.data.species.join('\n')}</td>
                <td>{this.props.data.vehicles.join('\n')}</td>
                <td>{this.props.data.starships.join('\n')}</td>
                <td>{this.props.data.created}</td>
                <td>{this.props.data.edited}</td>
                <td>{this.props.data.url}</td>
            </tr>
        )
    }
}

export default People;