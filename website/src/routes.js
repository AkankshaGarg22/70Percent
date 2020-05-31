import React from 'react';

const SeventyPercentRestroCafeHome = React.lazy(() => import('./Components/SeventyPercentRestroCafeHome'));
const BiryaniMansion = React.lazy(() => import('./Components/BiryaniMansion'));

/**
 * All the routes are rendered in this section
 */
const routes = [
  { path: "/seventyPercent", exact: true, name: "Cafe Home", component: SeventyPercentRestroCafeHome },
  { path: "/biryaniMansion", exact: true, name: "Biryani Mansion Home", component: BiryaniMansion },

];

export default routes;