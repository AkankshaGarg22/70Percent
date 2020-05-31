import React from 'react';
import './loader.css';

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    /**
     * triggering this function will display the loader
     */
    show() {
        this.setState({ loading: true })
    }
    /**
     * Will hide the loader from screen
     */
    hide() {
        this.setState({ loading: false })
    }
    render() {
        return (
            <div className={`loader-overlay ${this.state.loading ? 'show' : 'hide'}`}>
                <div className="loader">
                </div>
            </div>
        )
    }
}
export default Loader;