import React from 'react';
import {FormInputGenerator} from '../utils/FormInputGenerator';
import {Entities} from '../interfaces/Entities';

interface FormProps {
    entity?: Entities,
    fieldsNames: string[],
    handleOnChangeTag: (fieldName: string, values: string[]) => void,
    handleOnChangeText: (fieldName: string, value: string) => void,
    handleOnChangeImages: (images: File[]) => void,
}

const Form: React.FC<FormProps> = ({
                                       fieldsNames,
                                       handleOnChangeTag,
                                       handleOnChangeImages,
                                       handleOnChangeText,
                                       entity
                                   }) => {

    const generateFields = () => {
        return FormInputGenerator
            .generateCreateInputs(
                fieldsNames,
                handleOnChangeTag,
                handleOnChangeText,
                handleOnChangeImages
            );
    }

    const generateFilledFields = (e: Entities) => {
        return FormInputGenerator
            .generateUpdateInputs(
                e,
                handleOnChangeTag,
                handleOnChangeText,
                handleOnChangeImages);
    }


    return (
        <form id="create-record-form">
            {entity ? generateFilledFields(entity) : generateFields()}
        </form>
    )
}

export default Form;