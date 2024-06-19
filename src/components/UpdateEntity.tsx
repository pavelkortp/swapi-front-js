import React from 'react';
import Modal from './Modal';
import {Entities} from '../interfaces/Entities';
import {EntityType} from '../interfaces/EntityType';

interface UpdateEntityProps {
    // entity: Entities;
    entityType: EntityType;
    onUpdate: (id: string, entity: FormData) => void;
    isOpen: boolean;
    onClose: () => void;
}


const UpdateEntity: React.FC<UpdateEntityProps> = ({isOpen, onUpdate, onClose, entityType}) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2>Edit a record</h2>

        </Modal>
    )
}
export default UpdateEntity