import React from 'react';
import Modal from './Modal';
import Form from './Form';
import Entity from '../interfaces/Entity';
import {EntityType} from '../interfaces/EntityType';

interface CreateEntityProps {
    isOpen: boolean;
    onCreate: (o: any) => void;
    onClose: () => void;
    entityType: EntityType;
}

interface FormSchema {
    [key: string]: any;
}

const CreateEntity: React.FC<CreateEntityProps> = ({isOpen, entityType, onCreate, onClose}) => {

    const [entity, setEntity] = React.useState<Entity>();

    const

    const setData = (name: string, value: any) =>{
        // this.setState({...this.state, [name]: value});
    }

    // const initializeState = (schema: string[]): FormSchema => {
    //     return schema.reduce((result: FormSchema, current: string) => {
    //         result[current] = '';
    //         return result;
    //     }, {});
    // }

    const createEntity = ()=> {
        // onCreate(this.state);
    }



    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        setData(fieldName, fieldName === 'images' ? getFilesArr(e.target.files!) : e.target.value);
    }




    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2>Create a New Record</h2>
            <Form fieldsNames={schema} />
        </Modal>
    );
}

export default CreateEntity;