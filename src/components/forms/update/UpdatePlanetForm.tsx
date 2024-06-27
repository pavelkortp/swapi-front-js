import React from 'react';
import {Tag, UpdateFormProps} from '../../../interfaces/IProps';
import TextInput from '../../inputs/TextInput';
import ImageInput from '../../inputs/ImageInput';
import FormsControls from '../FormsControls';
import TagInput from '../../inputs/TagInput';
import {GroupBase, OptionsOrGroups} from 'react-select';
import {getTags} from '../../../services/api.service';

const UpdatePlanetForm: React.FC<UpdateFormProps> = ({onUpdate, existedData}) => {
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
        onUpdate(formData);
        setFormData(new FormData());
    }


    return (
        <>
            <form id="create-record-form">
                <TextInput key={'name'} value={existedData.name} fieldName={'name'} handleOnChange={handleOnChange}/>
                <TextInput key={'rotation_period'} value={existedData.rotation_period} fieldName={'rotation_period'}
                           handleOnChange={handleOnChange}/>
                <TextInput key={'orbital_period'} value={existedData.orbital_period} fieldName={'orbital_period'}
                           handleOnChange={handleOnChange}/>
                <TextInput key={'diameter'} value={existedData.diameter} fieldName={'diameter'}
                           handleOnChange={handleOnChange}/>
                <TextInput key={'climate'} value={existedData.climate} fieldName={'climate'}
                           handleOnChange={handleOnChange}/>
                <TextInput key={'gravity'} value={existedData.gravity} fieldName={'gravity'}
                           handleOnChange={handleOnChange}/>
                <TextInput key={'terrain'} value={existedData.terrain} fieldName={'terrain'}
                           handleOnChange={handleOnChange}/>
                <TextInput key={'surface_water'} value={existedData.surface_water} fieldName={'surface_water'}
                           handleOnChange={handleOnChange}/>
                <TextInput key={'population'} value={existedData.popoulation} fieldName={'population'}
                           handleOnChange={handleOnChange}/>
                <TagInput
                    value={existedData.residents}
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('people', 1, text, setPeopleOptions)
                    }}
                    options={peopleOptions}
                    fieldName={'residents'}
                    handleOnChange={handleOnChange}
                />
                <TagInput
                    value={existedData.films}
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('films', 1, text, setFilmsOptions)
                    }}
                    options={filmsOptions}
                    fieldName={'films'}
                    handleOnChange={handleOnChange}
                />
                <ImageInput key={'images'} fieldName={'images'} handleOnChange={handleOnChange}/>
            </form>
            <FormsControls onCreate={handleCreate} onReset={() => console.log('reset')}/>
        </>


    )
}

export default UpdatePlanetForm;