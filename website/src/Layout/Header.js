import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

const whiteLogo = require('../Assets/images/70LogoWhite.png')
const Logo = require('../Assets/images/logo.png')

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundLogo: whiteLogo,
            logoWidth: "180px",
            logoHeight: "150px",
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
    }
    handleScroll = (event) => {
        if (window.pageYOffset < 200) {
            this.setState({
                backgroundLogo: whiteLogo, logoWidth: "180px",
                logoHeight: "150"
            });
        }
        else if (window.pageYOffset > 200) {
            this.setState({
                backgroundLogo: Logo, logoWidth: "100px",
                logoHeight: "80"
            });
        }
    }

    render() {
        return (
            <header>
                <div class="py-1 bg-black top">
                    <div class="container">
                        <div class="row no-gutters d-flex align-items-start align-items-center px-md-0">
                            <div class="col-lg-12 d-block">
                                <div class="row d-flex">
                                    <div class="col-md pr-4 d-flex topper align-items-center">
                                        <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
                                        <span class="text">+ 1235 2355 98</span>
                                    </div>
                                    <div class="col-md pr-4 d-flex topper align-items-center">
                                        <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
                                        <span class="text">youremail@email.com</span>
                                    </div>
                                    <div class="col-md-5 pr-4 d-flex topper align-items-center text-lg-right justify-content-end">
                                        <p class="mb-0 register-link"><span>Open hours:</span> <span>Monday - Sunday</span> <span>8:00AM - 9:00PM</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <div className="logo img" /><img src={this.state.backgroundLogo} alt="Logo" width={this.state.logoWidth} height={this.state.logoHeight} />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="oi oi-menu" /> Menu
                            </button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
                                <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                                <li className="nav-item"><a href="blog.html" className="nav-link">Stories</a></li>
                                <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                                <li className="nav-item cta"><a href="reservation.html" className="nav-link">Book a table</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
export default Header;