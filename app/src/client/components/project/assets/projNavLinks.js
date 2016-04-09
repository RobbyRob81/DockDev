import React from 'react';
import { Link } from 'react-router';

const projNavLinks = ({ uuid }) => (
  <div className="card-block">
      <Link className="nav-link" to={`/projects/${uuid}`}>H</Link>
      <Link className="nav-link" to={`/projects/${uuid}/container`}>+</Link>
      <Link className="nav-link" to={`/projects/${uuid}/deploy`}>Deploy</Link>
  </div>
);

projNavLinks.propTypes = {
  uuid: React.PropTypes.string,
};

export default projNavLinks;


{/*<ul className="nav nav-inline">
  <li className="nav-item">
    <Link className="nav-link" to={`/projects/${uuid}`}>H</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to={`/projects/${uuid}/container`}>+</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to={`/projects/${uuid}/deploy`}>Deploy</Link>
  </li>
</ul>*/}
