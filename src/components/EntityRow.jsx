import React from 'react';

export default class EntityRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            processedData: {}
        };
    }

    componentDidMount() {
        this.processData();
    }

    async processData() {
        const processedData = {};
        for (const key in this.props.data) {
            const f = this.props.data[key];
            if (Array.isArray(f))
                processedData[key] = this.processArrayFast(f);
            else if (key === 'url' || key === 'homeworld')
                processedData[key] = <td key={key + this.props.data.url} >{this.processLinkFast(f)}</td>;
            else if (key === 'created' || key === 'edited')
                processedData[key] = this.processDate(f);
            else
                processedData[key] = <td key={key + this.props.data.url}>{this.props.data[key]}</td>;
            
            
        }
        this.setState({ processedData });
    }

    processArrayFast(arr) {
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


    async processArray(arr) {
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

    async processLink(link) {
        const response = await fetch(link);
        const obj = await response.json();
        return (
            <a rel='noreferrer' target='_blank' href={link}>
                {obj.name ? obj.name : obj.title}
            </a>
        );
    }

    processLinkFast(link) {
        const baseURL = 'https://swapi.dev/api/';
        const name = (link+'').replace(baseURL, '');
        return (<a rel='noreferrer' target='_blank' href={link}>{name}</a>);
    }

    processDate(dateString) {
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
                <th scope="row">{this.props.data.url.match(/(\d+)\/$/)[1]}</th>
                {Object.values(this.state.processedData).map((data, index) => (
                    <React.Fragment key={index}>
                        {data}
                    </React.Fragment>
                ))}
            </tr>
        );
    }
}
