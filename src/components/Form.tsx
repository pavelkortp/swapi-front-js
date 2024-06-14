import React from 'react';
import TextInput from './TextInput';

interface FormProps{
    fieldsNames: string[],
    handleOnChange: (event:React.ChangeEvent<HTMLInputElement>, fieldName:string)=>void
}

const Form: React.FC<FormProps> = ({fieldsNames, handleOnChange}) => {

    const generateFields = () => {
        return fieldsNames
            .map((name) => <TextInput
                fieldName={name}
                handleOnChange={handleOnChange}
                key={name}
            />);
    }


    return (
        <form id="create-record-form">
            {generateFields()}
        </form>
    )
}

export default Form;