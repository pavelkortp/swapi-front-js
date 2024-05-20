import React from 'react';
import EntityRow from './EntityRow';

export const ITEMS_PER_PAGE = 10;

export default class EntitiesTable extends React.Component {
    render() {
        return (
            <div className='container'>
                <h1>{}</h1>
                <table className='table table-light table-hover table-striped-columns'>
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">#</th>
                            {this.getScheme(this.props.items[0])}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map((item) => (
                            <EntityRow key={item.url} data={item} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    getScheme(o) {
        return (<>
            {Object.keys(o).map((key) => (<th key={key} scope="col">{key}</th>))}
        </>);
    }
}