import React from 'react';
import { ITEMS_PER_PAGE } from './PeopleTable';
import PageButton from './PageButton';

class PagesBar extends React.Component {
    buttonsCount = Math.ceil(this.props.count / ITEMS_PER_PAGE);
    pages = Array.from({ length: this.buttonsCount }, (_, index) => index + 1);

    // selectButton(number){
    //     document.getElementsByClassName('active')
    // }

    render() {
        return (
            <div className="btn-group me-2" role='group'>
                {this.pages.map((n) => (
                    <PageButton onClick={this.props.onClick} key={n} value={n} />
                ))}
            </div>

        );
    }
}



export default PagesBar;

