import React from 'react';
import {Tag, UpdateFormProps} from '../../../interfaces/IProps';
import TextInput from '../../inputs/TextInput';
import TagInput from '../../inputs/TagInput';
import ImageInput from '../../inputs/ImageInput';
import FormsControls from '../FormsControls';
import {getTags} from '../../../services/api.service';
import {GroupBase, OptionsOrGroups} from 'react-select';


const UpdatePeopleForm: React.FC<UpdateFormProps> = ({onUpdate, existedData}) => {
    const [formData, setFormData] = React.useState<FormData>(new FormData());
    const [homeworldOptions, setHomeworldOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [filmsOptions, setFilmsOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [speciesOptions, setSpeciesOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [vehiclesOptions, setVehiclesOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);
    const [starshipsOptions, setStarshipsOptions] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>([]);

    const handleOnChange = (fieldName: string, value: string | string[] | File[]) => {
        if (Array.isArray(value)) {
            value.forEach((item) => {
                formData.append(fieldName, item);
            })
        } else {
            formData.set(fieldName, value);
        }
    }

    const handleUpdate = () => {
        onUpdate(formData);
        setFormData(new FormData());
    }


    return (
        <>
            <form id="update-record-form">
                <TextInput key={'name'} fieldName={'name'} handleOnChange={handleOnChange}/>
                <TextInput key={'birth_year'} fieldName={'birth_year'} handleOnChange={handleOnChange}/>
                <TextInput key={'eye_color'} fieldName={'eye_color'} handleOnChange={handleOnChange}/>
                <TextInput key={'gender'} fieldName={'gender'} handleOnChange={handleOnChange}/>
                <TextInput key={'height'} fieldName={'height'} handleOnChange={handleOnChange}/>
                <TextInput key={'mass'} fieldName={'mass'} handleOnChange={handleOnChange}/>
                <TextInput key={'skin_color'} fieldName={'skin_color'} handleOnChange={handleOnChange}/>
                <TagInput key={'homeworld'}
                          fieldName={'homeworld'}
                          handleOnChange={handleOnChange}
                          handleOnInputChange={(text: string) => {
                              getTags('planets', 1, text, setHomeworldOptions)
                          }}
                          options={homeworldOptions}
                />
                <TagInput
                    isMulti
                    handleOnInputChange={(text: string) => {
                        getTags('films', 1, text, setFilmsOptions)
                    }}
                    options={filmsOptions}
                    fieldName={'films'}
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
                        getTags('starships', 1, text, setStarshipsOptions)
                    }}
                    options={starshipsOptions}
                    fieldName={'starships'}
                    handleOnChange={handleOnChange}
                />
                <ImageInput key={'images'} fieldName={'images'} handleOnChange={handleOnChange}/>
            </form>
            <FormsControls onCreate={handleUpdate} onReset={() => console.log('reset')}/>
        </>
    )
}



export default UpdatePeopleForm;