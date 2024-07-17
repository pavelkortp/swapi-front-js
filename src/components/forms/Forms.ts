import PeopleForm from './PeopleForm';
import FilmForm from './FilmForm';
import PlanetForm from './PlanetForm';
import StarshipForm from './StarshipForm';
import VehicleForm from './VehicleForm';
import {EntityType} from '../../interfaces/EntityType';
import {FC} from 'react';
import SpecieForm from './SpecieForm';

export const FORMS:{[key in EntityType]: FC<FormProps>} = {
    people: PeopleForm,
    films: FilmForm,
    species: SpecieForm,
    starships: StarshipForm,
    vehicles: VehicleForm,
    planets: PlanetForm,
}