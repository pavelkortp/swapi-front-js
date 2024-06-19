import React from 'react';
import {CreationFormProps} from '../../interfaces/IProps';
import TextInput from '../TextInput';
import ImageInput from '../ImageInput';
import FormsControls from './FormsControls';

const CreateStarshipForm: React.FC<CreationFormProps> = ({onCreate})=>{
    const [formData, setFormData] = React.useState<FormData>(new FormData());

    const handleOnChange = (fieldName: string, value: string | string[] | File[]) => {
        if (Array.isArray(value)) {
            value.forEach((item) => {
                formData.append(fieldName, item);
            })
        } else {
            formData.set(fieldName, value);
        }
    }


    const handleCreate = () => {
        onCreate(formData);
        setFormData(new FormData());
    }


    return (
        <>
            <form id="create-record-form">
                <TextInput key={'name'} fieldName={'name'} handleOnChange={handleOnChange}/>
                <TextInput key={'model'} fieldName={'model'} handleOnChange={handleOnChange}/>
                <TextInput key={'manufacturer'} fieldName={'manufacturer'} handleOnChange={handleOnChange}/>
                <TextInput key={'cost_in_credits'} fieldName={'cost_in_credits'} handleOnChange={handleOnChange}/>
                <TextInput key={'length'} fieldName={'length'} handleOnChange={handleOnChange}/>
                <TextInput key={'max_atmosphering_speed'} fieldName={'max_atmosphering_speed'} handleOnChange={handleOnChange}/>
                <TextInput key={'crew'} fieldName={'crew'} handleOnChange={handleOnChange}/>
                <TextInput key={'passengers'} fieldName={'passengers'} handleOnChange={handleOnChange}/>
                <TextInput key={'cargo_capacity'} fieldName={'cargo_capacity'} handleOnChange={handleOnChange}/>
                <TextInput key={'consumables'} fieldName={'consumables'} handleOnChange={handleOnChange}/>
                <TextInput key={'hyperdrive_rating'} fieldName={'hyperdrive_rating'} handleOnChange={handleOnChange}/>
                <TextInput key={'MGLT'} fieldName={'MGLT'} handleOnChange={handleOnChange}/>
                <TextInput key={'starship_class'} fieldName={'starship_class'} handleOnChange={handleOnChange}/>
                <ImageInput key={'images'} fieldName={'images'} handleOnChange={handleOnChange}/>
            </form>
            <FormsControls onCreate={handleCreate} onReset={()=>console.log('reset')}/>
        </>


    )
}

export default CreateStarshipForm;