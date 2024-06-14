import React from 'react';
import {HTMLInputProps} from '../interfaces/IProps';


/**
 * Form field.
 * @param fieldName name for input.
 * @param handleOnChange
 * @constructor
 */
const TextInput: React.FC<HTMLInputProps> = ({fieldName, handleOnChange}) => {
    return (
        <div key={fieldName} className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder={fieldName} />
            <label htmlFor={'floatingInput'}>Entity's <b>{fieldName}</b></label>
        </div>
    )
}

export default TextInput;