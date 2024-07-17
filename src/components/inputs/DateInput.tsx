import React, {useState} from 'react';
import {HTMLInputProps} from '../../interfaces/IProps';


export const DateInput: React.FC<HTMLInputProps> = ({value, fieldName, handleOnChange}) =>{
    const [val, setVal] = useState<string|undefined>(value?.substring(0,10));

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        handleOnChange(fieldName, e.target.value);
        setVal(e.target.value);
    }

    return (
        <div key={fieldName} className="form-floating mb-3 date" data-provide="datepicker">
            <input value={val} type="date" className="form-control" onChange={onChange} id="floatingInput" placeholder={fieldName} />
            <label htmlFor={'floatingInput'}>Entity's <b>{fieldName}</b></label>
        </div>
    )
}

export default DateInput;