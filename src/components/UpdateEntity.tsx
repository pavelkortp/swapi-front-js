import React from 'react';
import Modal from './Modal';
import {Entities} from '../interfaces/Entities';
import {EntityType} from '../interfaces/EntityType';
import {CREATE_FORM} from './forms/create/CreateForm';
import {UPDATE_FORM} from './forms/update/UpdateForm';

interface UpdateEntityProps {
    entity: Entities;
    entityType: EntityType;
    onUpdate: (entity: FormData) => void;
    isOpen: boolean;
    onClose: () => void;
}


const UpdateEntity: React.FC<UpdateEntityProps> = ({isOpen, onUpdate, onClose, entityType, entity}) => {

    const eForm = UPDATE_FORM[entityType];

    console.log(entity)
    const existedData = {}

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2>Edit a record</h2>
            {React.createElement(eForm, {onUpdate, existedData})}
        </Modal>
    )
}
export default UpdateEntity