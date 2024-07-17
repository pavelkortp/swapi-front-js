import {MultiValue, SingleValue} from 'react-select';
import {Tag} from '../interfaces/IProps';

export class CreateSpecieDto{
    constructor(
        public name: string,
        public classification: string,
        public designation: string,
        public average_height: string,
        public skin_colors: string,
        public hair_colors: string,
        public eye_colors: string,
        public average_lifespan: string,
        public homeworld: SingleValue<Tag>,
        public language: string,
        public images: File[],
        public people: MultiValue<Tag>,
        public films: MultiValue<Tag>,
    ) {
    }
}