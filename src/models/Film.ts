export class Film {
    constructor(
        public title: string,
        public episode_id: string,
        public opening_crawl: string,
        public director: string,
        public producer: string,
        public release_date: string,
        public images: string [],
        public characters: string [],
        public planets: string [],
        public starships: string [],
        public vehicles: string [],
        public species: string[],
        public created: string,
        public edited: string,
        public url: string
    ) {
    }
}