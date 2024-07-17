export class BaseEntity {
    constructor(
        public edited: string,
        public created: string,
        public url: string,
        public images: string[],
    ) {}
}
