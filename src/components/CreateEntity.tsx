import React from 'react';
import Modal from './Modal';

interface CreateEntityProps {
    isOpen: boolean;
    onCreate: (o: any) => void;
    onClose: () => void;
    entity: any[]
}

export default class CreateEntity extends React.Component<CreateEntityProps> {
    private myForm: HTMLFormElement | null | undefined;

    constructor(props: CreateEntityProps) {
        super(props);
        this.state = this.initializeState(props.entity[0]);
        console.log(this.state);
        this.getFormSchema = this.getFormSchema.bind(this);
        this.createEntity = this.createEntity.bind(this);

    }

    initializeState(entity: any) {
        const initialState: any = {};
        Object.keys(entity).forEach(key => {
            if (!Array.isArray(entity[key]) &&
                !entity[key].includes('http') &&
                isNaN(new Date(entity[key]).getTime())) {
                initialState[key] = '';
            }
        });
        return initialState;
    }

    createEntity() {
        console.log(this.state);
        this.props.onCreate(this.state)
        // this.myForm.reset()
    }

    getFormSchema(entity: any) {
        return Object
            .keys(entity)
            .filter((e) => {
                if (Array.isArray(entity[e]))
                    return false;
                else if (entity[e].includes('http'))
                    return false;
                else if (!isNaN(new Date(entity[e]).getTime()))
                    return false;
                return true
            })
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
                    {this.getFormSchema(this.props.entity[0])}
                    <button key="create" className="btn btn-primary" type="button" onClick={this.createEntity}>CREATE
                    </button>
                </form>
            </Modal>
        );
    }
}