import React from 'react';
import {FormControlsProps} from '../../interfaces/IProps';

const FormsControls:React.FC<FormControlsProps> = ({onCreate, onReset})=>{

    return (
        <div className="d-grid gap-2">
            <button className="btn btn-outline-success" type="button" key="create"
                    onClick={() => onCreate()}>
                <b>Create</b>
            </button>
            <button className="btn btn-danger" type="button" key="reset"
                    onClick={() => {
                        onReset()
                    }}>Reset
            </button>
        </div>
    )
}

export default FormsControls;