import React from 'react';
import Modal from './Modal';
import {EntityType} from '../interfaces/EntityType';
import {FORMS} from './forms/Forms';

interface CreateEntityProps {
    isOpen: boolean;
    onCreate: (o: FormData) => void;
    onClose: () => void;
    entityType: EntityType;
}

const CreateEntity: React.FC<CreateEntityProps> = ({isOpen, onCreate, onClose, entityType}) => {

    const eForm = FORMS[entityType];

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2>Create a New Record</h2>
            {React.createElement(eForm, {onSave: onCreate})}
        </Modal>
    );
}

export default CreateEntity;