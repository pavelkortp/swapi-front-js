import React from 'react';
import EntityRow from './EntityRow';
import '../styles/entityTable.css'
import Entity from '../models/interfaces/Entity';

export const ITEMS_PER_PAGE = 10;

interface EntitiesTableProps {
    items: Entity[];
}

export default class EntitiesTable extends React.Component<EntitiesTableProps> {
    render() {
        return (
            <div className="container">
                <h2>{this.props.items[0].url.split('/')[5]} table</h2>
                <div className="table-wrapper">
                    <div className="container">
                        <table className="table table-light table-hover table-striped-columns">
                            <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                {this.getTableHeader(this.props.items[0])}
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.items.map((item: Entity) => (
                                <EntityRow key={item.url} data={item}/>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    /**
     * Returns table header for current entities.
     * @param e SWAPI entity.
     */
    getTableHeader(e: Entity) {
        return (<>
            {Object.keys(e).map((key: string) => (<th key={key} scope="col">{key}</th>))}
        </>);
    }
}