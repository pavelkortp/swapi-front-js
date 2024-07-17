import {GroupBase, MultiValue, OptionsOrGroups, SingleValue} from 'react-select';

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
    value?: SingleValue<Tag> | MultiValue<Tag>
}

export interface CreationFormProps {
    onCreate: (data: FormData) => void;
}

export interface UpdateFormProps {
    onUpdate: (data: FormData) => void;
    existedData: any;
}

export interface FormProps<E>{
    onSave: (data:FormData)=>void;
    value?: E;
}

export interface FormControlsProps {
    onCreate: () => void;
    onReset: () => void;
}