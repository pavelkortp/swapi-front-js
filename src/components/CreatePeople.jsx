import React from 'react';

export default class CreatePeople extends React.Component {

    createPeople() {
        this.userAdd = {
            name: this.state.name,
            last_name: this.state.last_name,
            age: this.state.age,
            isHappy: this.state.isHappy,
            email: this.state.email,
        }
        if (this.props.user) {
            this.userAdd.id = this.props.user.id
        }
        this.props.onAdd(this.userAdd)
        this.myForm.reset()
    }



    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input id='name' type='text' placeholder='Name' />
                <input id='height' type='text' placeholder='Height' />
                <input id='mass' type='text' placeholder='Mass' />
                <input id='hair_color' type='text' placeholder='Hair color' />
                <input id='skin_color' type='text' placeholder='skin_color' />
                <input id='eye_color' type='text' placeholder='eye_color' />
                <input id='birth_year' type='text' placeholder='Birth Year' />
                <input id='gender' type='text' placeholder='Gender' />
                <input id='homeworld' type='text' placeholder='homeworld' />
                <button className='btn btn-primary' type='button' onClick={this.createPeople} >CREATE</button>
            </form>
        );
    }
}