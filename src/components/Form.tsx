import React from 'react';
import Input from './Input';

interface FormProps{
    fieldsNames: string[],
    handleOnChange: (event:React.ChangeEvent<HTMLInputElement>, fieldName:string)=>void
}

const Form: React.FC<FormProps> = ({fieldsNames, handleOnChange}) => {

    const generateFields = () => {
        return fieldsNames
            .map((name) => <Input
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