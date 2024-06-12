import Entity from '../interfaces/Entity';

/**
 * Companion object to parse entity, and get data from there
 */
export class EntityParser {

    /**
     * Returns string type of entity
     * @param entity
     * @return string entity type (people, planets, ect...)
     */
    public static getType(entity: Entity): string {
        return entity.url.split('/')[5];
    }

    /**
     *
     * @param entity
     * @return string number.
     */
    public static getId(entity: Entity): string {
        return entity.url.match(/(\d+)\/$/)![1];
    }
}