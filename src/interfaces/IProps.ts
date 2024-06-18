import {GroupBase, OptionsOrGroups} from 'react-select';

export interface HTMLInputProps {
    value?: string;
    fieldName: string;
    handleOnChange: (fieldName: string, value: string) => void;
}

export interface Tag {
    value: string;
    label: string;
}


export interface InputProps {
    fieldName: string;
    handleOnChange: (fieldName: string, value: string | string[] | File[]) => void;
}

export interface TagInputProps extends InputProps {
    handleOnInputChange: (text: string) => void;
    options: OptionsOrGroups<Tag, GroupBase<Tag>>;
    isMulti?: boolean;
}

export interface CreationFormProps {
    onCreate: (data: FormData) => void;
}

export interface FormControlsProps {
    onCreate: () => void;
    onReset: () => void;
}