import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ReactGA from 'react-ga';
const TRACKING_ID = "G-DSNS523G06"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


// import React from 'react'
// import { withRouter } from 'react-router-dom';
// import ReactGA from 'react-ga';
// const RouteChangeTracker = ({ history }) => {
//   history.listen((location, action) => {
//     ReactGA.set({ page: location.pathname });
//     ReactGA.pageview(location.pathname);
//   });
//   return
//       ;
// };
// export default withRouter(RouteChangeTracker);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

