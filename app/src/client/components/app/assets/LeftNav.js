import React from 'react';
import ProjectLinks from './ProjectLinks';
import NavLink from './NavLink';

const LeftNav = ({ projects, exampleClick }) => (
  <ul role="nav" id="menu" className="nav">
    <li className="nav-item proj-anchor">
      <NavLink to="/" onlyActiveOnIndex>
        <label onClick={exampleClick}>
          Projects
        </label>
      </NavLink>
    </li>
    <li className="add-proj-wrapper">
      <NavLink to="/addProject" className="add-proj-icon">
        <img src="./client/images/png/Add-01.png"></img>
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
