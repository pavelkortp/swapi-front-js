import React from 'react';
import {EntityParser} from '../utils/EntityParser';
import {InputProps} from '../interfaces/IProps';


const ImageInput:React.FC<InputProps> = ({fieldName, handleOnChange })=>{
    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const images = EntityParser.getFilesArr(e.target.files);
        handleOnChange(fieldName, images);
    }

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
                onChange={onChange}
                placeholder={fieldName}
            />
        </div>
    ))
}

export default ImageInput;