import React, {ReactNode, useEffect, useState} from 'react';
import Entity from '../interfaces/Entity';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import {MdEdit} from 'react-icons/md';
import {EntityParser} from '../utils/EntityParser';
import {TableProcessor} from '../utils/TableProcessor';


interface EntityRowProps {
    entity: Entity;
    onDelete: (id: string) => void;
    onEdit: () => void;
}

export interface EntityRowState {
    [key: string]: React.ReactNode;
}

/**
 * Table wor with entity fields
 * @param entity data for row
 * @param onDelete action when we need to delete row
 * @param onEdit action when we need to edit row
 */
export const EntityRow:React.FC<EntityRowProps> = ({entity, onDelete, onEdit})=> {

    const [row, setRow] = useState<EntityRowState>();
    const id = EntityParser.getId(entity);

    useEffect(() => {
        setRow(TableProcessor.getProcessedTableRow(entity));
    }, [entity]);

    if (!row) {
        return <>loading</>
    }

    const handleOnEdit = (id: string) => {
        onEdit();
    }

    return (
        <tr>
            <th scope="row">{id}</th>
            {Object.values(row).map((data: ReactNode, index) => (
                <td key={index} data-bs-toggle="dropdown" aria-expanded="false">
                    {data}
                    <ul className="dropdown-menu">
                        <li>
                            <button className="dropdown-item" type="button" onClick={()=>onDelete(id)}>
                                <RiDeleteBin6Fill/> delete record
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" type="button" onClick={()=>handleOnEdit(id)}>
                                <MdEdit/> edit record
                            </button>
                        </li>
                    </ul>
                </td>
            ))}
        </tr>
    );
}

export default EntityRow;
