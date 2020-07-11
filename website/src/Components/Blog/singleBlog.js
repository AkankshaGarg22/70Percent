import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import SecondaryHeader from '../../Layout/SecondaryHeader';

class singleBlog extends Component {

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

    componentWillUnmount() {
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
            <div className="homePage">
                <Header history={this.props.history}></Header>


                <SecondaryHeader pageName="Blog" value="Blog Single" secondValue="Blog"></SecondaryHeader>


                <section className="ftco-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 ">
                                <h2 className="mb-3">A small river named Duden flows by their place and supplies it with the necessary regelialia.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
                                <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
                                <p>
                                    <img src="images/image_2.jpg" alt="" className="img-fluid" />
                                </p>
                                <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
                                <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
                                <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
                                <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
                                <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
                                <p>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>
                                <div className="tag-widget post-tag-container mb-5 mt-5">
                                    <div className="tagcloud">
                                        <a href="#" className="tag-cloud-link">Food</a>
                                        <a href="#" className="tag-cloud-link">Wine</a>
                                        <a href="#" className="tag-cloud-link">Drink</a>
                                        <a href="#" className="tag-cloud-link">Dish</a>
                                    </div>
                                </div>
                                <div className="about-author d-flex p-4 bg-light">
                                    <div className="bio mr-5">
                                        <img src="images/person_1.jpg" alt="Image placeholder" className="img-fluid mb-4" />
                                    </div>
                                    <div className="desc">
                                        <h3>George Washington</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                    </div>
                                </div>
                                <div className="pt-5 mt-5">
                                    <h3 className="mb-5 h4 font-weight-bold p-4 bg-light">07 Feedbacks</h3>
                                    <ul className="comment-list">
                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img src="images/person_1.jpg" alt="Image placeholder" />
                                            </div>
                                            <div className="comment-body">
                                                <h3>John Doe</h3>
                                                <div className="meta mb-2">Sept. 07, 2019 at 2:21pm</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                <p><a href="#" className="reply">Reply</a></p>
                                            </div>
                                        </li>
                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img src="images/person_1.jpg" alt="Image placeholder" />
                                            </div>
                                            <div className="comment-body">
                                                <h3>John Doe</h3>
                                                <div className="meta mb-2">Sept. 07, 2019 at 2:21pm</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                <p><a href="#" className="reply">Reply</a></p>
                                            </div>
                                            <ul className="children">
                                                <li className="comment">
                                                    <div className="vcard bio">
                                                        <img src="images/person_1.jpg" alt="Image placeholder" />
                                                    </div>
                                                    <div className="comment-body">
                                                        <h3>John Doe</h3>
                                                        <div className="meta mb-2">Sept. 07, 2019 at 2:21pm</div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                        <p><a href="#" className="reply">Reply</a></p>
                                                    </div>
                                                    <ul className="children">
                                                        <li className="comment">
                                                            <div className="vcard bio">
                                                                <img src="images/person_1.jpg" alt="Image placeholder" />
                                                            </div>
                                                            <div className="comment-body">
                                                                <h3>John Doe</h3>
                                                                <div className="meta mb-2">Sept. 07, 2019 at 2:21pm</div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                                <p><a href="#" className="reply">Reply</a></p>
                                                            </div>
                                                            <ul className="children">
                                                                <li className="comment">
                                                                    <div className="vcard bio">
                                                                        <img src="images/person_1.jpg" alt="Image placeholder" />
                                                                    </div>
                                                                    <div className="comment-body">
                                                                        <h3>John Doe</h3>
                                                                        <div className="meta mb-2">Sept. 07, 2019 at 2:21pm</div>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                                        <p><a href="#" className="reply">Reply</a></p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img src="images/person_1.jpg" alt="Image placeholder" />
                                            </div>
                                            <div className="comment-body">
                                                <h3>John Doe</h3>
                                                <div className="meta mb-2">Sept. 07, 2019 at 2:21pm</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                <p><a href="#" className="reply">Reply</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                    {/* END comment-list */}
                                    <div className="comment-form-wrap pt-5">
                                        <h3 className="mb-5 h4 font-weight-bold p-4 bg-light">Leave a comment</h3>
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
                                            {/* <div className="form-group">
                                                <input type="text" className="form-control"
                                                    value={this.state.subject}
                                                    placeholder="Website"
                                                    onChange={(event) => this.inputChangeHandler(event)}
                                                    name="subject"
                                                    required={true} />
                                            </div> */}
                                            <div className="form-group">
                                                <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Message" onChange={(event) => this.inputChangeHandler(event)}></textarea>

                                            </div>
                                            <div className="form-group">
                                                <input type="submit" defaultValue="Submit" className="btn btn-primary py-3 px-5" onClick={(e) => this.handleSubmit(e)} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div> {/* .col-md-8 */}
                            <div className="col-lg-4 sidebar ">
                                <div className="sidebar-box">
                                    <form action="#" className="search-form">
                                        <div className="form-group">
                                            <span className="icon icon-search" />
                                            <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-box ">
                                    <h3>Category</h3>
                                    <ul className="categories">
                                        <li><a href="#">Breakfast <span>(6)</span></a></li>
                                        <li><a href="#">Lunch <span>(8)</span></a></li>
                                        <li><a href="#">Dinner <span>(2)</span></a></li>
                                        <li><a href="#">Desserts <span>(2)</span></a></li>
                                        <li><a href="#">Drinks <span>(2)</span></a></li>
                                        <li><a href="#">Wine <span>(2)</span></a></li>
                                    </ul>
                                </div>
                                <div className="sidebar-box ">
                                    <h3>Popular Articles</h3>
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img mr-4" style={{ backgroundImage: 'url(images/image_1.jpg)' }} />
                                        <div className="text">
                                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                            <div className="meta">
                                                <div><a href="#"><span className="icon-calendar" /> June 25, 2019</a></div>
                                                <div><a href="#"><span className="icon-person" /> Dave Lewis</a></div>
                                                <div><a href="#"><span className="icon-chat" /> 19</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img mr-4" style={{ backgroundImage: 'url(images/image_2.jpg)' }} />
                                        <div className="text">
                                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                            <div className="meta">
                                                <div><a href="#"><span className="icon-calendar" /> June 25, 2019</a></div>
                                                <div><a href="#"><span className="icon-person" /> Dave Lewis</a></div>
                                                <div><a href="#"><span className="icon-chat" /> 19</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img mr-4" style={{ backgroundImage: 'url(images/image_3.jpg)' }} />
                                        <div className="text">
                                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                            <div className="meta">
                                                <div><a href="#"><span className="icon-calendar" /> June 25, 2019</a></div>
                                                <div><a href="#"><span className="icon-person" /> Dave Lewis</a></div>
                                                <div><a href="#"><span className="icon-chat" /> 19</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-box ">
                                    <h3>Tag Cloud</h3>
                                    <ul className="tagcloud m-0 p-0">
                                        <a href="#" className="tag-cloud-link">Dish</a>
                                        <a href="#" className="tag-cloud-link">Food</a>
                                        <a href="#" className="tag-cloud-link">Lunch</a>
                                        <a href="#" className="tag-cloud-link">Menu</a>
                                        <a href="#" className="tag-cloud-link">Dessert</a>
                                        <a href="#" className="tag-cloud-link">Drinks</a>
                                        <a href="#" className="tag-cloud-link">Sweets</a>
                                    </ul>
                                </div>
                                <div className="sidebar-box ">
                                    <h3>Archives</h3>
                                    <ul className="categories">
                                        <li><a href="#">January 2019 <span>(20)</span></a></li>
                                        <li><a href="#">December 2018 <span>(30)</span></a></li>
                                        <li><a href="#">Novemmber 2018 <span>(20)</span></a></li>
                                        <li><a href="#">September 2018 <span>(6)</span></a></li>
                                        <li><a href="#">August 2018 <span>(8)</span></a></li>
                                    </ul>
                                </div>
                                <div className="sidebar-box ">
                                    <h3>Paragraph</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                </div>
                            </div>{/* END COL */}
                        </div>
                    </div>
                </section>

                <Footer></Footer>
                {/* loader */}
                {/* <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div> */}
            </div >
        );
    };
}

export default singleBlog;