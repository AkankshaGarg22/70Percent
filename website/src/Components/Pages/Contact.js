import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import SecondaryHeader from '../../Layout/SecondaryHeader';

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

    }


    inputChangeHandler(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
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

    render() {
        return (
            <div className="homePage">
                <Header history={this.props.history}></Header>


                <SecondaryHeader pageName="Contact" value="Contact Us" secondValue=""></SecondaryHeader>


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

                <Footer></Footer>
                {/* <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div> */}
            </div >
        );
    };
}

export default Contact;