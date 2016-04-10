import React from 'react';
import { Link } from 'react-router';

const TopNav = ({ activeProject }) => {
  let pathTo = '';
  let styling = {};
  let image = '';
  if (activeProject) {
    pathTo = `/projects/${activeProject}`;
    styling = { backgroundColor: '' };
    image = './client/images/png/power@2x.png';
  } else {
    pathTo = '/';
    styling = { backgroundColor: '' };
    image = './client/images/png/shapes@2x.png';
  }
  return (
    <div className="content-top-nav">
     <div className="btn-group top-nav-btn-group" data-toggle="buttons">

       <label className="btn btn-primary active">
         <input type="radio" name="options" id="option1" autoComplete="off" />
       <Link className="nav-link" to={'/notifications'}>
           <img src="./client/images/png/sound.png"></img>
         </Link>
       </label>

       <label style={styling} className="btn btn-primary activeProj">
         <input type="radio" name="options" id="option2" autoComplete="off" />
         <Link className="nav-link" to={pathTo}>
           {/*<img src={image}></img>*/}
           <img src="./client/images/png/circle.png" />
         </Link>
       </label>

       <label className="btn btn-primary">
         <input type="radio" name="options" id="option3" autoComplete="off" />
         <Link className="nav-link" to={'/settings'}>
           <img src="./client/images/png/gear.png"></img>
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
