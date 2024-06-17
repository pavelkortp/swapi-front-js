import Entity from '../interfaces/Entity';
import React, {useEffect} from 'react';
import Modal from './Modal';
import Form from './Form';
import {EntityParser} from '../utils/EntityParser';

interface UpdateEntityProps {
    entity: Entity;
    onUpdate: (id: string, entity: FormData)=>void;
    isOpen: boolean;
    onClose: () => void;
}


const UpdateEntity: React.FC<UpdateEntityProps> = ({entity,  isOpen, onClose, onUpdate}) => {
    const [data, setData] = React.useState<FormData>(new FormData());
    const [fieldsNames, setFieldsNames] = React.useState<string[]>(EntityParser.getEntityCreationFields(entity));

    useEffect(() => {
        setFieldsNames(EntityParser.getEntityCreationFields(entity))
    }, [entity]);

    // const handleUpdate = () => {
    //     onUpdate(data);
    //     setData(new FormData());
    // }

    const handleOnChangeImages = (images: File[]) => {
        images.forEach((e) => {
            data.set('images', e);
        })
    }

    const handleOnChangeText = (fieldName: string, value: string) => {
        data.set(fieldName, value);
    }

    const handleOnChangeTag = (fieldName: string, values: string[]) => {
        values.forEach((e) => {
            data.set(fieldName, e);
        })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Form
                fieldsNames={fieldsNames}
                handleOnChangeTag={handleOnChangeTag}
                handleOnChangeImages={handleOnChangeImages}
                handleOnChangeText={handleOnChangeText}
            />
        </Modal>
    )
}
export default UpdateEntity