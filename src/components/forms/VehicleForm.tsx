import React from 'react';
import {CreateVehicleDto} from '../../dto/CreateVehicleDto';
import {GroupBase, OptionsOrGroups} from 'react-select';
import {Tag} from '../../interfaces/IProps';
import TextInput from '../inputs/TextInput';
import TagInput from '../inputs/TagInput';
import {getTags} from '../../services/api.service';
import ImageInput from '../inputs/ImageInput';
import FormsControls from './FormsControls';

const VehicleForm: React.FC<FormProps<CreateVehicleDto>> = ({onSave, value}) => {
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
                <TextInput value={value?.model} fieldName={'model'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.manufacturer} fieldName={'manufacturer'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.cost_in_credits} fieldName={'cost_in_credits'}
                           handleOnChange={handleOnChange}/>
                <TextInput value={value?.length} fieldName={'length'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.max_atmosphering_speed} fieldName={'max_atmosphering_speed'}
                           handleOnChange={handleOnChange}/>
                <TextInput value={value?.crew} fieldName={'crew'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.passengers} fieldName={'passengers'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.cargo_capacity} fieldName={'cargo_capacity'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.consumables} fieldName={'consumables'} handleOnChange={handleOnChange}/>
                <TextInput value={value?.vehicle_class} fieldName={'vehicle_class'} handleOnChange={handleOnChange}/>

                <TagInput
                    isMulti
                    value={value?.pilots}
                    handleOnInputChange={(text: string) => {
                        getTags('people', 1, text, setPeopleOptions)
                    }}
                    options={peopleOptions}
                    fieldName={'pilots'}
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

export default VehicleForm;