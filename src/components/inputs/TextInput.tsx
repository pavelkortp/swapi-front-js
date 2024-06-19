import React from 'react';
import {HTMLInputProps} from '../../interfaces/IProps';


/**
 * Form field.
 * @param fieldName name for input.
 * @param handleOnChange
 * @param value
 * @constructor
 */
const TextInput: React.FC<HTMLInputProps> = ({fieldName, handleOnChange, value}) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        handleOnChange(fieldName, e.target.value);
    }
    return (
        <div key={fieldName} className="form-floating mb-3">
            <input value={value} type="text" className="form-control" onChange={onChange} id="floatingInput" placeholder={fieldName} />
            <label htmlFor={'floatingInput'}>Entity's <b>{fieldName}</b></label>
        </div>
    )
}

export default TextInput;