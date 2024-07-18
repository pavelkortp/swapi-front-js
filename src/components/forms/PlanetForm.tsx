import React from 'react';
import {CreatePlanetDto} from '../../dto/CreatePlanetDto';
import {GroupBase, OptionsOrGroups} from 'react-select';
import {Tag} from '../../interfaces/IProps';
import TextInput from '../inputs/TextInput';
import TagInput from '../inputs/TagInput';
import {getTags} from '../../services/api.service';
import ImageInput from '../inputs/ImageInput';
import FormsControls from './FormsControls';
import {handleOnChange} from './Forms';

const PlanetForm: React.FC<FormProps<CreatePlanetDto>> = ({onSave, value}) => {
    const [formData, setFormData] = React.useState<FormData>(new FormData());
    const [filmsOptions, setFilmsOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [peopleOptions, setPeopleOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);

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
                <TextInput key={'rotation_period'} value={value?.rotation_period} fieldName={'rotation_period'}
                           handleOnChange={onChange}/>
                <TextInput value={value?.orbital_period} fieldName={'orbital_period'}
                           handleOnChange={onChange}/>
                <TextInput value={value?.diameter} fieldName={'diameter'}
                           handleOnChange={onChange}/>
                <TextInput value={value?.climate} fieldName={'climate'}
                           handleOnChange={onChange}/>
                <TextInput value={value?.gravity} fieldName={'gravity'}
                           handleOnChange={onChange}/>
                <TextInput value={value?.terrain} fieldName={'terrain'}
                           handleOnChange={onChange}/>
                <TextInput value={value?.surface_water} fieldName={'surface_water'}
                           handleOnChange={onChange}/>
                <TextInput value={value?.population} fieldName={'population'}
                           handleOnChange={onChange}/>
                <TagInput
                    value={value?.residents}
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('people', 1, text, setPeopleOptions)
                    }}
                    options={peopleOptions}
                    fieldName={'residents'}
                    handleOnChange={onChange}
                />
                <TagInput
                    value={value?.films}
                    isMulti
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

export default PlanetForm;