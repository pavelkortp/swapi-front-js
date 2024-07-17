import React from 'react';
import {CreateSpecieDto} from '../../dto/CreateSpecieDto';
import {GroupBase, OptionsOrGroups} from 'react-select';
import {Tag} from '../../interfaces/IProps';
import TextInput from '../inputs/TextInput';
import TagInput from '../inputs/TagInput';
import {getTags} from '../../services/api.service';
import ImageInput from '../inputs/ImageInput';
import FormsControls from './FormsControls';

const SpecieForm: React.FC<FormProps<CreateSpecieDto>> = ({onSave, value})=>{
    const [formData, setFormData] = React.useState<FormData>(new FormData());
    const [homeworldOptions, setHomeworldOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [peopleOptions, setPeopleOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [filmsOptions, setFilmsOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);


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
        onSave(formData);
    }


    return (
        <>
            <form id="create-record-form">
                <TextInput value={value?.name} fieldName={'name'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.classification} fieldName={'classification'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.designation} fieldName={'designation'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.average_height} fieldName={'average_height'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.skin_colors} fieldName={'skin_colors'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.hair_colors} fieldName={'hair_colors'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.eye_colors} fieldName={'eye_colors'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.average_lifespan} fieldName={'average_lifespan'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.language} fieldName={'language'} handleOnChange={handleOnChange}/>
                <TagInput
                          fieldName={'homeworld'}
                          value={value?.homeworld}
                          handleOnChange={handleOnChange}
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
                    handleOnChange={handleOnChange}
                />

                <TagInput
                    isMulti
                    value={value?.films}
                    handleOnInputChange={(text: string) => {
                        getTags('films', 1, text, setFilmsOptions)
                    }}
                    options={filmsOptions}
                    fieldName={'films'}
                    handleOnChange={handleOnChange}
                />

                <ImageInput fieldName={'images'} handleOnChange={handleOnChange}/>
            </form>
            <FormsControls onCreate={handleCreate} onReset={() => console.log('reset')}/>
        </>
    )
}

export default SpecieForm;