(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[6],{108:function(e,a,t){"use strict";t.r(a);var l=t(37),n=t(29),r=t(30),i=t(32),s=t(31),c=t(0),m=t.n(c),o=t(36),u=t(33),d=t(38),p=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={feedback:"",formSubmitted:!1,name:"",email:"",phone:"",subject:"",formEmailSent:!1,activeTab:"home"},l}return Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"inputChangeHandler",value:function(e){e.preventDefault(),this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),""!==this.state.message&&""!==this.state.subject&&""!==this.state.phone&&""!==this.state.name&&""!==this.state.email&&(this.sendFeedback("location_enquiry",this.state.email,"70percent.restro.cafe@gmail.com","user_MMbdlqhIyzTBljTFWsRab"),this.setState({formSubmitted:!0}))}},{key:"sendFeedback",value:function(e,a,t,l,n){var r=this;window.emailjs.send("gmail",e,{name:this.state.name,subject:this.state.subject,email:this.state.email,message:this.state.message},n).then((function(e){console.log("response sent"),r.setState({formEmailSent:!0})})).catch((function(e){return console.error("Failed to send feedback. Error: ",e)}))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"homePage"},m.a.createElement(u.a,{history:this.props.history}),m.a.createElement(d.a,{pageName:"Blog",value:"Blog Single",secondValue:"Blog"}),m.a.createElement("section",{className:"ftco-section"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-8 "},m.a.createElement("h2",{className:"mb-3"},"A small river named Duden flows by their place and supplies it with the necessary regelialia."),m.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora."),m.a.createElement("p",null,"Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!"),m.a.createElement("p",null,m.a.createElement("img",{src:"images/image_2.jpg",alt:"",className:"img-fluid"})),m.a.createElement("h2",{className:"mb-3 mt-5"},"#2. Creative WordPress Themes"),m.a.createElement("p",null,"Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci."),m.a.createElement("p",null,"Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores."),m.a.createElement("p",null,"Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea."),m.a.createElement("p",null,"Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!"),m.a.createElement("p",null,"Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?"),m.a.createElement("div",{className:"tag-widget post-tag-container mb-5 mt-5"},m.a.createElement("div",{className:"tagcloud"},m.a.createElement("a",{href:"#",className:"tag-cloud-link"},"Food"),m.a.createElement("a",{href:"#",className:"tag-cloud-link"},"Wine"),m.a.createElement("a",{href:"#",className:"tag-cloud-link"},"Drink"),m.a.createElement("a",{href:"#",className:"tag-cloud-link"},"Dish"))),m.a.createElement("div",{className:"about-author d-flex p-4 bg-light"},m.a.createElement("div",{className:"bio mr-5"},m.a.createElement("img",{src:"images/person_1.jpg",alt:"Image placeholder",className:"img-fluid mb-4"})),m.a.createElement("div",{className:"desc"},m.a.createElement("h3",null,"George Washington"),m.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!"))),m.a.createElement("div",{className:"pt-5 mt-5"},m.a.createElement("h3",{className:"mb-5 h4 font-weight-bold p-4 bg-light"},"07 Feedbacks"),m.a.createElement("ul",{className:"comment-list"},m.a.createElement("li",{className:"comment"},m.a.createElement("div",{className:"vcard bio"},m.a.createElement("img",{src:"images/person_1.jpg",alt:"Image placeholder"})),m.a.createElement("div",{className:"comment-body"},m.a.createElement("h3",null,"John Doe"),m.a.createElement("div",{className:"meta mb-2"},"Sept. 07, 2019 at 2:21pm"),m.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"),m.a.createElement("p",null,m.a.createElement("a",{href:"#",className:"reply"},"Reply")))),m.a.createElement("li",{className:"comment"},m.a.createElement("div",{className:"vcard bio"},m.a.createElement("img",{src:"images/person_1.jpg",alt:"Image placeholder"})),m.a.createElement("div",{className:"comment-body"},m.a.createElement("h3",null,"John Doe"),m.a.createElement("div",{className:"meta mb-2"},"Sept. 07, 2019 at 2:21pm"),m.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"),m.a.createElement("p",null,m.a.createElement("a",{href:"#",className:"reply"},"Reply"))),m.a.createElement("ul",{className:"children"},m.a.createElement("li",{className:"comment"},m.a.createElement("div",{className:"vcard bio"},m.a.createElement("img",{src:"images/person_1.jpg",alt:"Image placeholder"})),m.a.createElement("div",{className:"comment-body"},m.a.createElement("h3",null,"John Doe"),m.a.createElement("div",{className:"meta mb-2"},"Sept. 07, 2019 at 2:21pm"),m.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"),m.a.createElement("p",null,m.a.createElement("a",{href:"#",className:"reply"},"Reply"))),m.a.createElement("ul",{className:"children"},m.a.createElement("li",{className:"comment"},m.a.createElement("div",{className:"vcard bio"},m.a.createElement("img",{src:"images/person_1.jpg",alt:"Image placeholder"})),m.a.createElement("div",{className:"comment-body"},m.a.createElement("h3",null,"John Doe"),m.a.createElement("div",{className:"meta mb-2"},"Sept. 07, 2019 at 2:21pm"),m.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"),m.a.createElement("p",null,m.a.createElement("a",{href:"#",className:"reply"},"Reply"))),m.a.createElement("ul",{className:"children"},m.a.createElement("li",{className:"comment"},m.a.createElement("div",{className:"vcard bio"},m.a.createElement("img",{src:"images/person_1.jpg",alt:"Image placeholder"})),m.a.createElement("div",{className:"comment-body"},m.a.createElement("h3",null,"John Doe"),m.a.createElement("div",{className:"meta mb-2"},"Sept. 07, 2019 at 2:21pm"),m.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"),m.a.createElement("p",null,m.a.createElement("a",{href:"#",className:"reply"},"Reply")))))))))),m.a.createElement("li",{className:"comment"},m.a.createElement("div",{className:"vcard bio"},m.a.createElement("img",{src:"images/person_1.jpg",alt:"Image placeholder"})),m.a.createElement("div",{className:"comment-body"},m.a.createElement("h3",null,"John Doe"),m.a.createElement("div",{className:"meta mb-2"},"Sept. 07, 2019 at 2:21pm"),m.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"),m.a.createElement("p",null,m.a.createElement("a",{href:"#",className:"reply"},"Reply"))))),m.a.createElement("div",{className:"comment-form-wrap pt-5"},m.a.createElement("h3",{className:"mb-5 h4 font-weight-bold p-4 bg-light"},"Leave a comment"),m.a.createElement("form",null,m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{type:"text",className:"form-control",placeholder:"Your Name",onChange:function(a){return e.inputChangeHandler(a)},name:"name",required:!0})),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{type:"email",className:"form-control",value:this.state.email,placeholder:"Your Email",onChange:function(a){return e.inputChangeHandler(a)},name:"email",required:!0})),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{type:"text",className:"form-control",value:this.state.phone,placeholder:"Your Phone",onChange:function(a){return e.inputChangeHandler(a)},name:"phone",required:!0})),m.a.createElement("div",{className:"form-group"},m.a.createElement("textarea",{name:"message",id:"message",cols:"30",rows:"7",className:"form-control",placeholder:"Message",onChange:function(a){return e.inputChangeHandler(a)}})),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{type:"submit",defaultValue:"Submit",className:"btn btn-primary py-3 px-5",onClick:function(a){return e.handleSubmit(a)}}))))))," ",m.a.createElement("div",{className:"col-lg-4 sidebar "},m.a.createElement("div",{className:"sidebar-box"},m.a.createElement("form",{action:"#",className:"search-form"},m.a.createElement("div",{className:"form-group"},m.a.createElement("span",{className:"icon icon-search"}),m.a.createElement("input",{type:"text",className:"form-control",placeholder:"Type a keyword and hit enter"})))),m.a.createElement("div",{className:"sidebar-box "},m.a.createElement("h3",null,"Category"),m.a.createElement("ul",{className:"categories"},m.a.createElement("li",null,m.a.createElement("a",{href:"#"},"Breakfast ",m.a.createElement("span",null,"(6)"))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},"Lunch ",m.a.createElement("span",null,"(8)"))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},"Dinner ",m.a.createElement("span",null,"(2)"))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},"Desserts ",m.a.createElement("span",null,"(2)"))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},"Drinks ",m.a.createElement("span",null,"(2)"))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},"Wine ",m.a.createElement("span",null,"(2)"))))),m.a.createElement("div",{className:"sidebar-box "},m.a.createElement("h3",null,"Popular Articles"),m.a.createElement("div",{className:"block-21 mb-4 d-flex"},m.a.createElement("a",{className:"blog-img mr-4",style:{backgroundImage:"url(images/image_1.jpg)"}}),m.a.createElement("div",{className:"text"},m.a.createElement("h3",{className:"heading"},m.a.createElement("a",{href:"#"},"Even the all-powerful Pointing has no control about the blind texts")),m.a.createElement("div",{className:"meta"},m.a.createElement("div",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"icon-calendar"})," June 25, 2019")),m.a.createElement("div",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"icon-person"})," Dave Lewis")),m.a.createElement("div",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"icon-chat"})," 19"))))),m.a.createElement("div",{className:"block-21 mb-4 d-flex"},m.a.createElement("a",{className:"blog-img mr-4",style:{backgroundImage:"url(images/image_2.jpg)"}}),m.a.createElement("div",{className:"text"},m.a.createElement("h3",{className:"heading"},m.a.createElement("a",{href:"#"},"Even the all-powerful Pointing has no control about the blind texts")),m.a.createElement("div",{className:"meta"},m.a.createElement("div",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"icon-calendar"})," June 25, 2019")),m.a.createElement("div",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"icon-person"})," Dave Lewis")),m.a.createElement("div",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"icon-chat"})," 19"))))),m.a.createElement("div",{className:"block-21 mb-4 d-flex"},m.a.createElement("a",{className:"blog-img mr-4",style:{backgroundImage:"url(images/image_3.jpg)"}}),m.a.createElement("div",{className:"text"},m.a.createElement("h3",{className:"heading"},m.a.createElement("a",{href:"#"},"Even the all-powerful Pointing has no control about the blind texts")),m.a.createElement("div",{className:"meta"},m.a.createElement("div",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"icon-calendar"})," June 25, 2019")),m.a.createElement("div",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"icon-person"})," Dave Lewis")),m.a.createElement("div",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"icon-chat"})," 19")))))),m.a.createElement("div",{className:"sidebar-box "},m.a.createElement("h3",null,"Tag Cloud"),m.a.createElement("ul",{className:"tagcloud m-0 p-0"},m.a.createElement("a",{href:"#",className:"tag-cloud-link"},"Dish"),m.a.createElement("a",{href:"#",className:"tag-cloud-link"},"Food"),m.a.createElement("a",{href:"#",className:"tag-cloud-link"},"Lunch"),m.a.createElement("a",{href:"#",className:"tag-cloud-link"},"Menu"),m.a.createElement("a",{href:"#",className:"tag-cloud-link"},"Dessert"),m.a.createElement("a",{href:"#",className:"tag-cloud-link"},"Drinks"),m.a.createElement("a",{href:"#",className:"tag-cloud-link"},"Sweets"))),m.a.createElement("div",{className:"sidebar-box "},m.a.createElement("h3",null,"Archives"),m.a.createElement("ul",{className:"categories"},m.a.createElement("li",null,m.a.createElement("a",{href:"#"},"January 2019 ",m.a.createElement("span",null,"(20)"))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},"December 2018 ",m.a.createElement("span",null,"(30)"))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},"Novemmber 2018 ",m.a.createElement("span",null,"(20)"))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},"September 2018 ",m.a.createElement("span",null,"(6)"))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},"August 2018 ",m.a.createElement("span",null,"(8)"))))),m.a.createElement("div",{className:"sidebar-box "},m.a.createElement("h3",null,"Paragraph"),m.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!")))))),m.a.createElement(o.a,null))}}]),t}(c.Component);a.default=p},29:function(e,a,t){"use strict";function l(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}t.d(a,"a",(function(){return l}))},30:function(e,a,t){"use strict";function l(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function n(e,a,t){return a&&l(e.prototype,a),t&&l(e,t),e}t.d(a,"a",(function(){return n}))},31:function(e,a,t){"use strict";function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,a){return!a||"object"!==r(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function s(e){return function(){var a,t=l(e);if(n()){var r=l(this).constructor;a=Reflect.construct(t,arguments,r)}else a=t.apply(this,arguments);return i(this,a)}}t.d(a,"a",(function(){return s}))},32:function(e,a,t){"use strict";function l(e,a){return(l=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function n(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&l(e,a)}t.d(a,"a",(function(){return n}))},33:function(e,a,t){"use strict";var l=t(29),n=t(30),r=t(32),i=t(31),s=t(0),c=t.n(s),m=t(11),o=t(34),u=t(35),d=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).handleScroll=function(e){window.pageYOffset<200?n.setState({backgroundLogo:o,logoWidth:"180px",logoHeight:"150"}):window.pageYOffset>200&&n.setState({backgroundLogo:u,logoWidth:"100px",logoHeight:"80"})},n.state={backgroundLogo:"/images/70LogoWhite.png",logoWidth:"180px",logoHeight:"150px"},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll,!0)}},{key:"tabClickHandler",value:function(e,a){e.preventDefault(),this.setState({activeTab:a}),"home"===a?this.props.history.push("/"):"stories"===a?this.props.history.push("/stories"):"contact"===a?this.props.history.push("/contact"):"menu"===a&&this.props.history.push("/menu")}},{key:"render",value:function(){var e=this;return c.a.createElement("header",null,c.a.createElement("div",{className:"py-1 bg-black top"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row no-gutters d-flex align-items-start align-items-center px-md-0"},c.a.createElement("div",{className:"col-lg-12 d-block"},c.a.createElement("div",{className:"row d-flex"},c.a.createElement("div",{className:"col-md pr-4 d-flex topper align-items-center"},c.a.createElement("div",{className:"icon mr-2 d-flex justify-content-center align-items-center"},c.a.createElement("span",{className:"icon-phone2"})),c.a.createElement("span",{className:"text"},"+ 1235 2355 98")),c.a.createElement("div",{className:"col-md pr-4 d-flex topper align-items-center"},c.a.createElement("div",{className:"icon mr-2 d-flex justify-content-center align-items-center"},c.a.createElement("span",{className:"icon-paper-plane"})),c.a.createElement("span",{className:"text"},"youremail@email.com")),c.a.createElement("div",{className:"col-md-5 pr-4 d-flex topper align-items-center text-lg-right justify-content-end"},c.a.createElement("p",{className:"mb-0 register-link"},c.a.createElement("span",null,"Open hours:")," ",c.a.createElement("span",null,"Monday - Sunday")," ",c.a.createElement("span",null,"8:00AM - 9:00PM")))))))),c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light",id:"ftco-navbar"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{className:"navbar-brand",href:"/"},c.a.createElement("div",{className:"logo img"}),c.a.createElement("img",{src:this.state.backgroundLogo,alt:"Logo",width:this.state.logoWidth,height:this.state.logoHeight})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"ftco-nav"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item active",onClick:function(a){return e.tabClickHandler(a,"home")}},c.a.createElement("a",{className:"nav-link ".concat("home"===this.state.activeTab?"active":""),id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"false"},"Home")),c.a.createElement("li",{class:"dropdown nav-item"},c.a.createElement("a",{href:"#",class:"dropdown-toggle-nav nav-link","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Brands ",c.a.createElement("span",{class:"caret"})),c.a.createElement("ul",{class:"dropdown-menu"},c.a.createElement("li",{className:"dropdown-item"},c.a.createElement(m.b,{to:"/seventyPercentCafe"},"70 Percent Restro Cafe")),c.a.createElement("li",{className:"dropdown-item"},c.a.createElement(m.b,{to:"/seventyPercentMarinations"},"70 Percent Marinations")),c.a.createElement("li",{className:"dropdown-item"},c.a.createElement(m.b,{to:"/biryaniMansion"},"Biryani Mansion")),c.a.createElement("li",{className:"dropdown-item"},c.a.createElement(m.b,{to:"/seventyPercentDiet"},"70 Percent Diet")))),c.a.createElement("li",{className:"nav-item",onClick:function(a){return e.tabClickHandler(a,"stories")}},c.a.createElement("a",{className:"nav-link ".concat("stories"===this.state.activeTab?"active":""),id:"stories-tab","data-toggle":"tab",href:"#stories",role:"tab","aria-controls":"stories","aria-selected":"false"},"Stories")),c.a.createElement("li",{className:"nav-item",onClick:function(a){return e.tabClickHandler(a,"contact")}},c.a.createElement("a",{className:"nav-link ".concat("contact"===this.state.activeTab?"active":""),id:"contact-tab","data-toggle":"tab",href:"#contact",role:"tab","aria-controls":"contact","aria-selected":"false"},"Contact")),c.a.createElement("li",{className:"nav-item cta",onClick:function(a){return e.tabClickHandler(a,"menu")}},c.a.createElement("a",{className:"nav-link ".concat("menu"===this.state.activeTab?"active":""),id:"menu-tab","data-toggle":"tab",href:"#menu",role:"tab","aria-controls":"menu","aria-selected":"false"},"Menu")))))))}}]),t}(s.Component);a.a=d},34:function(e,a,t){e.exports=t.p+"static/media/70LogoWhite.73d87158.png"},35:function(e,a,t){e.exports=t.p+"static/media/logo.4fd7794a.png"},36:function(e,a,t){"use strict";var l=t(29),n=t(30),r=t(32),i=t(31),s=t(0),c=t.n(s),m=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("footer",{className:"ftco-footer ftco-bg-dark ftco-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row mb-5"},c.a.createElement("div",{className:"col-md-6 col-lg-3"},c.a.createElement("div",{className:"ftco-footer-widget mb-4"},c.a.createElement("h2",{className:"ftco-heading-2"},"Feliciano"),c.a.createElement("p",null,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."),c.a.createElement("ul",{className:"ftco-footer-social list-unstyled float-md-left float-lft mt-3"},c.a.createElement("li",null,c.a.createElement("a",{href:"#"},c.a.createElement("span",{className:"icon-twitter"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},c.a.createElement("span",{className:"icon-facebook"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},c.a.createElement("span",{className:"icon-instagram"})))))),c.a.createElement("div",{className:"col-md-6 col-lg-3"},c.a.createElement("div",{className:"ftco-footer-widget mb-4"},c.a.createElement("h2",{className:"ftco-heading-2"},"Open Hours"),c.a.createElement("ul",{className:"list-unstyled open-hours"},c.a.createElement("li",{className:"d-flex"},c.a.createElement("span",null,"Monday"),c.a.createElement("span",null,"9:00 - 24:00")),c.a.createElement("li",{className:"d-flex"},c.a.createElement("span",null,"Tuesday"),c.a.createElement("span",null,"9:00 - 24:00")),c.a.createElement("li",{className:"d-flex"},c.a.createElement("span",null,"Wednesday"),c.a.createElement("span",null,"9:00 - 24:00")),c.a.createElement("li",{className:"d-flex"},c.a.createElement("span",null,"Thursday"),c.a.createElement("span",null,"9:00 - 24:00")),c.a.createElement("li",{className:"d-flex"},c.a.createElement("span",null,"Friday"),c.a.createElement("span",null,"9:00 - 02:00")),c.a.createElement("li",{className:"d-flex"},c.a.createElement("span",null,"Saturday"),c.a.createElement("span",null,"9:00 - 02:00")),c.a.createElement("li",{className:"d-flex"},c.a.createElement("span",null,"Sunday"),c.a.createElement("span",null," 9:00 - 02:00"))))),c.a.createElement("div",{className:"col-md-6 col-lg-3"},c.a.createElement("div",{className:"ftco-footer-widget mb-4"},c.a.createElement("h2",{className:"ftco-heading-2"},"Instagram"),c.a.createElement("div",{className:"thumb d-sm-flex"},c.a.createElement("a",{href:"#",className:"thumb-menu img",style:{backgroundImage:"url(images/insta-1.jpg)"}}),c.a.createElement("a",{href:"#",className:"thumb-menu img",style:{backgroundImage:"url(images/insta-2.jpg)"}}),c.a.createElement("a",{href:"#",className:"thumb-menu img",style:{backgroundImage:"url(images/insta-3.jpg)"}})),c.a.createElement("div",{className:"thumb d-flex"},c.a.createElement("a",{href:"#",className:"thumb-menu img",style:{backgroundImage:"url(images/insta-4.jpg)"}}),c.a.createElement("a",{href:"#",className:"thumb-menu img",style:{backgroundImage:"url(images/insta-5.jpg)"}}),c.a.createElement("a",{href:"#",className:"thumb-menu img",style:{backgroundImage:"url(images/insta-6.jpg)"}})))),c.a.createElement("div",{className:"col-md-6 col-lg-3"},c.a.createElement("div",{className:"ftco-footer-widget mb-4"},c.a.createElement("h2",{className:"ftco-heading-2"},"Newsletter"),c.a.createElement("p",null,"Far far away, behind the word mountains, far from the countries."),c.a.createElement("form",{action:"#",className:"subscribe-form"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control mb-2",placeholder:"Enter phone number"}),c.a.createElement("input",{type:"submit",defaultValue:"Subscribe",className:"form-control submit px-3"})))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("p",null,"Copyright \xa9 All rights reserved | This template is made with ",c.a.createElement("i",{className:"icon-heart","aria-hidden":"true"})," by ",c.a.createElement("a",{href:"https://colorlib.com",target:"_blank"},"Colorlib"))))))}}]),t}(s.Component);a.a=m},37:function(e,a,t){"use strict";function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return l}))},38:function(e,a,t){"use strict";var l=t(29),n=t(30),r=t(32),i=t(31),s=t(0),c=t.n(s),m=t(11),o=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("section",{className:"hero-wrap hero-wrap-2"},c.a.createElement("img",{src:"images/bg_3.jpg",style:{dataStellarBackgroundRatio:"0.5",height:"100%",width:"100%"}}),c.a.createElement("div",{className:"overlay"}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row no-gutters slider-text align-items-end justify-content-center"},c.a.createElement("div",{className:"col-md-9 text-center mb-4"},c.a.createElement("h1",{className:"mb-2 bread"},this.props.pageName),c.a.createElement("p",{className:"breadcrumbs"},c.a.createElement("span",{className:"mr-2"},c.a.createElement(m.b,{to:"/"},"Home ",c.a.createElement("i",{className:"ion-ios-arrow-forward"})))," ",""!==this.props.secondValue?c.a.createElement("span",{class:"mr-2"},c.a.createElement(m.b,{to:"/stories"},"Blog ",c.a.createElement("i",{className:"ion-ios-arrow-forward"}))):null,c.a.createElement("span",null,this.props.value,c.a.createElement("i",{className:"ion-ios-arrow-forward"})))))))}}]),t}(s.Component);a.a=o}}]);
//# sourceMappingURL=6.5070e728.chunk.js.map