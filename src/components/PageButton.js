import React from 'react';

class PageButton extends React.Component {


    selectPage(number) {
        this.props.onClick(number);
        const buttons = document.querySelectorAll('.list-group-item');
        buttons.forEach(button => button.classList.remove('active'));
        document.getElementById(number).classList.add('active');
    }

    render() {

        return (
            <button
                id={this.props.value}
                type="button"
                onClick={() => this.selectPage(this.props.value)}
                className={`list-group-item list-group-item-action ${this.props.value === 1 ? 'active' : ''}`}
            >
                {this.props.value}
            </button>
        );
    }
}

export default PageButton;