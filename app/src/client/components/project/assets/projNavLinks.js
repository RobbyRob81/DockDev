import React from 'react';
import { Link } from 'react-router';

const projNavLinks = ({ uuid }) => (
  <div className="btn-group">
    <button type="button" className="btn btn-info-outline dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span className="sr-only">Toggle Dropdown</span>
    </button>
    <div className="dropdown-menu">
      <ul>
        <li>
          <Link className="nav-link" to={`/projects/${uuid}`}>Home</Link>
        </li>
        <li>
          <Link className="nav-link" to={`/projects/${uuid}/container`}>Add</Link>

        </li>
        <li>
          <Link className="nav-link" to={`/projects/${uuid}/deploy`}>Deploy</Link>

        </li>
      </ul>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Delete</a>
    </div>
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
