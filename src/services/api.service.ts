import axios, {AxiosResponse} from 'axios';
import {SWAPIResponsePage} from '../interfaces/SWAPIResponse';
import {Tag} from '../interfaces/IProps';
import {EntityParser} from '../utils/EntityParser';
import {Bounce, ToastOptions} from 'react-toastify';
import {EntityType} from '../interfaces/EntityType';
import {GroupBase, OptionsOrGroups} from 'react-select';
import {Dispatch, SetStateAction} from 'react';
import {Entities} from '../interfaces/Entities';
import {BaseEntity} from '../models/BaseEntity';


export const BASE_URL = 'http://localhost:3000/api/v1';
// export const BASE_URL = 'https://swapi.dev/api';


export const TOAST_OPTIONS: ToastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
    transition: Bounce,
}

/**
 *
 * @param type
 * @param page
 * @param name
 */
export const getEntities = async <E extends BaseEntity>(type: EntityType, page: number, name?: string): Promise<E[]> => {
    try {
        const res = await getEntitiesPage<E>(type, page, name);
        return res.results;
    } catch (error) {
        console.log(error)
        return []
    }
}

/**
 *
 * @param type
 * @param page
 * @param name
 */
export const getEntitiesPage = async<E extends BaseEntity> (type: EntityType, page: number, name?: string): Promise<SWAPIResponsePage<E>> => {
    const response = await axios
        .get<SWAPIResponsePage<E>>(`${BASE_URL}/${type}/?page=${page}${name ? `&name=${name}` : ''}`);
    return response.data;
}

/**
 *
 * @param type
 * @param id
 */
export const deleteEntity = (type: EntityType, id: string): Promise<AxiosResponse> => {
    return axios.delete(`${BASE_URL}/${type}/${id}`);
}

/**
 *
 * @param entityType
 * @param entity
 */
export const createEntity = (entityType: string, entity: FormData): Promise<AxiosResponse> => {
    return axios.post(`${BASE_URL}/${entityType}`, entity);
}

/**
 *
 * @param entityType
 * @param id
 * @param entity
 */
export const updateEntity = (entityType: EntityType, id: string, entity: FormData): Promise<AxiosResponse> => {
    return axios.patch(`${BASE_URL}/${entityType}/${id}`, entity);
}

/**
 *
 * @param links
 */
export const getImages = async (links: string[]): Promise<File[]> => {
    return Promise.all(links.map(async (link) => await getImage(link)));
}

export const getImage = async (url: string): Promise<File> => {
    return (await axios.get(url)).data;
}

/**
 *
 * @param type
 * @param page
 * @param name
 * @param cb
 */
export const getTags = async (
    type: EntityType,
    page: number,
    name: string,
    cb: Dispatch<SetStateAction<OptionsOrGroups<Tag, GroupBase<Tag>>>>
): Promise<void> => {
    try {
        const tags = (await getEntities(type, page, name)).map((e) => EntityParser.mapToTag(e));
        cb(tags);
    }catch (e){
        console.log(e)
    }

}


/**
 *
 * @param entity
 */
export const mapTags = async (entity: BaseEntity) => {

    const clear: Omit<Entities, 'edited' | 'url' | 'created'> = entity;
    const entries = await Promise.all(
        Object
            .entries(clear)
            .map(async ([key, value]) => {
                if (Array.isArray(value)) {
                    const data = await Promise.all(value.map(async (item) => await replaceWithTag(item)))
                    return [key, data]
                } else if (key === 'homeworld') {
                    return [key, await replaceWithTag(value)];
                }

                return [key, value];
            })
    );

    return entries
        .reduce((acc, [key, value]) => {
            // @ts-ignore
            acc[key] = value;
            return acc;
        }, {} as Omit<Entities, 'url' | 'edited' | 'created'>);
}

const replaceWithTag = async<E extends BaseEntity> (url: string) => {
    try {
        const entity = (await axios.get<E>(url)).data;
        return {
            value: EntityParser.getId(entity),
            // @ts-ignore
            label: entity.title ? entity.title : entity.name,
        }
    }catch (e){
        return {
            value: '0',
            label: '',
        }
    }

}