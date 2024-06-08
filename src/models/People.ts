/**
 *
 */
export class People {
    constructor(
        public name: string,
        public height: string,
        public mass: string,
        public hair_color: string,
        public skin_color: string,
        public eye_color: string,
        public birth_year: string,
        public gender: string,
        public homeworld: number,
        public films: [],
        public species: [],
        public vehicles: [],
        public starships: [],
        public created: Date,
        public edited: Date,
        public url: string
    ) {}
}