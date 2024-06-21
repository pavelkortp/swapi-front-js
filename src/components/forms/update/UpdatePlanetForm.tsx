import React from 'react';
import { UpdateFormProps} from '../../../interfaces/IProps';
import TextInput from '../../inputs/TextInput';
import ImageInput from '../../inputs/ImageInput';
import FormsControls from '../FormsControls';
import TagInput from '../../inputs/TagInput';

const UpdatePlanetForm: React.FC<UpdateFormProps> = ({onUpdate}) => {
    const [formData, setFormData] = React.useState<FormData>(new FormData());

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
                <TextInput key={'rotation_period'} fieldName={'rotation_period'} handleOnChange={handleOnChange}/>
                <TextInput key={'orbital_period'} fieldName={'orbital_period'} handleOnChange={handleOnChange}/>
                <TextInput key={'diameter'} fieldName={'diameter'} handleOnChange={handleOnChange}/>
                <TextInput key={'climate'} fieldName={'climate'} handleOnChange={handleOnChange}/>
                <TextInput key={'gravity'} fieldName={'gravity'} handleOnChange={handleOnChange}/>
                <TextInput key={'terrain'} fieldName={'terrain'} handleOnChange={handleOnChange}/>
                <TextInput key={'surface_water'} fieldName={'surface_water'} handleOnChange={handleOnChange}/>
                <TextInput key={'population'} fieldName={'population'} handleOnChange={handleOnChange}/>
                <TagInput
                    isMulti
                    handleOnInputChange={handleOnInputChange}
                    options={residentsOptions}
                    fieldName={'residents'}
                    handleOnChange={handleOnChange}
                />
                <TagInput
                    isMulti
                    handleOnInputChange={handleOnInputChange}
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