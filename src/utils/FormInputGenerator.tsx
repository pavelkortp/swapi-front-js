import TagInput, {options} from '../components/TagInput';
import ImageInput from '../components/ImageInput';
import React from 'react';
import TextInput from '../components/TextInput';

export class FormInputGenerator {

    public static generateCreateInputs(
        fieldNames: string[],
        handleOnChangeTag: (fieldName:string, values:string[]) => void,
        handleOnChangeText: (fieldName:string, value:string) => void,
        handleOnChangeImages: (images: File[]) => void
    ) {
        return fieldNames.map((f) => {
            if (f === 'homeworld') {
                return <TagInput
                    isMulti={false}
                    key={f}
                    options={options}
                    fieldName={f}
                    handleOnChange={handleOnChangeTag}
                />
            } else if (f === 'images') {
                return <ImageInput
                    key={f}
                    fieldName={f}
                    handleOnChange={handleOnChangeImages}
                />
            } else {
                return <TextInput
                    key={f}
                    fieldName={f}
                    handleOnChange={handleOnChangeText}
                />
            }
        })
    }

    public static generateUpdateInputs(
        fieldNames: string[],
        handleOnChangeTag: (fieldName:string, values:string[]) => void,
        handleOnChangeText: (fieldName:string, value:string) => void,
        handleOnChangeImages: (images: File[]) => void
    ){
        return fieldNames.map((f) => {
            if (f === 'homeworld') {
                return <TagInput
                    isMulti={false}
                    key={f}
                    options={options}
                    fieldName={f}
                    handleOnChange={handleOnChangeTag}
                />
            } else if (f === 'images') {
                return <ImageInput
                    key={f}
                    fieldName={f}
                    handleOnChange={handleOnChangeImages}
                />
            } else {
                return <TextInput
                    key={f}
                    fieldName={f}
                    handleOnChange={handleOnChangeText}
                />
            }
        })
    }


    public static processTagInputChange(e: React.ChangeEvent<HTMLInputElement>) {}
}