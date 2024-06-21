import React from 'react';
import Modal from './Modal';
import {Entities} from '../interfaces/Entities';
import {EntityType} from '../interfaces/EntityType';
import {UPDATE_FORM} from './forms/update/UpdateForm';
import EditForm from './forms/update/EditForm';
import UpdatePeopleForm from './forms/update/UpdatePeopleForm';

interface UpdateEntityProps {
    entity: Entities;
    entityType: EntityType;
    onUpdate: (entity: FormData) => void;
    isOpen: boolean;
    onClose: () => void;
}


const UpdateEntity: React.FC<UpdateEntityProps> = ({isOpen, onUpdate, onClose, entityType, entity}) => {

    const eForm = UPDATE_FORM[entityType];

    const existedData = {
        name:'pablo',
        height:'190',
        mass:'87',
        hair_color:'russe',
        skin_color:'white',
        eye_color:'black',
        birth_year:'2005',
        gender: 'male',
        homeworld: {
            label: 'Earth',
            value: 0
        },
        films:[
            {
                label: 'Film 2',
                value: 0
            },
            {
                label: 'Film 1',
                value: 1
            },
        ],
        species:[
            {
                label: 'Human',
                value: 3
            },
            {
                label: 'Marsian',
                value: 1
            },
        ],
        vehicles:[
            {
                label: 'BMW',
                value: 3
            },
            {
                label: 'AUDI',
                value: 1
            },
        ],
        starships:[
            {
                label: 'X-Wing',
                value: 3
            },
            {
                label: 'Y-Wing',
                value: 1
            },
        ]
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2>Edit a record</h2>
            <UpdatePeopleForm onUpdate={onUpdate} existedData={existedData}/>
        </Modal>
    )
}
export default UpdateEntity