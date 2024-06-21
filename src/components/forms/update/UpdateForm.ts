import {EntityType} from '../../../interfaces/EntityType';
import {FC} from 'react';
import {UpdateFormProps} from '../../../interfaces/IProps';

import UpdatePeopleForm from './UpdatePeopleForm';
import UpdatePlanetForm from './UpdatePlanetForm';
import UpdateFilmForm from './UpdateFilmForm';
import UpdateSpecieForm from './UpdateSpecieForm';
import UpdateStarshipForm from './UpdateStarshipForm';
import UpdateVehicleForm from './UpdateVehicleForm';


export const UPDATE_FORM: { [key in EntityType]: FC<UpdateFormProps> } = {
    people: UpdatePeopleForm,
    planets: UpdatePlanetForm,
    films: UpdateFilmForm,
    species: UpdateSpecieForm,
    starships: UpdateStarshipForm,
    vehicles: UpdateVehicleForm
}