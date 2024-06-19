import TagInput, {options} from '../components/inputs/TagInput';
import ImageInput from '../components/inputs/ImageInput';
import React from 'react';
import TextInput from '../components/inputs/TextInput';
import {Entities} from '../interfaces/Entities';
import {EntityParser} from './EntityParser';


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
        entity: Entities,
        handleOnChangeTag: (fieldName:string, values:string[]) => void,
        handleOnChangeText: (fieldName:string, value:string) => void,
        handleOnChangeImages: (images: File[]) => void
    ){
        return Object
            .entries(entity)
            .map(([key, value]) => {
                console.log(value)
                if (value instanceof Array) {
                    const tags = EntityParser.getTags(value);

                    return <TagInput
                        isMulti={true}
                        fieldName={key}
                        handleOnChange={handleOnChangeTag}
                        value={value}
                        options={options}/>
                }else {
                    return <TextInput
                        value = {value}
                        key={key}
                        fieldName={key}
                        handleOnChange={handleOnChangeText}
                    />
                }
            })
    }


    public static processTagInputChange(e: React.ChangeEvent<HTMLInputElement>) {}
}