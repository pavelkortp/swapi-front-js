import React from 'react';
import {CreationFormProps} from '../../../interfaces/IProps';
import TextInput from '../../inputs/TextInput';
import ImageInput from '../../inputs/ImageInput';
import FormsControls from '../FormsControls';

const CreatePlanetForm: React.FC<CreationFormProps> = ({onCreate}) => {
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
                <TextInput key={'rotation_period'} fieldName={'rotation_period'} handleOnChange={handleOnChange}/>
                <TextInput key={'orbital_period'} fieldName={'orbital_period'} handleOnChange={handleOnChange}/>
                <TextInput key={'diameter'} fieldName={'diameter'} handleOnChange={handleOnChange}/>
                <TextInput key={'climate'} fieldName={'climate'} handleOnChange={handleOnChange}/>
                <TextInput key={'gravity'} fieldName={'gravity'} handleOnChange={handleOnChange}/>
                <TextInput key={'terrain'} fieldName={'terrain'} handleOnChange={handleOnChange}/>
                <TextInput key={'surface_water'} fieldName={'surface_water'} handleOnChange={handleOnChange}/>
                <TextInput key={'population'} fieldName={'population'} handleOnChange={handleOnChange}/>
                <ImageInput key={'images'} fieldName={'images'} handleOnChange={handleOnChange}/>
            </form>
            <FormsControls onCreate={handleCreate} onReset={() => console.log('reset')}/>
        </>


    )
}

export default CreatePlanetForm;