import React from 'react';
import {CreatePlanetDto} from '../../dto/CreatePlanetDto';
import {GroupBase, OptionsOrGroups} from 'react-select';
import {Tag} from '../../interfaces/IProps';
import TextInput from '../inputs/TextInput';
import TagInput from '../inputs/TagInput';
import {getTags} from '../../services/api.service';
import ImageInput from '../inputs/ImageInput';
import FormsControls from './FormsControls';

const PlanetForm: React.FC<FormProps<CreatePlanetDto>> = ({onSave, value}) => {
    const [formData, setFormData] = React.useState<FormData>(new FormData());
    const [filmsOptions, setFilmsOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [peopleOptions, setPeopleOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
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
                <TextInput key={'rotation_period'} value={value?.rotation_period} fieldName={'rotation_period'}
                           handleOnChange={handleOnChange}/>
                <TextInput value={value?.orbital_period} fieldName={'orbital_period'}
                           handleOnChange={handleOnChange}/>
                <TextInput value={value?.diameter} fieldName={'diameter'}
                           handleOnChange={handleOnChange}/>
                <TextInput value={value?.climate} fieldName={'climate'}
                           handleOnChange={handleOnChange}/>
                <TextInput value={value?.gravity} fieldName={'gravity'}
                           handleOnChange={handleOnChange}/>
                <TextInput value={value?.terrain} fieldName={'terrain'}
                           handleOnChange={handleOnChange}/>
                <TextInput value={value?.surface_water} fieldName={'surface_water'}
                           handleOnChange={handleOnChange}/>
                <TextInput value={value?.population} fieldName={'population'}
                           handleOnChange={handleOnChange}/>
                <TagInput
                    value={value?.residents}
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('people', 1, text, setPeopleOptions)
                    }}
                    options={peopleOptions}
                    fieldName={'residents'}
                    handleOnChange={handleOnChange}
                />
                <TagInput
                    value={value?.films}
                    isMulti
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

export default PlanetForm;