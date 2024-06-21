import React, {FC, useEffect, useState} from 'react';
import Select, {GroupBase, InputActionMeta, MultiValue, OptionsOrGroups, SingleValue} from 'react-select';
import {Tag, TagInputProps} from '../../interfaces/IProps';

export const options: Tag[] = [
    {value: 'Java', label: 'Java'},
    {value: 'Git', label: 'Git'},
    {value: 'SQL', label: 'SQL'},
    {value: 'Docker', label: 'Docker'},
    {value: 'OOP', label: 'OOP'},
    {value: 'MySQL', label: 'MySQL'},
    {value: 'REST API', label: 'REST API'},
    {value: 'JavaScript', label: 'JavaScript'},
    {value: 'Node.js', label: 'Node.js'},
    {value: 'TypeScript', label: 'TypeScript'},
    {value: 'RegExp', label: 'RegExp'},
    {value: 'Express.js', label: 'Express.js'},
];

type SelectedOptionType = SingleValue<Tag> | MultiValue<Tag>;

const TagInput: FC<TagInputProps> = ({value,options, isMulti, fieldName, handleOnChange, handleOnInputChange}) => {
    const [selectedOptions, setSelectedOptions] = useState<SelectedOptionType>([]);
    const [searchValue, setSearchValue] = React.useState<string>('');

    useEffect(() => {
        handleOnInputChange(searchValue)
    }, [searchValue]);

    const handleChange = (selectedOptions: SelectedOptionType) => {
        setSelectedOptions(selectedOptions || []);
        if (selectedOptions instanceof Array) {
            handleOnChange(fieldName, selectedOptions.map(option => option.value));
        } else {
            handleOnChange(fieldName, [selectedOptions ? selectedOptions.value : '']);
        }
    };

    const onInput = (newValue: string, actionMeta: InputActionMeta) => {
        setSearchValue(newValue);
    }

    return (
        <div className="mb-3">
            <label htmlFor={fieldName}>Entity's {fieldName}</label>
            <Select
                value={value}
                placeholder={`Type the name of ${fieldName}`}
                isMulti={isMulti}
                name={fieldName}
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
                onInputChange={onInput}
            />
        </div>
    )
}

export default TagInput;