import React, { useState } from 'react';
import Select, {MultiValue, SingleValue} from 'react-select';
import {Tag, TagInputProps} from '../interfaces/IProps';



export const options = [
    { value: 'Java', label: 'Java' },
    { value: 'Git', label: 'Git' },
    { value: 'SQL', label: 'SQL' },
    { value: 'Docker', label: 'Docker' },
    { value: 'OOP', label: 'OOP' },
    { value: 'MySQL', label: 'MySQL' },
    { value: 'REST API', label: 'REST API' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'TypeScript', label: 'TypeScript' },
    { value: 'RegExp', label: 'RegExp' },
    { value: 'Express.js', label: 'Express.js' },
];




const TagInput:React.FC<TagInputProps> = ({options, isMulti, fieldName}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (selectedOptions: any) => {
        console.log(selectedOptions)
        setSelectedOptions(selectedOptions || []);
    };

    return (
        <Select
            isMulti = {isMulti}
            name="tags"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            value={selectedOptions}
            onChange={handleChange}
        />
    );
};

export default TagInput;
