import {MultiValue} from 'react-select';
import {Tag} from '../interfaces/IProps';

export class CreateStarshipDto{
    constructor(
        public name: string,
        public model: string,
        public manufacturer: string,
        public cost_in_credits: string,
        public length: string,
        public max_atmosphering_speed: string,
        public crew: string,
        public passengers: string,
        public cargo_capacity: string,
        public consumables: string,
        public hyperdrive_rating: string,
        public MGLT: string,
        public starship_class: string,
        public images: File[],
        public pilots: MultiValue<Tag>,
        public films: MultiValue<Tag>,
    ) {
    }
}