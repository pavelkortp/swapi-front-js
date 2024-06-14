import React from 'react';
import {HTMLInputProps} from '../interfaces/IProps';



const ImageInput:React.FC<HTMLInputProps> = ({fieldName, handleOnChange })=>{
    return ((
        <div key={fieldName} className="mb-3">
            <label htmlFor="formFileMultiple" className="form-label">
                Upload images for this entity
            </label>
            <input
                required
                className="form-control"
                accept='image/*,.png,.jpg,.gif,.web'
                type='file'
                multiple
                name={fieldName}
                onChange={(event) => handleOnChange(event, fieldName)}
                placeholder={fieldName}
            />
        </div>
    ))
}

export default ImageInput;