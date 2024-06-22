import React, {FC, useEffect, useState} from 'react';
import Select, { InputActionMeta, MultiValue, SingleValue} from 'react-select';
import {Tag, TagInputProps} from '../../interfaces/IProps';

type SelectedOptionType = SingleValue<Tag> | MultiValue<Tag> | undefined;

const TagInput: FC<TagInputProps> = ({value,options, isMulti, fieldName, handleOnChange, handleOnInputChange}) => {
    const [selectedOptions, setSelectedOptions] = useState<SelectedOptionType>(value);
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
                value={selectedOptions}
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