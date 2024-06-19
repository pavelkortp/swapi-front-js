import {FC} from 'react';
import CreatePeopleForm from './CreatePeopleForm';
import CreatePlanetForm from './CreatePlanetForm';
import CreateFilmForm from './CreateFilmForm';
import CreateSpecieForm from './CreateSpecieForm';
import CreateStarshipForm from './CreateStarshipForm';
import CreateVehicleForm from './CreateVehicleForm';
import {EntityType} from '../../interfaces/EntityType';
import {CreationFormProps} from '../../interfaces/IProps';

export const CREATE_FORM: { [key in EntityType]: FC<CreationFormProps> } = {
    people: CreatePeopleForm,
    planets: CreatePlanetForm,
    films: CreateFilmForm,
    species: CreateSpecieForm,
    starships: CreateStarshipForm,
    vehicles: CreateVehicleForm
}