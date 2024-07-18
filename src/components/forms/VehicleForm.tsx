import React from 'react';
import {CreateVehicleDto} from '../../dto/CreateVehicleDto';
import {GroupBase, OptionsOrGroups} from 'react-select';
import {Tag} from '../../interfaces/IProps';
import TextInput from '../inputs/TextInput';
import TagInput from '../inputs/TagInput';
import {getTags} from '../../services/api.service';
import ImageInput from '../inputs/ImageInput';
import FormsControls from './FormsControls';
import {handleOnChange} from './Forms';

const VehicleForm: React.FC<FormProps<CreateVehicleDto>> = ({onSave, value}) => {
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
                <TextInput value={value?.model} fieldName={'model'} handleOnChange={onChange}/>
                <TextInput value={value?.manufacturer} fieldName={'manufacturer'} handleOnChange={onChange}/>
                <TextInput value={value?.cost_in_credits} fieldName={'cost_in_credits'}
                           handleOnChange={onChange}/>
                <TextInput value={value?.length} fieldName={'length'} handleOnChange={onChange}/>
                <TextInput value={value?.max_atmosphering_speed} fieldName={'max_atmosphering_speed'}
                           handleOnChange={onChange}/>
                <TextInput value={value?.crew} fieldName={'crew'} handleOnChange={onChange}/>
                <TextInput value={value?.passengers} fieldName={'passengers'} handleOnChange={onChange}/>
                <TextInput value={value?.cargo_capacity} fieldName={'cargo_capacity'} handleOnChange={onChange}/>
                <TextInput value={value?.consumables} fieldName={'consumables'} handleOnChange={onChange}/>
                <TextInput value={value?.vehicle_class} fieldName={'vehicle_class'} handleOnChange={onChange}/>

                <TagInput
                    isMulti
                    value={value?.pilots}
                    handleOnInputChange={(text: string) => {
                        getTags('people', 1, text, setPeopleOptions)
                    }}
                    options={peopleOptions}
                    fieldName={'pilots'}
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

export default VehicleForm;