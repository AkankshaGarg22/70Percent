// import React, { Component, Suspense } from 'react';
// import { Redirect, Route, Switch } from 'react-router-dom';

// // routes config
// import routes from '../routes';

// const Footer = React.lazy(() => import('./Footer'));
// const Header = React.lazy(() => import('./Header'));

// class Layout extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         }
//     }

//     componentDidMount() {

//     }

//     render() {
//         return (
//             <div>
//                 <Suspense fallback={<div></div>}>
//                     <Header />
//                 </Suspense>
//                 <Suspense fallback={<div></div>}>
//                     <Switch>
//                         {routes.map((route, idx) => {
//                             return route.component ? (
//                                 <Route
//                                     key={idx}
//                                     path={route.path}
//                                     exact={route.exact}
//                                     name={route.name}
//                                     render={props => (
//                                         <route.component {...props} />
//                                     )} />
//                             ) : (null);
//                         })}
//                         <Redirect from="/" to="/" />
//                     </Switch>
//                 </Suspense>
//                 <Suspense fallback={<div></div>}>
//                     <Footer />
//                 </Suspense>
//             </div>
//         )
//     }
// }

// export default Layout; 