import React from 'react';
import {Tag, UpdateFormProps} from '../../../interfaces/IProps';
import TextInput from '../../inputs/TextInput';
import ImageInput from '../../inputs/ImageInput';
import FormsControls from '../FormsControls';
import TagInput from '../../inputs/TagInput';
import {getTags} from '../../../services/api.service';
import {GroupBase, OptionsOrGroups} from 'react-select';

const UpdateFilmForm: React.FC<UpdateFormProps> = ({onUpdate}) => {
    const [formData, setFormData] = React.useState<FormData>(new FormData());
    const [peopleOptions, setPeopleOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [planetsOptions, setPlanetsOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [starshipsOptions, setStarshipsOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [vehiclesOptions, setVehiclesOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [speciesOptions, setSpeciesOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);

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
        onUpdate(formData);
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
                <TagInput
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('people', 1, text, setPeopleOptions)
                    }}
                    options={peopleOptions}
                    fieldName={'characters'}
                    handleOnChange={handleOnChange}
                />
                <TagInput
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('planets', 1, text, setPlanetsOptions)
                    }}
                    options={planetsOptions}
                    fieldName={'planets'}
                    handleOnChange={handleOnChange}
                />
                <TagInput
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('starships', 1, text, setStarshipsOptions)
                    }}
                    options={starshipsOptions}
                    fieldName={'starships'}
                    handleOnChange={handleOnChange}
                />

                <TagInput
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('vehicles', 1, text, setVehiclesOptions)
                    }}
                    options={vehiclesOptions}
                    fieldName={'vehicles'}
                    handleOnChange={handleOnChange}
                />

                <TagInput
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
            <FormsControls onCreate={handleCreate} onReset={() => console.log('reset')}/>
        </>


    )
}

export default UpdateFilmForm;

