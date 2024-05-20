import React from 'react';

//TODO: Fix GPT code
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
        for (const key of Object.keys(this.props.data)) {
            const f = this.props.data[key];
            if (Array.isArray(f)) {
                const processedArray = await this.processArray(f);
                processedData[key] = processedArray;
            } else if (key === 'url') {
                processedData[key] = <td key={key}><a href={f}>URL</a></td>;
            } else if (key === 'created' || key === 'edited') {
                processedData[key] = this.processDate(f);
            } else {
                processedData[key] = <td key={key}>{this.props.data[key]}</td>;
            }
        }
        this.setState({ processedData });
    }

    async processArray(arr) {
        const processedArray = await Promise.all(arr.map(async (el, index) => {
            const name = await this.processLink(el);
            return (<li key={index}><a rel='noreferrer' href={el}>{name}</a></li>);
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

        return obj.name ? obj.name : obj.title;
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
                {Object.values(this.state.processedData)}
            </tr>
        );
    }
}
