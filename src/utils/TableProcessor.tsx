import React from 'react';
import {BASE_URL} from '../App';
import {Entities} from '../interfaces/Entities';
import Entity from '../interfaces/Entity';
import {EntityRowState} from '../components/EntityRow';

/**
 * Companion object to process table data
 */
export class TableProcessor {

    /**
     *
     * @param entity
     */
    public static getTableHeader(entity: Entity) {
        return (<>
            {Object.keys(entity).map((key: string) => <th key={key} scope="col">{key}</th>)}
        </>)
    }

    /**
     *
     * @param dateString
     */
    public static processDateColumn(dateString: string): React.ReactNode {
        const date = new Date(dateString);

        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const year = date.getUTCFullYear();

        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');

        return (<td key={dateString}>{`${hours}:${minutes} ${day}.${month}.${year}`}</td>);
    }


    /**
     *
     * @param link
     */
    public static processLinkColumnFast(link: string): React.ReactNode {
        return <td key={link}>{this.fetchLink(link)}</td>
    }

    /**
     *
     * @param data
     */
    public static processColumn(data: string): React.ReactNode {
        return <td key={data}>{data}</td>
    }

    /**
     *
     * @param arr
     */
    public static processArrayColumnFast(arr: string[]): React.ReactNode {
        return (
            <td>
                <ul>
                    {arr.map((e, index) => {
                        return <li key={e + index}>{this.processLinkColumnFast(e)}</li>
                    })}
                </ul>
            </td>
        );
    }

    /**
     *
     * @param entity
     */
    public static getProcessedTableRow(entity: Entity):EntityRowState {
        const processedData: EntityRowState = {};
        Object.keys(entity).forEach((key) => {
            const f: string | string[] = entity[key as keyof Entities];
            if (Array.isArray(f))
                processedData[key] = TableProcessor.processArrayColumnFast(f);
            else if (key === 'url' || key === 'homeworld')
                processedData[key] = TableProcessor.processLinkColumnFast(f);
            else if (key === 'created' || key === 'edited')
                processedData[key] = TableProcessor.processDateColumn(f);
            else
                processedData[key] = TableProcessor.processColumn(f);
        })
        return processedData
    }

    /**
     *
     * @param link
     * @private
     */
    private static fetchLink(link: string): React.ReactNode {
        const name = (link + '').replace(BASE_URL, '');
        return (<a rel="noreferrer" target="_blank" href={link}>{name}</a>);
    }

    // async processArray(arr: []) {
    //     const processedArray = await Promise.all(arr.map(async (el) => {
    //         return <li>{await this.processLink(el)}</li>;
    //     }));
    //     return (
    //         <td>
    //             <ul>
    //                 {processedArray}
    //             </ul>
    //         </td>
    //     );
    // }

    // async processLink(link: string) {
    //     const response = await fetch(link);
    //     const obj = await response.json();
    //     return (
    //         <a rel="noreferrer" target="_blank" href={link}>
    //             {obj.name ? obj.name : obj.title}
    //         </a>
    //     );
    // }
}