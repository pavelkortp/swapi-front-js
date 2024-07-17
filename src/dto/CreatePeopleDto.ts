import {GroupBase, MultiValue, OptionsOrGroups, SingleValue} from 'react-select';
import {Tag} from '../interfaces/IProps';

export class CreatePeopleDto {
    constructor(
        public name: string,
        public height: string,
        public mass: string,
        public hair_color: string,
        public skin_color: string,
        public eye_color: string,
        public birth_year: string,
        public gender: string,
        public homeworld: SingleValue<Tag>,
        public images: File[],
        public films: MultiValue<Tag>,
        public species: MultiValue<Tag>,
        public vehicles: MultiValue<Tag>,
        public starships: MultiValue<Tag>,
    ) {}
}