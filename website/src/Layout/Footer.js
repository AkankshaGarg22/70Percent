import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <footer className="ftco-footer ftco-bg-dark ftco-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6 col-lg-3">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Feliciano</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                                    <li ><a href="#"><span className="icon-twitter" /></a></li>
                                    <li ><a href="#"><span className="icon-facebook" /></a></li>
                                    <li ><a href="#"><span className="icon-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Open Hours</h2>
                                <ul className="list-unstyled open-hours">
                                    <li className="d-flex"><span>Monday</span><span>9:00 - 24:00</span></li>
                                    <li className="d-flex"><span>Tuesday</span><span>9:00 - 24:00</span></li>
                                    <li className="d-flex"><span>Wednesday</span><span>9:00 - 24:00</span></li>
                                    <li className="d-flex"><span>Thursday</span><span>9:00 - 24:00</span></li>
                                    <li className="d-flex"><span>Friday</span><span>9:00 - 02:00</span></li>
                                    <li className="d-flex"><span>Saturday</span><span>9:00 - 02:00</span></li>
                                    <li className="d-flex"><span>Sunday</span><span> 9:00 - 02:00</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Instagram</h2>
                                <div className="thumb d-sm-flex">
                                    <a href="#" className="thumb-menu img" style={{ backgroundImage: 'url(images/insta-1.jpg)' }}>
                                    </a>
                                    <a href="#" className="thumb-menu img" style={{ backgroundImage: 'url(images/insta-2.jpg)' }}>
                                    </a>
                                    <a href="#" className="thumb-menu img" style={{ backgroundImage: 'url(images/insta-3.jpg)' }}>
                                    </a>
                                </div>
                                <div className="thumb d-flex">
                                    <a href="#" className="thumb-menu img" style={{ backgroundImage: 'url(images/insta-4.jpg)' }}>
                                    </a>
                                    <a href="#" className="thumb-menu img" style={{ backgroundImage: 'url(images/insta-5.jpg)' }}>
                                    </a>
                                    <a href="#" className="thumb-menu img" style={{ backgroundImage: 'url(images/insta-6.jpg)' }}>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Newsletter</h2>
                                <p>Far far away, behind the word mountains, far from the countries.</p>
                                <form action="#" className="subscribe-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control mb-2" placeholder="Enter phone number" />
                                        <input type="submit" defaultValue="Subscribe" className="form-control submit px-3" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;
