import React from 'react';


class NavBar extends React.Component {

    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Star-wars API</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" rel='noreferrer' target='_blank' href="http://localhost:3000/documentation">Documentation</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Entities
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/">People</a></li>
                                    <li><a class="dropdown-item" href="/">Films</a></li>
                                    <li><a class="dropdown-item" href="/">Species</a></li>
                                    <li><a class="dropdown-item" href="/">Planets</a></li>
                                    <li><a class="dropdown-item" href="/">Starships</a></li>
                                    <li><a class="dropdown-item" href="/">Vehicles</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
export default NavBar;