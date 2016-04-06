import React from 'react';
import ProjectLinks from './leftNavComp/ProjectLinks';
import NavLink from './leftNavComp/NavLink';

const LeftNav = ({ projects, exampleClick }) => (
  <ul role="nav" id="menu" className="nav">
    <li className="search-wrapper">
      {/* <input className="main-search-input"></input>*/}
        {/* <span className="input-group-addon">
          <img src="./client/images/png/search.png"></img>
        </span>*/}
    </li>
    <li className="nav-item proj-anchor">
      <NavLink to="/" onlyActiveOnIndex>
        <label onClick={exampleClick}>
          Projects
        </label>
      </NavLink>
    </li>
    <li className="add-proj-wrapper">
      <NavLink to="/addProject" className="add-proj-icon">
        <svg className="add-project-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="-2 -2 20 20" aria-labelledby="title">
           <title id="title">Add Project Icon</title>
         <path className="b" d="M7.508,0a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,7.508,0Zm0,13.608A6.108,6.108,0,1,1,13.617,7.5,6.115,6.115,0,0,1,7.508,13.608Z" transform="translate(-0.008)"/><path className="b" d="M76.9,72.811H74.09v-2.8a.637.637,0,1,0-1.275,0v2.8H70.01a.637.637,0,0,0,0,1.275h2.8v2.805a.638.638,0,0,0,1.275,0V74.086h2.8a.637.637,0,1,0,0-1.275Z" transform="translate(-65.953 -65.949)"/>
       </svg>
      </NavLink>
    </li>
    <ProjectLinks projects={projects} />
  </ul>
);

LeftNav.propTypes = {
  projects: React.PropTypes.object,
  exampleClick: React.PropTypes.func,
};

export default LeftNav;
