import {GroupBase, OptionsOrGroups} from 'react-select';

export interface HTMLInputProps {
    value?: string;
    fieldName: string;
    handleOnChange: (fieldName: string, value:string) => void;
}

export interface Tag {
    value: string;
    label: string;
}

export interface TagInputProps {
    fieldName: string;
    handleOnChange: (fieldName: string, value:string[]) => void;
    options: OptionsOrGroups<Tag, GroupBase<Tag>>;
    isMulti?: boolean;
    value?: OptionsOrGroups<Tag, GroupBase<Tag>>;
}