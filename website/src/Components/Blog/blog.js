import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import SecondaryHeader from '../../Layout/SecondaryHeader';


class blog extends Component {

    constructor(props) {
        super(props)
        this.state = {
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

    }


    inputChangeHandler(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
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

    render() {
        return (
            <div className="homePage">
                <Header history={this.props.history}></Header>

                <SecondaryHeader pageName="Blog" value="Blog" secondValue=""></SecondaryHeader>

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

                <Footer></Footer>
                {/* <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div> */}
            </div >
        );
    };
}

export default blog;