import React from 'react';
import {EntityType} from '../interfaces/EntityType';
import {People} from '../models/People';
import {Vehicle} from '../models/Vehicle';
import {Planet} from '../models/Planet';
import {Starship} from '../models/Starship';
import {Specie} from '../models/Specie';
import {Film} from '../models/Film';
import {Entities} from '../interfaces/Entities';
import {Type} from '../interfaces/type.interface';
import {BaseEntity} from '../models/BaseEntity';

interface NavBarProps {
    onEntity: (type: EntityType) => void;
}

export const entityTypes = {
    films: Film,
    people: People,
    planets: Planet,
    species: Specie,
    starships: Starship,
    vehicles: Vehicle,
}

const NavBar: React.FC<NavBarProps> = ({onEntity}) => {
    const setEntity = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const type = event.currentTarget.textContent!.toLowerCase() as EntityType;
        onEntity(type);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Star-wars API</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" rel="noreferrer" target="_blank"
                               href="http://localhost:3000/documentation">Documentation</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Entities
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <button type="button" className="dropdown-item" onClick={setEntity}>People</button>
                                </li>
                                <li>
                                    <button type="button" className="dropdown-item" onClick={setEntity}>Films</button>
                                </li>
                                <li>
                                    <button type="button" className="dropdown-item" onClick={setEntity}>Species</button>
                                </li>
                                <li>
                                    <button type="button" className="dropdown-item" onClick={setEntity}>Planets</button>
                                </li>
                                <li>
                                    <button type="button" className="dropdown-item" onClick={setEntity}>Starships
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="dropdown-item" onClick={setEntity}>Vehicles
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
