import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class blog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            backgroundLogo: "/images/70LogoWhite.png",
            logoWidth: "180px",
            logoHeight: "150px",
            feedback: '',
            formSubmitted: false,
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            person: '',
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
        this.sendFeedback(
            "template_a55gKTQC",
            this.state.email,
            "70percent.restro.cafe@gmail.com",
            "user_MMbdlqhIyzTBljTFWsRab"
        );

        this.setState({
            formSubmitted: true
        });
    }

    // Note: this is using default_service, which will map to whatever
    // default email provider you've set in your EmailJS account.
    sendFeedback(templateId, senderEmail, receiverEmail, feedback, user) {
        window.emailjs
            .send('gmail', templateId, { "name": this.state.name, "phone": this.state.phone, "email": this.state.email, "date": this.state.date, "time": this.state.time, "person": this.state.person }, user)
            .then(res => {
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
                                <li className="nav-item" onClick={(e) => this.tabClickHandler(e, 'stories')}>
                                    <a className={`nav-link ${this.state.activeTab === 'stories' ? 'active' : ''}`} id="stories-tab" data-toggle="tab" href="#stories" role="tab" aria-controls="stories" aria-selected="false">Stories</a>
                                </li>
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
                    <div className="blogImage img-responsive">
                        <img src="/images/bg_3.jpg" alt="BlogImage" style={{ dataStellarBackgroundRatio: "0.5" }} />
                    </div>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-end justify-content-center">
                            <div className="col-md-9  text-center mb-4">
                                <h1 className="mb-2 bread">Blog</h1>
                                <p className="breadcrumbs"><span className="mr-2">
                                    <Link to="/">Home <i className="ion-ios-arrow-forward"></i></Link></span>
                                    <span>Blog <i className="ion-ios-arrow-forward"></i></span></p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 ">
                                <div className="blog-entry">
                                    <Link to="/blog" className="block-20" style={{ backgroundImage: 'url("images/image_1.jpg")' }}></Link>
                                    <div className="text pt-3 pb-4 px-4">
                                        <div className="meta">
                                            <div><Link to="/blog">Sept. 06, 2019</Link></div>
                                            <div><Link to="/blog">Admin</Link></div>
                                        </div>
                                        <h3 className="heading">
                                            <div><Link to="/blog">Taste the delicious foods in Asia</Link></div>
                                        </h3>
                                        <p className="clearfix">
                                            <div><Link to="/blog" className="float-left read">Read more</Link></div>
                                            <div><Link to="/blog" className="float-right meta-chat"><span className="icon-chat" /> 3</Link></div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="blog-entry">
                                    <Link to="/blog" className="block-20" style={{ backgroundImage: 'url("images/image_2.jpg")' }}></Link>
                                    <div className="text pt-3 pb-4 px-4">
                                        <div className="meta">
                                            <div><Link to="/blog">Sept. 06, 2019</Link></div>
                                            <div><Link to="/blog">Admin</Link></div>
                                        </div>
                                        <h3 className="heading">
                                            <div><Link to="/blog">Taste the delicious foods in Asia</Link></div>
                                        </h3>
                                        <p className="clearfix">
                                            <div><Link to="/blog" className="float-left read">Read more</Link></div>
                                            <div><Link to="/blog" className="float-right meta-chat"><span className="icon-chat" /> 3</Link></div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="blog-entry">
                                    <Link to="/blog" className="block-20" style={{ backgroundImage: 'url("images/image_3.jpg")' }}></Link>
                                    <div className="text pt-3 pb-4 px-4">
                                        <div className="meta">
                                            <div><Link to="/blog">Sept. 06, 2019</Link></div>
                                            <div><Link to="/blog">Admin</Link></div>
                                        </div>
                                        <h3 className="heading">
                                            <div><Link to="/blog">Taste the delicious foods in Asia</Link></div>
                                        </h3>
                                        <p className="clearfix">
                                            <div><Link to="/blog" className="float-left read">Read more</Link></div>
                                            <div><Link to="/blog" className="float-right meta-chat"><span className="icon-chat" /> 3</Link></div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row no-gutters my-5">
                            <div className="col text-center">
                                <div className="block-27">
                                    <ul>
                                        <li><a href="#">&lt;</a></li>
                                        <li className="active"><span>1</span></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">&gt;</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
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

export default blog;