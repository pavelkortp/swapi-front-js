import {BaseEntity} from '../models/BaseEntity';


/**
 * Api response on GET/?page=
 */
export interface SWAPIResponsePage<E extends BaseEntity> {
    results: E[];
    next: string | null;
    previous: string | null;
    count: number;
}


export interface SWAPIResponseError {
    message: string[];
}


export declare type SWAPIResponse<E extends BaseEntity> = SWAPIResponsePage<E> | SWAPIResponseError;