import React, { Component } from 'react';
import { Offline, Online, Detector } from "react-detect-offline";

class OnlineCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() { }
    /**
     * @param {online} online
     * triggers when there is a change in network from offline to online 
     * or vice versa
     * updates the window object 
     */
    online(online) {
        if (online) {
            window.isOnline = true;
        }
        else {
            window.isOnline = false;
        }
    }
    render() {
        return (
            <div><Online onChange={(online) => this.online(online)}></Online></div>
        )
    }
}
export default OnlineCheck;