import React from 'react';
import Modal from './Modal';

interface CreateEntityProps {
    isOpen: boolean;
    onCreate: (o: any) => void;
    onClose: () => void;
    schema: string[]
}

interface FormSchema {
    [key: string]: string;
}

export default class CreateEntity extends React.Component<CreateEntityProps> {
    private myForm: HTMLFormElement | null | undefined;

    constructor(props: CreateEntityProps) {
        super(props);
        this.state = this.initializeState(props.schema);
        console.log(this.state);
        this.getFormSchema = this.getFormSchema.bind(this);
        this.createEntity = this.createEntity.bind(this);

    }

    initializeState(schema: string[]): FormSchema {
        return schema.reduce((result: FormSchema, current: string) => {
            result[current] = '';
            return result;
        }, {});
    }

    createEntity() {
        this.props.onCreate(this.state)
    }

    getFormSchema(schema:string[]) {
        return schema
            .map((el) => (
                <div key={el} className="mb-3">
                    <input
                        required
                        className="form-control"
                        type="text"
                        name={el}
                        onChange={(event) => {
                            this.setState({[el]: event.target.value})
                        }}
                        placeholder={el}
                    />
                </div>
            ));
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