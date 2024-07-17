import React from 'react';
import {GroupBase, OptionsOrGroups} from 'react-select';
import TextInput from '../inputs/TextInput';
import TagInput from '../inputs/TagInput';
import {getTags} from '../../services/api.service';
import ImageInput from '../inputs/ImageInput';
import FormsControls from './FormsControls';
import {CreatePeopleDto} from '../../dto/CreatePeopleDto';
import {Tag} from '../../interfaces/IProps';

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

    const handleOnChange = (fieldName: string, value: string | string[] | File[]) => {
        if (Array.isArray(value)) {
            if(value.length > 0){
                value.forEach((item) => {
                    formData.append(fieldName, item);
                })
            }
        } else {
            formData.set(fieldName, value);
        }
    }

    return (
        <>
            <form id="update-record-form">
                <TextInput fieldName={'name'} value={value?.name} handleOnChange={handleOnChange}/>
                <TextInput fieldName={'birth_year'} value={value?.birth_year} handleOnChange={handleOnChange}/>
                <TextInput fieldName={'eye_color'} value={value?.eye_color} handleOnChange={handleOnChange}/>
                <TextInput fieldName={'gender'} value={value?.gender} handleOnChange={handleOnChange}/>
                <TextInput fieldName={'height'} value={value?.height} handleOnChange={handleOnChange}/>
                <TextInput fieldName={'mass'} value={value?.mass} handleOnChange={handleOnChange}/>
                <TextInput fieldName={'skin_color'} value={value?.skin_color} handleOnChange={handleOnChange}/>
                <TextInput fieldName={'hair_color'} value={value?.hair_color} handleOnChange={handleOnChange}/>
                <TagInput
                          value={value?.homeworld}
                          fieldName={'homeworld'}
                          handleOnChange={handleOnChange}
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
                    handleOnChange={handleOnChange}
                />

                <TagInput
                    isMulti
                    value={value?.species}
                    handleOnInputChange={(text: string) => {
                        getTags('species', 1, text, setSpeciesOptions)
                    }}
                    options={speciesOptions}
                    fieldName={'species'}
                    handleOnChange={handleOnChange}
                />

                <TagInput
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('vehicles', 1, text, setVehiclesOptions)
                    }}
                    value={value?.vehicles}
                    options={vehiclesOptions}
                    fieldName={'vehicles'}
                    handleOnChange={handleOnChange}
                />

                <TagInput
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('starships', 1, text, setStarshipsOptions)
                    }}
                    value={value?.starships}
                    options={starshipsOptions}
                    fieldName={'starships'}
                    handleOnChange={handleOnChange}
                />
                <ImageInput fieldName={'images'} handleOnChange={handleOnChange}/>
            </form>
            <FormsControls onCreate={handleOnSave} onReset={() => {setFormData(new FormData())}}/>
        </>
    )
}

export default PeopleForm;