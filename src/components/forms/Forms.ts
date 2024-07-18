import PeopleForm from './PeopleForm';
import FilmForm from './FilmForm';
import PlanetForm from './PlanetForm';
import StarshipForm from './StarshipForm';
import VehicleForm from './VehicleForm';
import {EntityType} from '../../interfaces/EntityType';
import {FC} from 'react';
import SpecieForm from './SpecieForm';

export const FORMS: { [key in EntityType]: FC<FormProps> } = {
    people: PeopleForm,
    films: FilmForm,
    species: SpecieForm,
    starships: StarshipForm,
    vehicles: VehicleForm,
    planets: PlanetForm,
}

//TODO fix when trying update or create homeworld
export const handleOnChange = (fm: FormData, fieldName: string, value: string | string[] | File[]) => {
    if (Array.isArray(value)) {
        value.forEach((item) => {
            /* Bad idea but works if we need to send an array with id of one entity,
             * we send arr with 2 equals id, because formdata creates arr(which server expect)
             * from 2 values by one key.
             */
            if (typeof item === 'string') {
                fm.append(fieldName, item);
            }
            fm.append(fieldName, item);
        })
    } else {
        fm.set(fieldName, value);
    }
}

