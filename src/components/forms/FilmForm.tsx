import React from 'react';
import {CreateFilmDto} from '../../dto/CreateFilmDto';
import {GroupBase, OptionsOrGroups} from 'react-select';
import {FormProps, Tag} from '../../interfaces/IProps';
import TextInput from '../inputs/TextInput';
import DateInput from '../inputs/DateInput';
import TagInput from '../inputs/TagInput';
import {getTags} from '../../services/api.service';
import ImageInput from '../inputs/ImageInput';
import FormsControls from './FormsControls';
import {handleOnChange} from './Forms';

const FilmForm:React.FC<FormProps<CreateFilmDto>> = ({onSave, value})=>{
    const [formData, setFormData] = React.useState<FormData>(new FormData());
    const [peopleOptions, setPeopleOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [planetsOptions, setPlanetsOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [starshipsOptions, setStarshipsOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [vehiclesOptions, setVehiclesOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [speciesOptions, setSpeciesOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);

    const handleOnSave = ()=>{
        onSave(formData);
    }

    const onChange = ( fieldName: string, value: string | string[] | File[])=>{
        handleOnChange(formData, fieldName, value);
    }

    return (
        <>
            <form id="create-record-form">
                <TextInput value={value?.title} fieldName={'title'} handleOnChange={onChange}/>
                <TextInput value={value?.episode_id} fieldName={'episode_id'} handleOnChange={onChange}/>
                <TextInput value={value?.opening_crawl} fieldName={'opening_crawl'} handleOnChange={onChange}/>
                <TextInput value={value?.director} fieldName={'director'} handleOnChange={onChange}/>
                <TextInput value={value?.producer} fieldName={'producer'} handleOnChange={onChange}/>
                <DateInput value={value?.release_date} fieldName={'release_date'} handleOnChange={onChange}/>
                <TagInput
                    isMulti
                    value={value?.characters}
                    handleOnInputChange={(text: string) => {
                        getTags('people', 1, text, setPeopleOptions)
                    }}
                    options={peopleOptions}
                    fieldName={'characters'}
                    handleOnChange={onChange}
                />
                <TagInput
                    isMulti
                    value={value?.planets}
                    handleOnInputChange={(text: string) => {
                        getTags('planets', 1, text, setPlanetsOptions)
                    }}
                    options={planetsOptions}
                    fieldName={'planets'}
                    handleOnChange={onChange}
                />
                <TagInput
                    value={value?.starships}
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('starships', 1, text, setStarshipsOptions)
                    }}
                    options={starshipsOptions}
                    fieldName={'starships'}
                    handleOnChange={onChange}
                />

                <TagInput
                    value={value?.vehicles}
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('vehicles', 1, text, setVehiclesOptions)
                    }}
                    options={vehiclesOptions}
                    fieldName={'vehicles'}
                    handleOnChange={onChange}
                />

                <TagInput
                    value={value?.species}
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('species', 1, text, setSpeciesOptions)
                    }}
                    options={speciesOptions}
                    fieldName={'species'}
                    handleOnChange={onChange}
                />

                <ImageInput key={'images'} fieldName={'images'} handleOnChange={onChange}/>
            </form>
            <FormsControls onCreate={handleOnSave} onReset={() => console.log('reset')}/>
        </>
    )
}

export default FilmForm;