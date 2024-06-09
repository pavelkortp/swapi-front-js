import React from 'react';

interface PageButtonProps {
    onClick: (n: number) => void;
    value: number;
}

const PageButton: React.FC<PageButtonProps> = ({ onClick, value }) => {
    const selectPage = (number: number) => {
        onClick(number);
        const buttons = document.querySelectorAll('.btn-outline-primary');
        buttons.forEach(button => button.classList.remove('active'));
        document.getElementById(number.toString())?.classList.add('active');
    };

    return (
        <button
            id={value.toString()}
            type="button"
            onClick={() => selectPage(value)}
            className={`btn btn-outline-primary ${value === 1 ? 'active' : ''}`}
        >
            {value}
        </button>
    );
};

export default PageButton;