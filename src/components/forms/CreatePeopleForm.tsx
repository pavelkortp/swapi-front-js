import TextInput from '../inputs/TextInput';
import TagInput from '../inputs/TagInput';
import {getTags} from '../../services/api.service';
import React from 'react';
import {GroupBase, OptionsOrGroups} from 'react-select';
import {CreationFormProps, Tag} from '../../interfaces/IProps';
import ImageInput from '../inputs/ImageInput';
import FormsControls from './FormsControls';


const CreatePeopleForm:React.FC<CreationFormProps> = ({onCreate}) => {
    const [homeworldOptions, setHomeworldOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
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

    const handleOnInputChange = (text: string) => {
        getTags('planets', 1, text)
            .then(res => {
                setHomeworldOptions(res);
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
                <TextInput key={'birth_year'} fieldName={'birth_year'} handleOnChange={handleOnChange}/>
                <TextInput key={'eye_color'} fieldName={'eye_color'} handleOnChange={handleOnChange}/>
                <TextInput key={'gender'} fieldName={'gender'} handleOnChange={handleOnChange}/>
                <TextInput key={'height'} fieldName={'height'} handleOnChange={handleOnChange}/>
                <TextInput key={'mass'} fieldName={'mass'} handleOnChange={handleOnChange}/>
                <TextInput key={'skin_color'} fieldName={'skin_color'} handleOnChange={handleOnChange}/>
                <TagInput key={'homeworld'}
                          fieldName={'homeworld'}
                          handleOnChange={handleOnChange}
                          handleOnInputChange = {handleOnInputChange}
                          options={homeworldOptions}/>
                <ImageInput key={'images'} fieldName={'images'} handleOnChange={handleOnChange}/>
            </form>
            <FormsControls onCreate={handleCreate} onReset={()=>console.log('reset')}/>
        </>


    )
}

export default CreatePeopleForm;