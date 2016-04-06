import React from 'react';
import { Link } from 'react-router';

const TopNav = ({ activeProject }) => {
  let pathTo = '';
  let styling = {};
  let image = '';
  if (activeProject) {
    pathTo = `/projects/${activeProject}`;
    styling = { fill: 'lightGreen' };
  } else {
    pathTo = '/';
    styling = { fill: 'red' };
  }
  return (
    <div className="content-top-nav">
     <div className="btn-group top-nav-btn-group" data-toggle="buttons">

       <label className="btn btn-primary active">
         <input type="radio" name="options" id="option1" autoComplete="off" />
         <Link className="nav-link" to={'/settings'}>
           <svg className="alert-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="-2 -2 20 20" aria-labelledby="title">
	            <title id="title">Alert Icon</title>
            <path d="M25.405,13.762a.882.882,0,1,1,0-1.248A.885.885,0,0,1,25.405,13.762Zm-1.312,4.445a10.125,10.125,0,0,1-2.344,3.149,5.517,5.517,0,0,0-1.486,3.407l-7.1-7.107a5.513,5.513,0,0,0,3.405-1.486,10.121,10.121,0,0,1,3.147-2.345,3.02,3.02,0,0,1,3.549.833A3.023,3.023,0,0,1,24.093,18.207ZM14.66,23.263a2.086,2.086,0,0,1-.294-2.58l2.876,2.877A2.089,2.089,0,0,1,14.66,23.263ZM26.31,11.609a2.162,2.162,0,0,0-3.637,1.055,4.057,4.057,0,0,0-1.006-.323,4.428,4.428,0,0,0-2.426.284,11.215,11.215,0,0,0-3.585,2.632,5.113,5.113,0,0,1-3.967,1.1.644.644,0,0,0-.558,1.091l2.3,2.3a3.379,3.379,0,0,0,4.731,4.733l2.3,2.3a.644.644,0,0,0,1.09-.559,6.155,6.155,0,0,1,0-1.44,4.127,4.127,0,0,1,1.1-2.528,11.218,11.218,0,0,0,2.632-3.586,4.4,4.4,0,0,0,.284-2.427,4.06,4.06,0,0,0-.323-1.006,2.163,2.163,0,0,0,1.061-3.632h0Z" transform="translate(-10.943 -10.975)"/>
          </svg>
         </Link>
       </label>

       <label style={styling} className="btn btn-primary activeProj">
         <input type="radio" name="options" id="option2" autoComplete="off" />
         <Link className="nav-link" to={pathTo}>
           <svg className="container-status-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="-2 -2 20 20" aria-labelledby="title">
	            <title id="power">Container Status Icon</title>
                <path className="a" d="M-108.2-39.4a7.809,7.809,0,0,1-7.8-7.8,7.809,7.809,0,0,1,7.8-7.8,7.809,7.809,0,0,1,7.8,7.8A7.808,7.808,0,0,1-108.2-39.4Zm0-14.6a6.808,6.808,0,0,0-6.8,6.8,6.808,6.808,0,0,0,6.8,6.8,6.807,6.807,0,0,0,6.8-6.8A6.808,6.808,0,0,0-108.2-54Z" transform="translate(1644.2 -7.035)"/>
            </svg>
         </Link>
       </label>

       <label className="btn btn-primary">
         <input type="radio" name="options" id="option3" autoComplete="off" />
         <Link className="nav-link" to={'/settings'}>
          <img src="client/images/svg/power.svg" alt="Your Logo Alt" onerror="this.src='your-alternative-image.png'" />
         </Link>
       </label>

     </div>
    </div>
  );
};

TopNav.propTypes = {
  activeProject: React.PropTypes.string,
};

export default TopNav;
