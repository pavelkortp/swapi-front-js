import React from 'react';
import Modal from './Modal';

interface CreateEntityProps {
    isOpen: boolean;
    onCreate: (o: any) => void;
    onClose: () => void;
    schema: string[]
}

interface FormSchema {
    [key: string]: any;
}

export default class CreateEntity extends React.Component<CreateEntityProps, FormSchema> {
    private myForm: HTMLFormElement | null | undefined;


    constructor(props: CreateEntityProps) {
        super(props);
        this.state = this.initializeState(props.schema)
        this.getFormSchema = this.getFormSchema.bind(this);
        this.createEntity = this.createEntity.bind(this);
        this.setData = this.setData.bind(this);
    }

    initializeState(schema: string[]): FormSchema {
        return schema.reduce((result: FormSchema, current: string) => {
            result[current] = '';
            return result;
        }, {});
    }

    setData(name: string, value: any) {
        this.setState({...this.state, [name]: value});
    }

    createEntity() {
        this.props.onCreate(this.state);
    }

    getFormSchema(schema: string[]) {
        return schema
            .map((el) => (
                <div key={el} className="mb-3">
                    {el === 'images' ?
                        <label htmlFor="formFileMultiple" className="form-label">
                            Upload image for this
                        </label> :
                        ''}
                    <input
                        required={true}
                        className="form-control"
                        accept={el === 'images'? "image/*,.png,.jpg,.gif,.web":''}
                        type={el === 'images' ? 'file' : 'text'}
                        multiple={el === 'images'}
                        name={el}
                        onChange={(event)=>this.handleOnChange(event, el)}
                        placeholder={el}
                    />
                </div>
            ));
    }

    getFilesArr(fileList:FileList){
        const res = []
        for (let i = 0; i<fileList.length;i++ ){
            res.push(fileList[i]);
        }
        return res
    }

    handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, key:string) => {
        this.setData(key, key === 'images' ? this.getFilesArr(e.target.files!) : e.target.value);
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} onClose={this.props.onClose}>
                <h2>Create a New Record</h2>
                <form ref={(el) => {
                    this.myForm = el
                }} id="create-record-form">
                    {this.getFormSchema(this.props.schema)}
                    <button
                        key="create"
                        className="btn btn-primary"
                        type="button"
                        onClick={this.createEntity}
                    >
                        CREATE
                    </button>
                    <br></br>
                    <button
                        key="reset"
                        className="btn btn-secondary"
                        type="button"
                        onClick={() => this.myForm!.reset()}
                    >
                        Reset
                    </button>
                </form>
            </Modal>
        );
    }
}