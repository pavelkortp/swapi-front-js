import React from 'react';

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.setEntity = this.setEntity.bind(this);
    }

    setEntity(event) {
        event.preventDefault();
        const entity = event.target.text.toLowerCase();
        console.log(entity);
        this.props.onEntity(`https://swapi.dev/api/${entity}`)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Star-wars API</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel='noreferrer' target='_blank' href="http://localhost:3000/documentation">Documentation</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Entities
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" onClick={this.setEntity} href="#">People</a></li>
                                    <li><a className="dropdown-item" onClick={this.setEntity} href="#">Films</a></li>
                                    <li><a className="dropdown-item" onClick={this.setEntity} href="#">Species</a></li>
                                    <li><a className="dropdown-item" onClick={this.setEntity} href="#">Planets</a></li>
                                    <li><a className="dropdown-item" onClick={this.setEntity} href="#">Starships</a></li>
                                    <li><a className="dropdown-item" onClick={this.setEntity} href="#">Vehicles</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}