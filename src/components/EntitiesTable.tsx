import React from 'react';
import EntityRow from './EntityRow';
import '../styles/entityTable.css'
import {TableProcessor} from '../utils/TableProcessor';
import {EntityType} from '../interfaces/EntityType';
import {BaseEntity} from '../models/BaseEntity';

export const ITEMS_PER_PAGE = 10;

interface EntitiesTableProps {
    entityType: EntityType;
    items: BaseEntity[];
    onDelete: (id: string) => void;
    onEdit: (entity: BaseEntity) => void;
}

const EntitiesTable: React.FC<EntitiesTableProps> = ({entityType, items, onDelete, onEdit}) => {


    const getEntityRows = () => {
        return items.map((item: BaseEntity) =>
            <EntityRow key={item.url} entity={item} onDelete={onDelete} onEdit={onEdit}/>)
    }


    return (
        <div className="container">
            <h2>{entityType} table</h2>
            <div className="table-wrapper">
                <div className="container">
                    <table className="table table-light table-hover">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            {items[0] && TableProcessor.getTableHeader(items[0])}
                        </tr>
                        </thead>
                        <tbody>
                        {getEntityRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EntitiesTable;