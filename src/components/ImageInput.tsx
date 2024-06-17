import React from 'react';
import {EntityParser} from '../utils/EntityParser';

interface ImageInputProps {
    handleOnChange: (images:File[]) => void;
    fieldName: string;
}

const ImageInput:React.FC<ImageInputProps> = ({fieldName, handleOnChange })=>{
    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const images = EntityParser.getFilesArr(e.target.files);
        handleOnChange(images);
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