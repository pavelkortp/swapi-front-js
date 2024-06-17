import React, {FC, useEffect, useState} from 'react';
import Select, {GroupBase, InputActionMeta, MultiValue, OptionsOrGroups, SingleValue} from 'react-select';
import {Tag, TagInputProps} from '../interfaces/IProps';
import {getTags} from '../services/api.service';

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

const TagInput: FC<TagInputProps> = ({options, isMulti, fieldName, handleOnChange}) => {
    const [options1, setOptions1] = React.useState<OptionsOrGroups<Tag, GroupBase<Tag>>>(options);
    const [selectedOptions, setSelectedOptions] = useState<SelectedOptionType>([]);
    const [searchValue, setSearchValue] = React.useState<string>('');

    useEffect(() => {
        getTags('planets', 1, searchValue)
            .then(res => {
                setOptions1(res);
                console.log(res);
            })
            .catch((e) => console.log(e));
    }, [searchValue]);

    const handleChange = (selectedOptions: SelectedOptionType) => {
        setSelectedOptions(selectedOptions || []);
        if (selectedOptions instanceof Array) {
            handleOnChange(fieldName, selectedOptions.map(option => option.value));
        } else {
            handleOnChange(fieldName, [selectedOptions ? selectedOptions.value : '']);
        }

    };

    const handleOnInputChange = (newValue: string, actionMeta: InputActionMeta) => {
        setSearchValue(newValue);
    }

    return (
        <div className="mb-3">
            <label htmlFor={fieldName}>Entity's {fieldName}</label>
            <Select
                placeholder={`Type the name of ${fieldName}`}
                isMulti={isMulti}
                name={fieldName}
                options={options1}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
                onInputChange={handleOnInputChange}
            />
        </div>
    )
}

export default TagInput;