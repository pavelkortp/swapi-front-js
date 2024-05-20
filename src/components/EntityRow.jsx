import React from 'react';


export default class EntityRow extends React.Component {

    getData() {
        return Object
            .keys(this.props.data)
            .map((key) => {
                const f = this.props.data[key]
                if (Array.isArray(f))
                    return (<td>{f.join('\n')}</td>);
                else if (key === 'url')
                    return (<td><a href={f}>URL</a></td>)
                return (<td>{this.props.data[key]}</td>);
            });
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.data.url.match(/(\d+)\/$/)[1]}</th>
                {this.getData()}
            </tr>
        );
    }
}

//<th scope="row">{this.props.data.url.match(/(\d+)\/$/)[1]}</th>
//                <td>{this.props.data.name}</td>
//                <td>{this.props.data.height}</td>
//                <td>{this.props.data.mass}</td>
//                <td>{this.props.data.hair_color}</td>
//                <td>{this.props.data.skin_color}</td>
//                <td>{this.props.data.eye_color}</td>
//                <td>{this.props.data.birth_year}</td>
//                <td>{this.props.data.gender}</td>
//                <td><a href={this.props.data.homeworld}>Homeworld</a></td>
//                <td>{this.props.data.films.join('\n')}</td>
//                <td>{this.props.data.species.join('\n')}</td>
//                <td>{this.props.data.vehicles.join('\n')}</td>
//                <td>{this.props.data.starships.join('\n')}</td>
//                <td>{new Date(this.props.data.created).getFullYear()}</td>
//                <td>{new Date(this.props.data.edited).getFullYear()}</td>
//                <td><a href={this.props.data.url}>URL</a></td>