import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SecondaryHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <section className="hero-wrap hero-wrap-2">
                <img src="images/bg_3.jpg" style={{ dataStellarBackgroundRatio: "0.5", height: "100%", width: "100%" }}></img>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-end justify-content-center">
                        <div className="col-md-9 text-center mb-4">
                            <h1 className="mb-2 bread">{this.props.pageName}</h1>
                            <p className="breadcrumbs"><span className="mr-2">
                                <Link to="/">Home <i className="ion-ios-arrow-forward"></i></Link>
                            </span> {this.props.secondValue !== "" ? <span class="mr-2">
                                <Link to="/stories">Blog <i className="ion-ios-arrow-forward"></i></Link>
                            </span> : null}
                                <span>{this.props.value}<i className="ion-ios-arrow-forward"></i></span></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default SecondaryHeader;