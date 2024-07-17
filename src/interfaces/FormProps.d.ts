declare interface FormProps<T = any> {
    onSave(fm: FormData): void;

    value?: T;
}