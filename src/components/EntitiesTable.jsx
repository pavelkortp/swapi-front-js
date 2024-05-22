import React from 'react';
import EntityRow from './EntityRow';
import '../styles/entityTable.css'

export const ITEMS_PER_PAGE = 10;

export default class EntitiesTable extends React.Component {
    render() {
        return (
            <>
                <h2>{this.props.items[0].url.split('/')[4]} table</h2>
                <div className='table-wrapper'>
                    <div className='container'>
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
                </div>
            </>
        );
    }

    getScheme(o) {
        return (<>
            {Object.keys(o).map((key) => (<th key={key} scope="col">{key}</th>))}
        </>);
    }
}