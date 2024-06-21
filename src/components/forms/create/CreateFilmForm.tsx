import React from 'react';
import {CreationFormProps} from '../../../interfaces/IProps';
import TextInput from '../../inputs/TextInput';
import ImageInput from '../../inputs/ImageInput';
import FormsControls from '../FormsControls';

const CreateFilmForm: React.FC<CreationFormProps> = ({onCreate}) => {
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
                <TextInput key={'title'} fieldName={'title'} handleOnChange={handleOnChange}/>
                <TextInput key={'episode_id'} fieldName={'episode_id'} handleOnChange={handleOnChange}/>
                <TextInput key={'opening_crawl'} fieldName={'opening_crawl'} handleOnChange={handleOnChange}/>
                <TextInput key={'director'} fieldName={'director'} handleOnChange={handleOnChange}/>
                <TextInput key={'producer'} fieldName={'producer'} handleOnChange={handleOnChange}/>
                <TextInput key={'release_date'} fieldName={'release_date'} handleOnChange={handleOnChange}/>
                <ImageInput key={'images'} fieldName={'images'} handleOnChange={handleOnChange}/>
            </form>
            <FormsControls onCreate={handleCreate} onReset={() => console.log('reset')}/>
        </>


    )
}

export default CreateFilmForm;