import Entity from '../interfaces/Entity';

export class Planet implements Entity{
    constructor(
        public name: string,
        public rotation_period: string,
        public orbital_period: string,
        public diameter: string,
        public climate: string,
        public gravity: string,
        public terrain: string,
        public surface_water: string,
        public population: number,
        public images: string [],
        public residents: string [],
        public films: string[],
        public created: string,
        public edited: string,
        public url: string
    ) {}
}