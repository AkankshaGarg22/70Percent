import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';

class SeventyPercentMarinations extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {

    }


    changeHomePage(e, tab) {
        if (tab == 'seventyPercentRestroCafe') {
            this.props.history.push('/seventyPercentCafe')
        } else if (tab == 'biryaniMansion') {
            this.props.history.push('/biryaniMansion')
        }
    }

    render() {
        const options = {
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        }

        return (
            this.state.isLoading ?
                <div id="ftco-loader" className="show fullscreen">
                    <div className="circular" width="48px" height="48px">
                        <circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" />
                        <circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" />
                    </div></div>
                :
                <div className="homePage">
                    <Header history={this.props.history}></Header>


                    <OwlCarousel
                        className="owl-theme js-fullheight body"
                        autoplay={true}
                        margin={0}
                        animateOut={'fadeOut'}
                        animateIn={'fadeIn'}
                        autoplayHoverPause={false}
                        slideBy={1}
                        items={1}
                        loop={true}
                        nav={true}
                        responsive={options}
                        singleItem={true}
                        autoHeight={true}
                        mergeFit={true}
                        dots={false}
                    >
                        <div className="owl-container-1">
                            <div className="homeImages img-responsive">
                                <img src="/images/HomePage-1.jpg" alt="70PercentRestroCafe" style={{ height: "100%" }} />
                            </div>
                            <div className="overlay" />
                            <div className="row slider-text justify-content-center align-items-center">
                                <div className="row justify-content-center">
                                    <div className="col-md-12 text-center heading-section">
                                        <span className="subheading">70 Percent Hospitality</span>
                                        {/* <h2 className="mb-4">Catering Services</h2> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-container-1">
                            <div className="homeImages img-responsive">
                                <img src="/images/HomeImage-5.jpg" alt="70PercentRestroCafe" style={{ height: "100%" }} />
                            </div>
                            <div className="overlay" />
                            <div className="row slider-text justify-content-center align-items-center">
                                <div className="row justify-content-center">
                                    <div className="col-md-12 text-center heading-section">
                                        <span className="subheading">70 Percent Hospitality</span>
                                        <h1 className="mb-4" style={{ marginTop: "50px" }}>Biryani Mansion</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-container-1">
                            <div className="homeImages img-responsive">
                                <img src="/images/HomeImage-4.jpg" alt="70PercentRestroCafe" style={{ height: "100%" }} />
                            </div>
                            <div className="overlay" />
                            <div className="row slider-text justify-content-center align-items-center">
                                <div className="row justify-content-center">
                                    <div className="col-md-12 text-center heading-section">
                                        <span className="subheading">70 Percent Hospitality</span>
                                        <h1 className="mb-4" style={{ marginTop: "50px" }}>70 Percent Diet</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-container-1">
                            <div className="homeImages img-responsive">
                                <img src="/images/HomeImage-3.jpg" alt="70PercentRestroCafe" style={{ height: "100%" }} />
                            </div>
                            <div className="overlay" />
                            <div className="row slider-text justify-content-center align-items-center">
                                <div className="row justify-content-center">
                                    <div className="col-md-12 text-center heading-section">
                                        <span className="subheading">70 Percent Hospitality</span>
                                        <h1 className="mb-4" style={{ marginTop: "50px" }}>70 Percent Restro Cafe</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-container-1">
                            <div className="homeImages img-responsive">
                                <img src="/images/HomePage-1.jpg" alt="70PercentRestroCafe" style={{ height: "100%" }} />
                            </div>
                            <div className="overlay" />
                            <div className="row slider-text justify-content-center align-items-center">
                                <div className="row justify-content-center">
                                    <div className="col-md-12 text-center heading-section">
                                        <span className="subheading">70 Percent Hospitality</span>
                                        <h1 className="mb-4" style={{ marginTop: "50px" }}>70 Percent Marinations</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                    {/* END nav */}

                    <section className="ftco-section ftco-counter img ftco-no-pt" style={{ marginTop: "100px" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 d-flex">
                                    <img src="/images/About.jpg" alt="About70Percent" width="600px" height="400px" style={{ marginBottom: "50px" }} />
                                    <div className="col-md-5 wrap-about pt-5 pt-md-5 pb-md-3">
                                        <div className="col-md-12 text-center heading-section" style={{ float: "right", marginLeft: "100px" }}>
                                            <span className="subheading">About</span>
                                            <h2 className="mb-4">70 Percent</h2>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                            <div className="text-md">
                                                <p>Contact Us<br></br><strong className="number">email@email.com</strong></p>
                                                <span className="time"><strong className="number"><a href="#">1-978-123-4567</a></strong></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row d-md-flex">
                                <div className="col-md-12">
                                    <div className="row d-md-flex align-items-center">
                                        <div className="col-md-8 col-lg-3 mb-4 mb-lg-0 d-flex justify-content-center counter-wrap">
                                            <div className="block-18">
                                                <CountUp start={0} end={3} delay={0} duration={8}>
                                                    {({ countUpRef }) => (
                                                        <div className="text">
                                                            <strong className="number"><span style={{ fontSize: "40px" }} ref={countUpRef} /></strong>
                                                            <span>Years of Experienced</span>
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-lg-3 mb-4 mb-lg-0 d-flex justify-content-center counter-wrap">
                                            <div className="block-18">
                                                <CountUp start={0} end={300} delay={0} duration={8}>
                                                    {({ countUpRef }) => (
                                                        <div className="text">
                                                            <strong className="number"><span style={{ fontSize: "40px" }} ref={countUpRef} /></strong>
                                                            <span>Menu/Dish</span>
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-lg-3 mb-4 mb-lg-0 d-flex justify-content-center counter-wrap">
                                            <div className="block-18">
                                                <CountUp start={0} end={200} delay={0} duration={8} suffix={"+"}>
                                                    {({ countUpRef }) => (
                                                        <div className="text">
                                                            <strong className="number"><span style={{ fontSize: "40px" }} ref={countUpRef} /></strong>
                                                            <span>Subscriptions</span>
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-lg-3 mb-4 mb-lg-0 d-flex justify-content-center counter-wrap">
                                            <div className="block-18">
                                                <CountUp start={0} end={40000} delay={0} duration={8} suffix={"+"}>
                                                    {({ countUpRef }) => (
                                                        <div className="text">
                                                            <strong className="number"><span style={{ fontSize: "40px" }} ref={countUpRef} /></strong>
                                                            <span>Happy Customers</span>
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="ftco-section bg-light">
                        <div className="row">
                            <div className="col-md-12 text-center heading-section" style={{ position: "relative" }}>
                                <span className="subheading">Services</span>
                                <h2 className="mb-4">Catering Services</h2>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 d-flex align-self-stretch">
                                    <div className="media block-6 services d-block">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span className="flaticon-cake" />
                                        </div>
                                        <div className="media-body p-2 mt-3">
                                            <h3 className="heading">Birthday Party</h3>
                                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex align-self-stretch">
                                    <div className="media block-6 services d-block">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span className="flaticon-meeting" />
                                        </div>
                                        <div className="media-body p-2 mt-3">
                                            <h3 className="heading">Business Meetings</h3>
                                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex align-self-stretch">
                                    <div className="media block-6 services d-block">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span className="flaticon-tray" />
                                        </div>
                                        <div className="media-body p-2 mt-3">
                                            <h3 className="heading">Kitty Party</h3>
                                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="ftco-section">
                        <div className="row">
                            <div className="col-md-12 text-center heading-section" style={{ position: "relative" }}>
                                <span className="subheading">Specialties</span>
                                <h2 className="mb-4">Our Menu</h2>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row no-gutters d-flex align-items-stretch">
                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                    <div className="menus d-sm-flex align-items-stretch">
                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/breakfast-1.jpg)' }} />
                                        <div className="text d-flex align-items-center">
                                            <div>
                                                <div className="d-flex">
                                                    <div className="one-half">
                                                        <h3>Grilled Beef with potatoes</h3>
                                                    </div>
                                                    <div className="one-forth">
                                                        <span className="price">$29</span>
                                                    </div>
                                                </div>
                                                <p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
                                                <p><a href="#" className="btn btn-primary">Order now</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                    <div className="menus d-sm-flex align-items-stretch">
                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/breakfast-2.jpg)' }} />
                                        <div className="text d-flex align-items-center">
                                            <div>
                                                <div className="d-flex">
                                                    <div className="one-half">
                                                        <h3>Grilled Beef with potatoes</h3>
                                                    </div>
                                                    <div className="one-forth">
                                                        <span className="price">$29</span>
                                                    </div>
                                                </div>
                                                <p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
                                                <p><a href="#" className="btn btn-primary">Order now</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                    <div className="menus d-sm-flex align-items-stretch">
                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/breakfast-3.jpg)' }} />
                                        <div className="text d-flex align-items-center">
                                            <div>
                                                <div className="d-flex">
                                                    <div className="one-half">
                                                        <h3>Grilled Beef with potatoes</h3>
                                                    </div>
                                                    <div className="one-forth">
                                                        <span className="price">$29</span>
                                                    </div>
                                                </div>
                                                <p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
                                                <p><a href="#" className="btn btn-primary">Order now</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                    <div className="menus d-sm-flex align-items-stretch">
                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/breakfast-5.jpg)' }} />
                                        <div className="text d-flex align-items-center">
                                            <div>
                                                <div className="d-flex">
                                                    <div className="one-half">
                                                        <h3>Grilled Beef with potatoes</h3>
                                                    </div>
                                                    <div className="one-forth">
                                                        <span className="price">$29</span>
                                                    </div>
                                                </div>
                                                <p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
                                                <p><a href="#" className="btn btn-primary">Order now</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                    <div className="menus d-sm-flex align-items-stretch">
                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/breakfast-6.jpg)' }} />
                                        <div className="text d-flex align-items-center">
                                            <div>
                                                <div className="d-flex">
                                                    <div className="one-half">
                                                        <h3>Grilled Beef with potatoes</h3>
                                                    </div>
                                                    <div className="one-forth">
                                                        <span className="price">$29</span>
                                                    </div>
                                                </div>
                                                <p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
                                                <p><a href="#" className="btn btn-primary">Order now</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                    <div className="menus d-sm-flex align-items-stretch">
                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/breakfast-2.jpg)' }} />
                                        <div className="text d-flex align-items-center">
                                            <div>
                                                <div className="d-flex">
                                                    <div className="one-half">
                                                        <h3>Grilled Beef with potatoes</h3>
                                                    </div>
                                                    <div className="one-forth">
                                                        <span className="price">$29</span>
                                                    </div>
                                                </div>
                                                <p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
                                                <p><a href="#" className="btn btn-primary">Order now</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="ftco-section">
                        <div className="container">
                            <div className="row justify-content-center mb-5 pb-2" style={{ position: "relative" }}>
                                <div className="col-md-12 text-center heading-section">
                                    <span className="subheading">Chef</span>
                                    <h2 className="mb-4">Our Master Chef</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-3">
                                    <div className="staff">
                                        <div className="img" style={{ backgroundImage: 'url(images/chef-4.jpg)' }} />
                                        <div className="text pt-4">
                                            <h3>John Smooth</h3>
                                            <span className="position mb-2">Restaurant Owner</span>
                                            <div className="faded">
                                                <ul className="ftco-social d-flex">
                                                    <li><a href="#"><span className="icon-twitter" /></a></li>
                                                    <li><a href="#"><span className="icon-facebook" /></a></li>
                                                    <li><a href="#"><span className="icon-google-plus" /></a></li>
                                                    <li><a href="#"><span className="icon-instagram" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="staff">
                                        <div className="img" style={{ backgroundImage: 'url(images/chef-2.jpg)' }} />
                                        <div className="text pt-4">
                                            <h3>Rebeca Welson</h3>
                                            <span className="position mb-2">Head Chef</span>
                                            <div className="faded">
                                                <ul className="ftco-social d-flex">
                                                    <li><a href="#"><span className="icon-twitter" /></a></li>
                                                    <li><a href="#"><span className="icon-facebook" /></a></li>
                                                    <li className="ftco-animate"><a href="#"><span className="icon-google-plus" /></a></li>
                                                    <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="staff">
                                        <div className="img" style={{ backgroundImage: 'url(images/chef-3.jpg)' }} />
                                        <div className="text pt-4">
                                            <h3>Kharl Branyt</h3>
                                            <span className="position mb-2">Chef</span>
                                            <div className="faded">
                                                <ul className="ftco-social d-flex">
                                                    <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                                                    <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                                                    <li className="ftco-animate"><a href="#"><span className="icon-google-plus" /></a></li>
                                                    <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="staff">
                                        <div className="img" style={{ backgroundImage: 'url(images/chef-1.jpg)' }} />
                                        <div className="text pt-4">
                                            <h3>Luke Simon</h3>
                                            <span className="position mb-2">Chef</span>
                                            <div className="faded">
                                                <ul className="ftco-social d-flex">
                                                    <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                                                    <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                                                    <li className="ftco-animate"><a href="#"><span className="icon-google-plus" /></a></li>
                                                    <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="ftco-section img" style={{ backgroundImage: 'url(images/bg_3.jpg)' }} data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="row d-flex">
                                <div className="col-md-7 makereservation p-4 px-md-5 pb-md-5" style={{ position: "relative" }}>
                                    <div className="heading-section mb-5">
                                        <span className="subheading">Book a table</span>
                                        <h2 className="mb-4">Make Reservation</h2>
                                    </div>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor>Name</label>
                                                    <input type="text" className="form-control" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor>Email</label>
                                                    <input type="text" className="form-control" placeholder="Your Email" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor>Phone</label>
                                                    <input type="text" className="form-control" placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor>Phone</label>
                                                    <input type="text" className="form-control" id="book_date" placeholder="Date" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor>Time</label>
                                                    <input type="text" className="form-control" id="book_time" placeholder="Time" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor>Person</label>
                                                    <div className="select-wrap one-third">
                                                        <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                                        <select name id className="form-control">
                                                            <option value>Person</option>
                                                            <option value>1</option>
                                                            <option value>2</option>
                                                            <option value>3</option>
                                                            <option value>4+</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-3">
                                                <div className="form-group text-center">
                                                    <input type="submit" defaultValue="Make a Reservation" className="btn btn-primary py-3 px-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="ftco-section testimony-section img">
                        <div className="overlay" />
                        <div className="container">
                            <div className="row justify-content-center mb-5">
                                <div className="col-md-12 text-center heading-section">
                                    <span className="subheading">Testimony</span>
                                    <h2 className="mb-4">Happy Customer</h2>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <div className="carousel-testimony owl-carousel ftco-owl">
                                        <div className="item">
                                            <div className="testimony-wrap text-center pb-5">
                                                <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_1.jpg)' }}>
                                                    <span className="quote d-flex align-items-center justify-content-center">
                                                        <i className="icon-quote-left" />
                                                    </span>
                                                </div>
                                                <div className="text p-3">
                                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <p className="name">Jason McClean</p>
                                                    <span className="position">Customer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimony-wrap text-center pb-5">
                                                <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_2.jpg)' }}>
                                                    <span className="quote d-flex align-items-center justify-content-center">
                                                        <i className="icon-quote-left" />
                                                    </span>
                                                </div>
                                                <div className="text p-3">
                                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <p className="name">Mark Stevenson</p>
                                                    <span className="position">Customer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimony-wrap text-center pb-5">
                                                <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_3.jpg)' }}>
                                                    <span className="quote d-flex align-items-center justify-content-center">
                                                        <i className="icon-quote-left" />
                                                    </span>
                                                </div>
                                                <div className="text p-3">
                                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <p className="name">Art Leonard</p>
                                                    <span className="position">Customer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimony-wrap text-center pb-5">
                                                <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_4.jpg)' }}>
                                                    <span className="quote d-flex align-items-center justify-content-center">
                                                        <i className="icon-quote-left" />
                                                    </span>
                                                </div>
                                                <div className="text p-3">
                                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <p className="name">Rose Henderson</p>
                                                    <span className="position">Customer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimony-wrap text-center pb-5">
                                                <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_3.jpg)' }}>
                                                    <span className="quote d-flex align-items-center justify-content-center">
                                                        <i className="icon-quote-left" />
                                                    </span>
                                                </div>
                                                <div className="text p-3">
                                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <p className="name">Ian Boner</p>
                                                    <span className="position">Customer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="ftco-section bg-light">
                        <div className="container">
                            <div className="row justify-content-center mb-5">
                                <div className="col-md-7 text-center heading-section">
                                    <span className="subheading">Blog</span>
                                    <h2 className="mb-4">Recent Posts</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="blog-entry">
                                        <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_1.jpg")' }}>
                                        </a>
                                        <div className="text pt-3 pb-4 px-4">
                                            <div className="meta">
                                                <div><a href="#">Sept. 06, 2019</a></div>
                                                <div><a href="#">Admin</a></div>
                                            </div>
                                            <h3 className="heading"><a href="#">Taste the delicious foods in Asia</a></h3>
                                            <p className="clearfix">
                                                <a href="#" className="float-left read">Read more</a>
                                                <a href="#" className="float-right meta-chat"><span className="icon-chat" /> 3</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="blog-entry">
                                        <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_2.jpg")' }}>
                                        </a>
                                        <div className="text pt-3 pb-4 px-4">
                                            <div className="meta">
                                                <div><a href="#">Sept. 06, 2019</a></div>
                                                <div><a href="#">Admin</a></div>
                                            </div>
                                            <h3 className="heading"><a href="#">Taste the delicious foods in Asia</a></h3>
                                            <p className="clearfix">
                                                <a href="#" className="float-left read">Read more</a>
                                                <a href="#" className="float-right meta-chat"><span className="icon-chat" /> 3</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="blog-entry">
                                        <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_3.jpg")' }}>
                                        </a>
                                        <div className="text pt-3 pb-4 px-4">
                                            <div className="meta">
                                                <div><a href="#">Sept. 06, 2019</a></div>
                                                <div><a href="#">Admin</a></div>
                                            </div>
                                            <h3 className="heading"><a href="#">Taste the delicious foods in Asia</a></h3>
                                            <p className="clearfix">
                                                <a href="#" className="float-left read">Read more</a>
                                                <a href="#" className="float-right meta-chat"><span className="icon-chat" /> 3</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer></Footer>

                </div >
        );
    };
}

export default SeventyPercentMarinations;