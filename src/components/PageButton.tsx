import React from 'react';

interface PageButtonProps {
    onClick: (n: number) => void;
    value: number;
}


export default class PageButton extends React.Component<PageButtonProps> {

    selectPage(number: number) {
        this.props.onClick(number);
        const buttons = document.querySelectorAll('.btn-outline-primary');
        buttons.forEach(button => button.classList.remove('active'));
        document.getElementById(number + '')!.classList.add('active');
    }

    render() {
        return (
            <button
                id={this.props.value+''}
                type="button"
                onClick={() => this.selectPage(this.props.value)}
                className={`btn btn-outline-primary ${this.props.value === 1 ? 'active' : ''}`}
            >
                {this.props.value}
            </button>
        );
    }
}