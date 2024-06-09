import Entity from './Entity';

/**
 * Api response on GET/?page=
 */
export interface SWAPIResponsePage {
    results: Entity[];
    next: string | null;
    previous: string | null;
    count: number;
}


export interface SWAPResponseError {
    message: string[];
}


export declare type SWAPIResponse = SWAPIResponsePage | SWAPResponseError;