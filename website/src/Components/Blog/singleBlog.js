import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class singleBlog extends Component {

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
            subject: '',
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
        }
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

                <section class="hero-wrap hero-wrap-2">
                    <img src="images/bg_3.jpg" style={{ dataStellarBackgroundRatio: "0.5", height: "100%", width: "100%" }}></img>
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row no-gutters slider-text align-items-end justify-content-center">
                            <div class="col-md-9 text-center mb-4">
                                <h1 class="mb-2 bread">Blog</h1>
                                <p class="breadcrumbs"><span class="mr-2">
                                    <Link to="/">Home <i className="ion-ios-arrow-forward"></i></Link>
                                </span>
                                    <span class="mr-2">
                                        <Link to="/stories">Blog <i className="ion-ios-arrow-forward"></i></Link>
                                    </span>
                                    <span>Blog Single<i class="ion-ios-arrow-forward"></i></span></p>
                            </div>
                        </div>
                    </div>
                </section>
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
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                    value={this.state.subject}
                                                    placeholder="Website"
                                                    onChange={(event) => this.inputChangeHandler(event)}
                                                    name="subject"
                                                    required={true} />
                                            </div>
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

export default singleBlog;