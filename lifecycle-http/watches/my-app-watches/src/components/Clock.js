import React from 'react';
import '../css/App.css';



export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.toOffsetDate(this.props.offset)
        };
    }


    componentDidMount() {
        this.interval = setInterval(
            () => this.tick(),
            1000);
    }


    componentWillUnmount() {
        clearInterval(this.interval)
    }


    pad(value) {
        return value < 10 ? '0' + value : value;
    }


    toOffsetDate(offset) {
        let d = new Date(new Date().getTime() - (offset * 60 * 1000));
        let hrs = this.pad(d.getUTCHours());
        let mins = this.pad(d.getUTCMinutes());
        let secs = this.pad(d.getUTCSeconds());
        return `${hrs}:${mins}:${secs}`
    }

    tick() {
        this.setState({
            time: this.toOffsetDate(this.props.offset)
        })
    }



    render() {

        return (
            <div>
                {this.state.time}
            </div>
        )
    }
}
