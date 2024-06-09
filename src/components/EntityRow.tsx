import React, {ReactNode} from 'react';
import {BASE_URL} from '../App';
import Entity from '../interfaces/Entity';
import {Entities} from '../interfaces/Entities';


interface EntityRowProps {
    data: Entity;
}

interface EntityRowState {
    [key: string]: React.ReactNode;
}

export default class EntityRow extends React.Component<EntityRowProps, EntityRowState> {
    constructor(props: EntityRowProps) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.processData();
    }

    processData() {
        const processedData: EntityRowState = {};
        Object.keys(this.props.data).forEach((key) => {
            const f: string | string[] = this.props.data[key as keyof Entities];
            if (Array.isArray(f))
                processedData[key] = this.processArrayFast(f);
            else if (key === 'url' || key === 'homeworld')
                processedData[key] = <td key={key + this.props.data.url}>{this.processLinkFast(f)}</td>;
            else if (key === 'created' || key === 'edited')
                processedData[key] = this.processDate(f);
            else
                processedData[key] = <td key={key + this.props.data.url}>{this.props.data[key as keyof Entities]}</td>;
        })

        this.setState(processedData);
    }

    processArrayFast(arr: string[]) {
        return (
            <td>
                <ul>
                    {arr.map((e, index) => {
                        return <li key={e + index}>{this.processLinkFast(e)}</li>
                    })}
                </ul>
            </td>
        );
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

    processLinkFast(link: string) {
        const name = (link + '').replace(BASE_URL, '');
        return (<a rel="noreferrer" target="_blank" href={link}>{name}</a>);
    }

    processDate(dateString: string) {
        const date = new Date(dateString);

        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = date.getUTCFullYear();

        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');

        return (<td key={dateString}>{`${hours}:${minutes} ${day}.${month}.${year}`}</td>);
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.data.url.match(/(\d+)\/$/)![1]}</th>
                {Object.values(this.state).map((data: ReactNode, index) => (
                    <React.Fragment key={index}>
                        {data}
                    </React.Fragment>
                ))}
            </tr>
        );
    }
}
