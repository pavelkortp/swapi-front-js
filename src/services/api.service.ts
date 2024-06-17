import axios, {AxiosResponse} from 'axios';
import {SWAPIResponsePage} from '../interfaces/SWAPIResponse';
import Entity from '../interfaces/Entity';
import {Tag} from '../interfaces/IProps';
import {EntityParser} from '../utils/EntityParser';
import {CreateEntityDto} from '../dto/create-entity.dto';
import {Bounce, ToastOptions} from 'react-toastify';
import {EntityType} from '../interfaces/EntityType';
import {GroupBase, OptionsOrGroups} from 'react-select';


export const BASE_URL = 'http://localhost:3000/api/v1';
export const LOCAL_PEOPLE_URL = 'http://localhost:3000/api/v1/people';
export const PEOPLE_URL = 'https://swapi.dev/api/people'; //test
export const PLANETS_URL = 'https://swapi.dev/api/planets'; //test
export const FILMS_URL = 'https://swapi.dev/api/films'; //test
export const STARSHIPS_URL = 'https://swapi.dev/api/starships'; //test
export const VEHICLES_URL = 'https://swapi.dev/api/vehicles'; //test
export const SPECIES_URL = 'https://swapi.dev/api/species'; //test


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
export const getEntities = async (type:EntityType, page: number, name?: string): Promise<Entity[]> => {
    const res = await getEntitiesPage(type, page, name);
    return res.results;
}

/**
 *
 * @param type
 * @param page
 * @param name
 */
export const getEntitiesPage = async (type:EntityType, page: number, name?: string): Promise<SWAPIResponsePage> =>{
    const response = await axios
        .get<SWAPIResponsePage>(`${BASE_URL}/${type}/?page=${page}${name ? `&name=${name}` : ''}`);
    return response.data;
}

/**
 *
 * @param type
 * @param page
 * @param name
 */
export const getTags = async (type:EntityType, page: number, name: string): Promise<OptionsOrGroups<Tag, GroupBase<Tag>>> => {
    return (await getEntities(type, page, name)).map((e) => EntityParser.mapToTag(e));
}

/**
 *
 * @param type
 * @param id
 */
export const deleteEntity = (type:EntityType, id: string): Promise<AxiosResponse> => {
    return axios.delete(`${BASE_URL}/${type}/${id}`)
}

/**
 *
 * @param entityType
 * @param entity
 */
export const createEntity =  (entityType:string, entity: FormData): Promise<AxiosResponse> => {
    return axios.post(`${BASE_URL}/${entityType}`, entity)
}

/**
 *
 * @param entityType
 * @param id
 * @param entity
 */
export const updateEntity = (entityType:string, id: string, entity: FormData): Promise<AxiosResponse> => {
    return axios.patch(`${BASE_URL}/${entityType}/${id}`, entity)
}

/**
 *
 * @param links
 */
export const getImages = async (links:string[]): Promise<File[]> =>{
    return Promise.all(links.map(async (link)=> await getImage(link)));
}

export const getImage = async (url:string):Promise<File> => {
    return (await axios.get(url)).data;
}


/**
 *
 * @param entity
 */
const mapToFormData = (entity: CreateEntityDto): FormData =>{
    const data = new FormData();
    Object.entries(entity).forEach(([key, value]) => {
        if(Array.isArray(value)){
            value.forEach((item) => {
                data.append(key,item)
            })
        }else {
            data.append(key,value)
        }
    })
    return data;
}
