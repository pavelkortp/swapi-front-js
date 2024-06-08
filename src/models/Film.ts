import Entity from './interfaces/Entity';

export class Film implements Entity {
    constructor(
        public title: string,
        public episode_id: string,
        public opening_crawl: string,
        public director: string,
        public producer: string,
        public release_date: Date,
        public images: string [],
        public characters: string [],
        public planets: string [],
        public starships: string [],
        public vehicles: string [],
        public species: string[],
        public created: Date,
        public edited: Date,
        public url: string
    ) {
    }
}