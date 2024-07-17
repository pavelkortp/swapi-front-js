import {MultiValue} from 'react-select';
import {Tag} from '../interfaces/IProps';

export class CreateFilmDto {
    constructor(
        public title: string,
        public episode_id: string,
        public opening_crawl: string,
        public director: string,
        public producer: string,
        public release_date: string,
        public images: File [],
        public characters: MultiValue<Tag>,
        public planets: MultiValue<Tag>,
        public starships: MultiValue<Tag>,
        public vehicles: MultiValue<Tag>,
        public species: MultiValue<Tag>,
    ) {
    }
}