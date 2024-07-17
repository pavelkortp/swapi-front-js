import React from 'react';
import {Entities} from '../interfaces/Entities';
import {EntityRowState} from '../components/EntityRow';
import {BASE_URL} from '../services/api.service';
import {BaseEntity} from '../models/BaseEntity';

/**
 * Companion object to process table data
 */
export class TableProcessor {

    /**
     *
     * @param entity
     */
    public static getTableHeader(entity: BaseEntity) {
        return (<>
            {Object.keys(entity).map((key: string) => <th key={key} scope="col">{key}</th>)}
        </>)
    }

    /**
     * Takes string date and return table's column
     * @param dateString string date
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

    public static async processLinkColumn(link: string): Promise<React.ReactNode> {
        return <td key={link}>{await this.processLink(link)}</td>
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

    public static async processArrayColumn(arr: string[]): Promise<React.ReactNode> {
        return (
            <td>
                <ul>
                    {await Promise.all(arr.map(async (e, index) => {
                        return <li key={e + index}>{await this.processLinkColumn(e)}</li>
                    }))}
                </ul>
            </td>
        );
    }

    /**
     *
     * @param entity
     */
    public static getProcessedTableRow(entity: BaseEntity):EntityRowState {
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

    static async processArray(arr: []) {
        const processedArray = await Promise.all(arr.map(async (el) => {
            return <li>{await this.processLink(el)}</li>;
        }));
        return (
            <td>
                <ul>
                    {processedArray}
                </ul>
            </td>
        );
    }

    static async processLink(link: string) {
        const response = await fetch(link);
        const obj = await response.json();
        return (
            <a rel="noreferrer" target="_blank" href={link}>
                {obj.name ? obj.name : obj.title}
            </a>
        );
    }
}