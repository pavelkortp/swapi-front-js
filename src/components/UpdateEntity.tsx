import React, {useEffect} from 'react';
import Modal from './Modal';
import Form from './Form';
import {EntityParser} from '../utils/EntityParser';
import {Entities} from '../interfaces/Entities';

interface UpdateEntityProps {
    entity: Entities;
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

    const handleUpdate = () => {
        // onUpdate(data);
        setData(new FormData());
    }

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
            <h2>Edit a record</h2>
            <Form
                fieldsNames={fieldsNames}
                entity={entity}
                handleOnChangeTag={handleOnChangeTag}
                handleOnChangeImages={handleOnChangeImages}
                handleOnChangeText={handleOnChangeText}
            />
            <div className="d-grid gap-2">
                <button className="btn btn-outline-success" type="button" key="create"
                        onClick={() => handleUpdate()}>
                    <b>Update</b>
                </button>
                <button className="btn btn-danger" type="button" key="reset"
                        onClick={() => {
                            console.log('RESET')
                        }}>Reset
                </button>
            </div>
        </Modal>
    )
}
export default UpdateEntity