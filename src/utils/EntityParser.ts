import Entity from '../interfaces/Entity';
import {Tag} from '../interfaces/IProps';

/**
 * Companion object to parse entity, and get data from there
 */
export class EntityParser {

    /**
     * Returns string type of entity
     * @param entity
     * @return string entity type (people, planets, ect...)
     */
    public static getType(entity: Entity): EndingType {
        return entity.url.split('/')[5] as EndingType;
    }

    /**
     *
     * @param entity
     * @return string number.
     */
    public static getId(entity: Entity): string {
        return entity.url.match(/(\d+)\/$/)![1];
    }

    /**
     *
     * @param e
     */
    public static mapToTag(e: Entity): Tag {
        return {
            label: e.title ? e.title : e.name!,
            value: this.getId(e)
        }
    }

    public static getTags(links:string[]): Tag[] {
        return links
            .map((l)=> {
                return {
                    label: l.split('/')[5],
                    value: l.match(/(\d+)\/$/)![1]
                }
            })
    }

    // public static mapToUpdateEntityDTO(e: Entity) {
    //     return Object
    //         .entries(e)
    //         .map(([key, value]) => {
    //
    //         })
    // }

    public static getEntityCreationFields(entity: Entity): string[] {
        const fields =  Object
            .entries(entity)
            .filter(([key, value]) => !Array.isArray(value))
            .filter(([key, value]) => key !== 'url' && key !== 'created' && key !== 'edited')
            .map(([key, value]) => key)
        return [
            ...fields,
            'images',
        ];
    }


    public static getFilesArr(fileList: FileList | null): File[] {
        if (!fileList || !fileList.length) {
            return [];
        }
        const res = []
        for (let i = 0; i < fileList.length; i++) {
            res.push(fileList[i]);
        }
        return res
    }
}