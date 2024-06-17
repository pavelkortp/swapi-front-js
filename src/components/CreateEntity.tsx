import React, {useEffect} from 'react';
import Modal from './Modal';
import Form from './Form';
import Entity from '../interfaces/Entity';
import {EntityParser} from '../utils/EntityParser';

interface CreateEntityProps {
    isOpen: boolean;
    onCreate: (o: any) => void;
    onClose: () => void;
    entity: Entity;
}

const CreateEntity: React.FC<CreateEntityProps> = ({isOpen, entity, onCreate, onClose}) => {

    const [data, setData] = React.useState<FormData>(new FormData());
    const [fieldsNames, setFieldsNames] = React.useState<string[]>(EntityParser.getEntityCreationFields(entity));

    useEffect(() => {
        setFieldsNames(EntityParser.getEntityCreationFields(entity))
    }, [entity]);

    const handleCreate = () => {
        onCreate(data);
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
            <h2>Create a New Record</h2>
            <Form fieldsNames={fieldsNames}
                  handleOnChangeTag={handleOnChangeTag}
                  handleOnChangeText={handleOnChangeText}
                  handleOnChangeImages={handleOnChangeImages}
            />
            <div className="d-grid gap-2">
                <button className="btn btn-outline-success" type="button" key="create"
                        onClick={() => handleCreate()}>
                    <b>Create</b>
                </button>
                <button className="btn btn-danger" type="button" key="reset"
                        onClick={() => {
                            console.log('RESET')
                        }}>Reset
                </button>
            </div>
        </Modal>
    );
}

export default CreateEntity;