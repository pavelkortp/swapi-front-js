import React from 'react';
import {FormInputGenerator} from '../utils/FormInputGenerator';

interface FormProps {
    fieldsNames: string[],
    handleOnChangeTag: (fieldName:string, values:string[]) => void,
    handleOnChangeText: (fieldName:string, value:string) => void,
    handleOnChangeImages: (images: File[]) => void,
}

const Form: React.FC<FormProps> = ({fieldsNames, handleOnChangeTag, handleOnChangeImages, handleOnChangeText}) => {

    const generateFields = () => {
        return FormInputGenerator
            .generateCreateInputs(fieldsNames,
                handleOnChangeTag,
                handleOnChangeText,
                handleOnChangeImages);
    }


    return (
        <form id="create-record-form">
            {generateFields()}
        </form>
    )
}

export default Form;