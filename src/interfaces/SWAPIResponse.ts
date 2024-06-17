import {Entities} from './Entities';

/**
 * Api response on GET/?page=
 */
export interface SWAPIResponsePage {
    results: Entities[];
    next: string | null;
    previous: string | null;
    count: number;
}


export interface SWAPResponseError {
    message: string[];
}


export declare type SWAPIResponse = SWAPIResponsePage | SWAPResponseError;