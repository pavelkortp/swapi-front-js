import Entity from './interfaces/Entity';

export class Species implements Entity{
    constructor(
        public name: string,
        public classification: string,
        public designation: string,
        public average_height: string,
        public skin_colors: string,
        public hair_colors: string,
        public eye_colors: string,
        public average_lifespan: string,
        public homeworld: string,
        public language: string,
        public images: string [],
        public people: string [],
        public films: string[],
        public created: Date,
        public edited: Date,
        public url: string
    ) {
    }
}