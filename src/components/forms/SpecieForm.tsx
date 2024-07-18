import React from 'react';
import {CreateSpecieDto} from '../../dto/CreateSpecieDto';
import {GroupBase, OptionsOrGroups} from 'react-select';
import {Tag} from '../../interfaces/IProps';
import TextInput from '../inputs/TextInput';
import TagInput from '../inputs/TagInput';
import {getTags} from '../../services/api.service';
import ImageInput from '../inputs/ImageInput';
import FormsControls from './FormsControls';
import {handleOnChange} from './Forms';

const SpecieForm: React.FC<FormProps<CreateSpecieDto>> = ({onSave, value})=>{
    const [formData, setFormData] = React.useState<FormData>(new FormData());
    const [homeworldOptions, setHomeworldOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [peopleOptions, setPeopleOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [filmsOptions, setFilmsOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);


    const onChange = ( fieldName: string, value: string | string[] | File[])=>{
        handleOnChange(formData, fieldName, value);
    }


    const handleCreate = () => {
        onSave(formData);
    }


    return (
        <>
            <form id="create-record-form">
                <TextInput value={value?.name} fieldName={'name'} handleOnChange={onChange}/>
                <TextInput value={value?.classification} fieldName={'classification'} handleOnChange={onChange}/>
                <TextInput value={value?.designation} fieldName={'designation'} handleOnChange={onChange}/>
                <TextInput value={value?.average_height} fieldName={'average_height'} handleOnChange={onChange}/>
                <TextInput value={value?.skin_colors} fieldName={'skin_colors'} handleOnChange={onChange}/>
                <TextInput value={value?.hair_colors} fieldName={'hair_colors'} handleOnChange={onChange}/>
                <TextInput value={value?.eye_colors} fieldName={'eye_colors'} handleOnChange={onChange}/>
                <TextInput value={value?.average_lifespan} fieldName={'average_lifespan'} handleOnChange={onChange}/>
                <TextInput value={value?.language} fieldName={'language'} handleOnChange={onChange}/>
                <TagInput
                          fieldName={'homeworld'}
                          value={value?.homeworld}
                          handleOnChange={onChange}
                          handleOnInputChange={(text: string) => {
                              getTags('planets', 1, text, setHomeworldOptions)
                          }}
                          options={homeworldOptions}/>

                <TagInput
                    isMulti
                    value={value?.people}
                    handleOnInputChange={(text: string) => {
                        getTags('people', 1, text, setPeopleOptions)
                    }}
                    options={peopleOptions}
                    fieldName={'people'}
                    handleOnChange={onChange}
                />

                <TagInput
                    isMulti
                    value={value?.films}
                    handleOnInputChange={(text: string) => {
                        getTags('films', 1, text, setFilmsOptions)
                    }}
                    options={filmsOptions}
                    fieldName={'films'}
                    handleOnChange={onChange}
                />

                <ImageInput fieldName={'images'} handleOnChange={onChange}/>
            </form>
            <FormsControls onCreate={handleCreate} onReset={() => console.log('reset')}/>
        </>
    )
}

export default SpecieForm;