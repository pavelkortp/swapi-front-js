import React from 'react';
import {CreationFormProps, Tag} from '../../../interfaces/IProps';
import TextInput from '../../inputs/TextInput';
import ImageInput from '../../inputs/ImageInput';
import FormsControls from '../FormsControls';
import TagInput from '../../inputs/TagInput';
import {GroupBase, OptionsOrGroups} from 'react-select';
import {getTags} from '../../../services/api.service';

const CreateSpecieForm: React.FC<CreationFormProps> = ({onCreate})=>{
    const [formData, setFormData] = React.useState<FormData>(new FormData());
    const [homeworldOptions, setHomeworldOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);

    const handleOnChange = (fieldName: string, value: string | string[] | File[]) => {
        if (Array.isArray(value)) {
            value.forEach((item) => {
                formData.append(fieldName, item);
            })
        } else {
            formData.set(fieldName, value);
        }
    }


    const handleOnInputChange = (text: string) => {
        getTags('planets', 1, text, setHomeworldOptions)
            .then(res => {
                console.log(res);
            })
            .catch((e) => console.log(e));
    }


    const handleCreate = () => {
        onCreate(formData);
        setFormData(new FormData());
    }


    return (
        <>
            <form id="create-record-form">
                <TextInput key={'name'} fieldName={'name'} handleOnChange={handleOnChange}/>
                <TextInput key={'classification'} fieldName={'classification'} handleOnChange={handleOnChange}/>
                <TextInput key={'designation'} fieldName={'designation'} handleOnChange={handleOnChange}/>
                <TextInput key={'average_height'} fieldName={'average_height'} handleOnChange={handleOnChange}/>
                <TextInput key={'skin_colors'} fieldName={'skin_colors'} handleOnChange={handleOnChange}/>
                <TextInput key={'hair_colors'} fieldName={'hair_colors'} handleOnChange={handleOnChange}/>
                <TextInput key={'eye_colors'} fieldName={'eye_colors'} handleOnChange={handleOnChange}/>
                <TextInput key={'average_lifespan'} fieldName={'average_lifespan'} handleOnChange={handleOnChange}/>
                <TagInput key={'homeworld'}
                          fieldName={'homeworld'}
                          handleOnChange={handleOnChange}
                          handleOnInputChange = {handleOnInputChange}
                          options={homeworldOptions}/>
                <TextInput key={'language'} fieldName={'language'} handleOnChange={handleOnChange}/>
                <ImageInput key={'images'} fieldName={'images'} handleOnChange={handleOnChange}/>
            </form>
            <FormsControls onCreate={handleCreate} onReset={()=>console.log('reset')}/>
        </>


    )
}

export default CreateSpecieForm;