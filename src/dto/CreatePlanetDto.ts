import {MultiValue} from 'react-select';
import {Tag} from '../interfaces/IProps';

export class CreatePlanetDto {
    constructor(
        public name: string,
        public rotation_period: string,
        public orbital_period: string,
        public diameter: string,
        public climate: string,
        public gravity: string,
        public terrain: string,
        public surface_water: string,
        public population: string,
        public images: File[],
        public residents: MultiValue<Tag>,
        public films: MultiValue<Tag>,
    ) {}
}