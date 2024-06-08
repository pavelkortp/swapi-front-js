import React from 'react';
import '../styles/footer.css'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Pablo, Inc</span>
                </div>
            </footer>
        );
    }
}