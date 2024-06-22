/**
 *
 */
export default interface Entity {
    edited: string;
    created: string;
    url: string;
    images: string[];
    [key: string]: string | string[];
}