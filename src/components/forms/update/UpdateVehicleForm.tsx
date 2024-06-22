import React from 'react';
import {CreationFormProps, Tag, UpdateFormProps} from '../../../interfaces/IProps';
import TextInput from '../../inputs/TextInput';
import ImageInput from '../../inputs/ImageInput';
import FormsControls from '../FormsControls';
import TagInput from '../../inputs/TagInput';
import {GroupBase, OptionsOrGroups} from 'react-select';
import {getTags} from '../../../services/api.service';

const UpdateVehicleForm: React.FC<UpdateFormProps> = ({onUpdate})=>{
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
                <TextInput key={'name'} fieldName={'name'} handleOnChange={handleOnChange}/>
                <TextInput key={'model'} fieldName={'model'} handleOnChange={handleOnChange}/>
                <TextInput key={'manufacturer'} fieldName={'manufacturer'} handleOnChange={handleOnChange}/>
                <TextInput key={'cost_in_credits'} fieldName={'cost_in_credits'} handleOnChange={handleOnChange}/>
                <TextInput key={'length'} fieldName={'length'} handleOnChange={handleOnChange}/>
                <TextInput key={'max_atmosphering_speed'} fieldName={'max_atmosphering_speed'} handleOnChange={handleOnChange}/>
                <TextInput key={'crew'} fieldName={'crew'} handleOnChange={handleOnChange}/>
                <TextInput key={'passengers'} fieldName={'passengers'} handleOnChange={handleOnChange}/>
                <TextInput key={'cargo_capacity'} fieldName={'cargo_capacity'} handleOnChange={handleOnChange}/>
                <TextInput key={'consumables'} fieldName={'consumables'} handleOnChange={handleOnChange}/>
                <TextInput key={'vehicle_class'} fieldName={'vehicle_class'} handleOnChange={handleOnChange}/>

                <TagInput
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('people', 1, text, setPeopleOptions)
                    }}
                    options={peopleOptions}
                    fieldName={'pilots'}
                    handleOnChange={handleOnChange}
                />

                <TagInput
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('films', 1, text, setFilmsOptions)
                    }}
                    options={peopleOptions}
                    fieldName={'films'}
                    handleOnChange={handleOnChange}
                />

                <ImageInput key={'images'} fieldName={'images'} handleOnChange={handleOnChange}/>
            </form>
            <FormsControls onCreate={handleCreate} onReset={()=>console.log('reset')}/>
        </>


    )
}

export default UpdateVehicleForm;