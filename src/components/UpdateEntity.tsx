import Entity from '../interfaces/Entity';
import React from 'react';
import {EntityParser} from '../utils/EntityParser';
import Form from './Form';

interface UpdateEntityProps {
    entity: Entity;
    handleOnChangeTag: (e:React.ChangeEvent<HTMLInputElement>)=> void;
    handleOnChangeText: (e:React.ChangeEvent<HTMLInputElement>)=> void;
    handleOnChangeImages: (e:React.ChangeEvent<HTMLInputElement>)=>void;
}


const UpdateEntity :React.FC<UpdateEntityProps> = ({entity, handleOnChangeText, handleOnChangeTag, handleOnChangeImages}) => {

    const fieldsNames = EntityParser.getEntityCreationFields(entity);

    return (
        <Form
            fieldsNames={fieldsNames}
            handleOnChangeTag={handleOnChangeTag}
            handleOnChangeImages={handleOnChangeImages}
            handleOnChangeText={handleOnChangeText}
        />
    )
}
export default UpdateEntity