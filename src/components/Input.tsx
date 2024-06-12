import React from 'react';

interface InputProps {
    fieldName: string;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => void;
}

/**
 * Form field.
 * @param fieldName name for input.
 * @param handleOnChange
 * @constructor
 */
const Input: React.FC<InputProps> = ({fieldName, handleOnChange}) => {
    return (
        <div key={fieldName} className="mb-3">
            {fieldName === 'images' ?
                <label htmlFor="formFileMultiple" className="form-label">
                    Upload image for this record
                </label> : ''}
            <input
                required
                className="form-control"
                accept={fieldName === 'images' ? 'image/*,.png,.jpg,.gif,.web' : ''}
                type={fieldName === 'images' ? 'file' : 'text'}
                multiple={fieldName === 'images'}
                name={fieldName}
                onChange={(event) => handleOnChange(event, fieldName)}
                placeholder={fieldName}
            />
        </div>
    )
}

export default Input;