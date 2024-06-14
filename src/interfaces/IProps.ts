import React from 'react';
import {GroupBase, OptionsOrGroups} from 'react-select';

export interface HTMLInputProps {
    fieldName: string;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => void;
}

interface Option {
    value: string;
    label: string;
}

export interface TagInputProps {
    options: OptionsOrGroups<Option, GroupBase<Option>>
    isMulti?: boolean
}