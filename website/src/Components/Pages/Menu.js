import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import SecondaryHeader from '../../Layout/SecondaryHeader';

class Menu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            feedback: '',
            formSubmitted: false,
            name: '',
            email: '',
            phone: '',
            subject: '',
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
            <div className="menuPage">
                <Header history={this.props.history}></Header>

                <SecondaryHeader pageName="Specialities" value="Menu" secondValue=""></SecondaryHeader>

                <section className="ftco-section">
                    <div className="container">
                        <div className="ftco-search">
                            <div className="row">
                                <div className="col-md-12 nav-link-wrap">
                                    <div className="nav nav-pills d-flex text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <a className="nav-link  active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Breakfast</a>
                                        <a className="nav-link " id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Lunch</a>
                                        <a className="nav-link " id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Dinner</a>
                                        <a className="nav-link " id="v-pills-4-tab" data-toggle="pill" href="#v-pills-4" role="tab" aria-controls="v-pills-4" aria-selected="false">Drinks</a>
                                        <a className="nav-link " id="v-pills-5-tab" data-toggle="pill" href="#v-pills-5" role="tab" aria-controls="v-pills-5" aria-selected="false">Desserts</a>
                                        <a className="nav-link " id="v-pills-6-tab" data-toggle="pill" href="#v-pills-6" role="tab" aria-controls="v-pills-6" aria-selected="false">Wine</a>
                                    </div>
                                </div>
                                <div className="col-md-12 tab-wrap">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="day-1-tab">
                                            <div className="row no-gutters d-flex align-items-stretch">
                                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                                    <div className="menus d-sm-flex  align-items-stretch">
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/breakfast-4.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/breakfast-5.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/breakfast-7.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/breakfast-8.jpg)' }} />
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
                                        <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-day-2-tab">
                                            <div className="row no-gutters d-flex align-items-stretch">
                                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/lunch-1.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/lunch-2.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/lunch-3.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/lunch-4.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/lunch-5.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/lunch-6.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/lunch-7.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/lunch-8.jpg)' }} />
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
                                        <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-day-3-tab">
                                            <div className="row no-gutters d-flex align-items-stretch">
                                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/dinner-1.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/dinner-2.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/dinner-3.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/dinner-4.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/dinner-5.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/dinner-6.jpg)' }} />
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
                                        <div className="tab-pane fade" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-day-4-tab">
                                            <div className="row no-gutters d-flex align-items-stretch">
                                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/drink-1.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/drink-2.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/drink-3.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/drink-4.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/drink-5.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/drink-6.jpg)' }} />
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
                                        <div className="tab-pane fade" id="v-pills-5" role="tabpanel" aria-labelledby="v-pills-day-5-tab">
                                            <div className="row no-gutters d-flex align-items-stretch">
                                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/dessert-1.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/dessert-2.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/dessert-3.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/dessert-4.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/dessert-5.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/drink-6.jpg)' }} />
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
                                        <div className="tab-pane fade" id="v-pills-6" role="tabpanel" aria-labelledby="v-pills-day-6-tab">
                                            <div className="row no-gutters d-flex align-items-stretch">
                                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/wine-1.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/wine-2.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/wine-3.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/wine-4.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/wine-5.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/wine-6.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/wine-7.jpg)' }} />
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
                                                    <div className="menus d-sm-flex  align-items-stretch">
                                                        <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/wine-8.jpg)' }} />
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
                                    </div>
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

export default Menu;