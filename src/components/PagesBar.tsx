import React from 'react';
import { ITEMS_PER_PAGE } from './EntitiesTable';
import PageButton from './PageButton';
import '../styles/pagesBar.css';

interface PagesBarProps {
    onClick: (n: number) => void;
    count: number;
}

const PagesBar: React.FC<PagesBarProps> = ({ onClick, count }) => {
    const buttonsCount = Math.ceil(count / ITEMS_PER_PAGE);
    const pages = Array.from({ length: buttonsCount }, (_, index) => index + 1);

    return (
        <div className="container">
            <div className="btn-group me-2" role="group">
                {pages.map((n) => (
                    <PageButton onClick={onClick} key={n} value={n} />
                ))}
            </div>
        </div>
    );
};

export default PagesBar;