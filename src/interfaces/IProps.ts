import React from 'react';
import {GroupBase, OptionsOrGroups} from 'react-select';

export interface HTMLInputProps {
    fieldName: string;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => void;
}

export interface Tag {
    value: string;
    label: string;
}

export interface TagInputProps extends HTMLInputProps {
    options: OptionsOrGroups<Tag, GroupBase<Tag>>;
    isMulti?: boolean;
}