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

    const handleOnChange = (fieldName: string, value: string | string[] | File[]) => {
        if (Array.isArray(value)) {
            value.forEach((item) => {
                formData.append(fieldName, item);
            })
        } else {
            formData.set(fieldName, value);
        }
    }

    return (
        <>
            <form id="create-record-form">
                <TextInput value={value?.title} fieldName={'title'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.episode_id} fieldName={'episode_id'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.opening_crawl} fieldName={'opening_crawl'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.director} fieldName={'director'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.producer} fieldName={'producer'} handleOnChange={handleOnChange}/>
                <DateInput value={value?.release_date} fieldName={'release_date'} handleOnChange={handleOnChange}/>
                <TagInput
                    isMulti
                    value={value?.characters}
                    handleOnInputChange={(text: string) => {
                        getTags('people', 1, text, setPeopleOptions)
                    }}
                    options={peopleOptions}
                    fieldName={'characters'}
                    handleOnChange={handleOnChange}
                />
                <TagInput
                    isMulti
                    value={value?.planets}
                    handleOnInputChange={(text: string) => {
                        getTags('planets', 1, text, setPlanetsOptions)
                    }}
                    options={planetsOptions}
                    fieldName={'planets'}
                    handleOnChange={handleOnChange}
                />
                <TagInput
                    value={value?.starships}
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('starships', 1, text, setStarshipsOptions)
                    }}
                    options={starshipsOptions}
                    fieldName={'starships'}
                    handleOnChange={handleOnChange}
                />

                <TagInput
                    value={value?.vehicles}
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('vehicles', 1, text, setVehiclesOptions)
                    }}
                    options={vehiclesOptions}
                    fieldName={'vehicles'}
                    handleOnChange={handleOnChange}
                />

                <TagInput
                    value={value?.species}
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('species', 1, text, setSpeciesOptions)
                    }}
                    options={speciesOptions}
                    fieldName={'species'}
                    handleOnChange={handleOnChange}
                />

                <ImageInput key={'images'} fieldName={'images'} handleOnChange={handleOnChange}/>
            </form>
            <FormsControls onCreate={handleOnSave} onReset={() => console.log('reset')}/>
        </>
    )
}

export default FilmForm;