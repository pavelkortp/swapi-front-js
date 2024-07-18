import React from 'react';
import {GroupBase, OptionsOrGroups} from 'react-select';
import TextInput from '../inputs/TextInput';
import TagInput from '../inputs/TagInput';
import {getTags} from '../../services/api.service';
import ImageInput from '../inputs/ImageInput';
import FormsControls from './FormsControls';
import {CreatePeopleDto} from '../../dto/CreatePeopleDto';
import {Tag} from '../../interfaces/IProps';
import {handleOnChange} from './Forms';

const PeopleForm: React.FC<FormProps<CreatePeopleDto>> = ({onSave, value}) => {
    const [formData, setFormData] = React.useState<FormData>(new FormData());
    const [homeworldOptions, setHomeworldOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [filmsOptions, setFilmsOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [speciesOptions, setSpeciesOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [vehiclesOptions, setVehiclesOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [starshipsOptions, setStarshipsOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);

    const handleOnSave = ()=>{
        onSave(formData);
    }

    const onChange = ( fieldName: string, value: string | string[] | File[])=>{
        handleOnChange(formData, fieldName, value);
    }

    return (
        <>
            <form id="update-record-form">
                <TextInput fieldName={'name'} value={value?.name} handleOnChange={onChange}/>
                <TextInput fieldName={'birth_year'} value={value?.birth_year} handleOnChange={onChange}/>
                <TextInput fieldName={'eye_color'} value={value?.eye_color} handleOnChange={onChange}/>
                <TextInput fieldName={'gender'} value={value?.gender} handleOnChange={onChange}/>
                <TextInput fieldName={'height'} value={value?.height} handleOnChange={onChange}/>
                <TextInput fieldName={'mass'} value={value?.mass} handleOnChange={onChange}/>
                <TextInput fieldName={'skin_color'} value={value?.skin_color} handleOnChange={onChange}/>
                <TextInput fieldName={'hair_color'} value={value?.hair_color} handleOnChange={onChange}/>
                <TagInput
                          value={value?.homeworld}
                          fieldName={'homeworld'}
                          handleOnChange={onChange}
                          handleOnInputChange={(text: string) => {
                              getTags('planets', 1, text, setHomeworldOptions)
                          }}
                          options={homeworldOptions}
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

                <TagInput
                    isMulti
                    value={value?.species}
                    handleOnInputChange={(text: string) => {
                        getTags('species', 1, text, setSpeciesOptions)
                    }}
                    options={speciesOptions}
                    fieldName={'species'}
                    handleOnChange={onChange}
                />

                <TagInput
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('vehicles', 1, text, setVehiclesOptions)
                    }}
                    value={value?.vehicles}
                    options={vehiclesOptions}
                    fieldName={'vehicles'}
                    handleOnChange={onChange}
                />

                <TagInput
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('starships', 1, text, setStarshipsOptions)
                    }}
                    value={value?.starships}
                    options={starshipsOptions}
                    fieldName={'starships'}
                    handleOnChange={onChange}
                />
                <ImageInput fieldName={'images'} handleOnChange={onChange}/>
            </form>
            <FormsControls onCreate={handleOnSave} onReset={() => {setFormData(new FormData())}}/>
        </>
    )
}

export default PeopleForm;