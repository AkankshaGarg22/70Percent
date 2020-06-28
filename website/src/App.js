import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./Components/Home'));
const SeventyPercentRestroCafeHome = React.lazy(() => import('./Components/Home/SeventyPercentRestroCafeHome'));
const BiryaniMansion = React.lazy(() => import('./Components/Home/BiryaniMansion'));
const SeventyPercentDiet = React.lazy(() => import('./Components/Home/SeventyPercentDiet'));
const SeventyPercentMarinations = React.lazy(() => import('./Components/Home/SeventyPercentMarinations'));
const Blog = React.lazy(() => import('./Components/Blog/blog'));
const Contact = React.lazy(() => import('./Components/Pages/Contact'));
const SingleBlog = React.lazy(() => import('./Components/Blog/singleBlog'));
const Menu = React.lazy(() => import('./Components/Pages/Menu'));

window.isOnline = true;
function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div></div>}>
        <Switch>
          <Route exact={true} path="/" name="Home" render={props => <Home {...props} />} />
          <Route exact={true} path="/seventyPercentCafe" name="seventyPercent" render={props => <SeventyPercentRestroCafeHome {...props} />} />
          <Route exact={true} path="/biryaniMansion" name="biryaniMansion" render={props => <BiryaniMansion {...props} />} />
          <Route exact={true} path="/seventyPercentDiet" name="seventyPercentDiet" render={props => <SeventyPercentDiet {...props} />} />
          <Route exact={true} path="/seventyPercentMarinations" name="seventyPercentMarinations" render={props => <SeventyPercentMarinations {...props} />} />
          <Route exact={true} path="/stories" name="blog" render={props => <Blog {...props} />} />
          <Route exact={true} path="/contact" name="contact" render={props => <Contact {...props} />} />
          <Route exact={true} path="/blog" name="blog1" render={props => <SingleBlog {...props} />} />
          <Route exact={true} path="/menu" name="menu" render={props => <Menu {...props} />} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
