import React from 'react';


class People extends React.Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.data.url.match(/(\d+)\/$/)[1]}</th>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.birth_year}</td>
                <td>{this.props.data.gender}</td>
            </tr>
        )
    }

}

export default People;