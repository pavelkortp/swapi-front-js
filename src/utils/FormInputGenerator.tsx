import TagInput, {options} from '../components/TagInput';
import ImageInput from '../components/ImageInput';
import React from 'react';
import TextInput from '../components/TextInput';

export class FormInputGenerator {

    public static generateInput(
        fieldNames: string[],
        handleOnChangeTag: (e: React.ChangeEvent<HTMLInputElement>) => void,
        handleOnChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void,
        handleOnChangeImages: (e: React.ChangeEvent<HTMLInputElement>) => void
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
}