import React from 'react';
import { ITEMS_PER_PAGE } from './EntitiesTable';
import PageButton from './PageButton';
import '../styles/pagesBar.css'

export default class PagesBar extends React.Component {


    render() {
        const buttonsCount = Math.ceil(this.props.count / ITEMS_PER_PAGE);
        const pages = Array.from({ length: buttonsCount }, (_, index) => index + 1);
        return (
            <div className='container'>
                <div className="btn-group me-2" role='group'>
                    {pages.map((n) => (
                        <PageButton onClick={this.props.onClick} key={n} value={n} />
                    ))}
                </div>
            </div>
        );
    }
}