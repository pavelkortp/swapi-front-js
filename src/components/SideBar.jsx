import React, { useState } from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Star-wars API</a>
                    <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" href="/documentation">Documentation</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">Entities</a>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item">People</button></li>
                                    <li><button className="dropdown-item">Films</button></li>
                                    <li><button className="dropdown-item">Species</button></li>
                                    <li><button className="dropdown-item">Planets</button></li>
                                    <li><button className="dropdown-item">Starships</button></li>
                                    <li><button className="dropdown-item">Vehicles</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSidebar}>×</button>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#clients">Clients</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div className={`main-content ${isOpen ? 'shift' : ''}`}>
                <button className="open-btn" onClick={toggleSidebar}>☰ Open Sidebar</button>
                <div className="container">
                    <h2>v1 table</h2>
                    <div className="table-wrapper">
                        <table className="table table-light table-hover table-striped-columns">
                            <thead className="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>name</th>
                                    <th>birth_year</th>
                                    <th>eye_color</th>
                                    <th>gender</th>
                                    <th>hair_color</th>
                                    <th>height</th>
                                    <th>mass</th>
                                    <th>skin_color</th>
                                    <th>homeworld</th>
                                    <th>films</th>
                                    <th>species</th>
                                    <th>vehicles</th>
                                    <th>starships</th>
                                    <th>created</th>
                                    <th>edited</th>
                                    <th>url</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Your table rows go here */}
                            </tbody>
                        </table>
                    </div>
                    <br />
                    <div className="btn-group me-2" role="group">
                        <button id="1" type="button" className="btn btn-outline-primary active">1</button>
                        <button id="2" type="button" className="btn btn-outline-primary">2</button>
                        <button id="3" type="button" className="btn btn-outline-primary">3</button>
                        <button id="4" type="button" className="btn btn-outline-primary">4</button>
                        <button id="5" type="button" className="btn btn-outline-primary">5</button>
                        <button id="6" type="button" className="btn btn-outline-primary">6</button>
                        <button id="7" type="button" className="btn btn-outline-primary">7</button>
                        <button id="8" type="button" className="btn btn-outline-primary">8</button>
                        <button id="9" type="button" className="btn btn-outline-primary">9</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
