import React from 'react';
import {FormInputGenerator} from '../utils/FormInputGenerator';

interface FormProps {
    fieldsNames: string[],
    handleOnChangeTag: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleOnChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleOnChangeImages: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Form: React.FC<FormProps> = ({fieldsNames, handleOnChangeTag, handleOnChangeImages, handleOnChangeText}) => {

    const generateFields = () => {
        return FormInputGenerator.generateInput(fieldsNames, handleOnChangeTag, handleOnChangeImages, handleOnChangeText);
    }


    return (
        <form id="create-record-form">
            {generateFields()}
        </form>
    )
}

export default Form;