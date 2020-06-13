import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Contact extends Component {
    static defaultProps = {
        center: {
            lat: 30.3165,
            lng: 78.0322
        },
        zoom: 11
    };

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            backgroundLogo: "/images/70LogoWhite.png",
            logoWidth: "180px",
            logoHeight: "150px",
            feedback: '',
            formSubmitted: false,
            phone: '',
            name: '',
            email: '',
            subject: 'Location Enquiry',
            message: '',
            formEmailSent: false,
            activeTab: 'home'
        }
    }

    componentDidMount() {
        this.setState({ isLoading: false })
        window.addEventListener('scroll', this.handleScroll, true);

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
    }

    inputChangeHandler(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    tabClickHandler(e, name) {
        e.preventDefault();
        this.setState({
            activeTab: name
        })
        if (name === 'home') {
            this.props.history.push('/')
        } else if (name === 'stories') {
            this.props.history.push('/stories')
        }
        else if (name === 'contact') {
            this.props.history.push('/contact')
        }
        else if (name === 'menu') {
            this.props.history.push('/menu')
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.message !== '' && this.state.subject !== '' && this.state.phone !== '' && this.state.name !== '' && this.state.email !== '') {
            this.sendFeedback(
                "location_enquiry",
                this.state.email,
                "70percent.restro.cafe@gmail.com",
                "user_MMbdlqhIyzTBljTFWsRab"
            );

            this.setState({
                formSubmitted: true
            });
        } else {
            return (
                <div className="error-message">Value cannot be empty</div>
            )
        }
    }

    // Note: this is using default_service, which will map to whatever
    // default email provider you've set in your EmailJS account.
    sendFeedback(templateId, senderEmail, receiverEmail, feedback, user) {
        window.emailjs
            .send('gmail', templateId, { "name": this.state.name, "subject": this.state.subject, "email": this.state.email, "message": this.state.message }, user)
            .then(res => {
                console.log('response sent');
                this.setState({
                    formEmailSent: true
                });
            })
            // Handle errors here however you like
            .catch(err => console.error('Failed to send feedback. Error: ', err));
    }

    handleScroll = (event) => {
        if (window.pageYOffset < 200) {
            this.setState({
                backgroundLogo: "/images/70LogoWhite.png", logoWidth: "180px",
                logoHeight: "150"
            });
        }
        else if (window.pageYOffset > 200) {
            this.setState({
                backgroundLogo: "/images/logo.png", logoWidth: "100px",
                logoHeight: "80"
            });
        }
    }

    changeHomePage(e, tab) {
        debugger
        if (tab == 'seventyPercentRestroCafe') {
            this.props.history.push('/seventyPercentCafe')
        } else if (tab == 'biryaniMansion') {
            this.props.history.push('/biryaniMansion')
        } else if (tab == 'seventyPercentDiet') {
            this.props.history.push('/seventyPercentDiet')
        } else if (tab == 'seventyPercentMarinations') {
            this.props.history.push('/seventyPercentMarinations')
        }
    }

    render() {
        return (
            <div className="homePage">
                <div className="py-1 bg-black top">
                    <div className="container">
                        <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                            <div className="col-lg-12 d-block">
                                <div className="row d-flex">
                                    <div className="col-md pr-4 d-flex topper align-items-center">
                                        <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2" /></div>
                                        <span className="text">+ 1235 2355 98</span>
                                    </div>
                                    <div className="col-md pr-4 d-flex topper align-items-center">
                                        <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane" /></div>
                                        <span className="text">youremail@email.com</span>
                                    </div>
                                    <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right justify-content-end">
                                        <p className="mb-0 register-link"><span>Open hours:</span> <span>Monday - Sunday</span> <span>8:00AM - 9:00PM</span></p>
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
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active" onClick={(e) => this.tabClickHandler(e, 'home')}>
                                    <a className={`nav-link ${this.state.activeTab === 'home' ? 'active' : ''}`} id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Home</a>
                                </li>
                                <li className="dropdown nav-item">
                                    <a href="#" className="dropdown-toggle-nav nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Brands <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item"><Link to='/seventyPercentCafe'>70 Percent Restro Cafe</Link></li>
                                        <li className="dropdown-item"><Link to='/seventyPercentMarinations'>70 Percent Marinations</Link></li>
                                        <li className="dropdown-item"><Link to='/biryaniMansion'>Biryani Mansion</Link></li>
                                        <li className="dropdown-item"><Link to='/seventyPercentDiet'>70 Percent Dier</Link></li>
                                    </ul>
                                </li>
                                {/* <li className="nav-item" onClick={(e) => this.tabClickHandler(e, 'stories')}>
                                        <a className={`nav-link ${this.state.activeTab === 'stories' ? 'active' : ''}`} id="stories-tab" data-toggle="tab" href="#stories" role="tab" aria-controls="stories" aria-selected="false">Stories</a>
                                    </li> */}
                                <li className="nav-item" onClick={(e) => this.tabClickHandler(e, 'contact')}>
                                    <a className={`nav-link ${this.state.activeTab === 'contact' ? 'active' : ''}`} id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                                </li>
                                <li className="nav-item cta" onClick={(e) => this.tabClickHandler(e, 'menu')}>
                                    <a className={`nav-link ${this.state.activeTab === 'menu' ? 'active' : ''}`} id="menu-tab" data-toggle="tab" href="#menu" role="tab" aria-controls="menu" aria-selected="false">Menu</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section className="hero-wrap hero-wrap-2">
                    <img src="images/bg_3.jpg" style={{ dataStellarBackgroundRatio: "0.5", height: "100%", width: "100%" }}></img>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-end justify-content-center">
                            <div className="col-md-9 text-center mb-4">
                                <h1 className="mb-2 bread">Contact</h1>
                                <p className="breadcrumbs"><span className="mr-2">
                                    <Link to="/">Home <i className="ion-ios-arrow-forward"></i></Link>
                                </span> <span>Contact us <i className="ion-ios-arrow-forward"></i></span></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
                    <div className="container">
                        <div className="row d-flex align-items-stretch no-gutters">
                            <div className="col-md-6 pt-5 px-2 pb-2 p-md-5 order-md-last">
                                <h2 className="h4 mb-2 mb-md-5 font-weight-bold">Contact Us</h2>
                                <form>

                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                            placeholder="Your Name"
                                            onChange={(event) => this.inputChangeHandler(event)}
                                            name="name"
                                            required={true} />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control"
                                            value={this.state.email}
                                            placeholder="Your Email"
                                            onChange={(event) => this.inputChangeHandler(event)}
                                            name="email"
                                            required={true} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                            value={this.state.phone}
                                            placeholder="Your Phone"
                                            onChange={(event) => this.inputChangeHandler(event)}
                                            name="phone"
                                            required={true} />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Message" onChange={(event) => this.inputChangeHandler(event)}></textarea>

                                    </div>

                                    <div className="form-group text-center">
                                        <input type="submit" defaultValue="Submit" className="btn btn-primary py-3 px-5" onClick={(e) => this.handleSubmit(e)} />
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch">
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: 'AIzaSyCM4k21H1CeYaExG9DjRcxTRZcLgUUY3jI' }}
                                    defaultCenter={this.props.center}
                                    defaultZoom={this.props.zoom}
                                >
                                    <AnyReactComponent
                                        lat={30.3318836}
                                        lng={78.0085375}
                                        text="My Marker"
                                    />
                                </GoogleMapReact>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-section contact-section">
                    <div className="container">
                        <div className="row d-flex contact-info">
                            <div className="col-md-12 mb-4">
                                <h2 className="h4 font-weight-bold">Contact Information</h2>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-md-3 d-flex">
                                <div className="dbox">
                                    <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="dbox">
                                    <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="dbox">
                                    <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="dbox">
                                    <p><span>Website</span> <a href="#">yoursite.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                {/* loader */}
                {/* <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div> */}
            </div >
        );
    };
}

export default Contact;