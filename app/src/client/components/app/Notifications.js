import React from 'react';
import {Link} from 'react-router';

// import { remote } from 'electron';

const Notifications = ({ DOToken, updateToken }) => (
  <div className="full-page notification-full-page">
    <div className="notification-content">
      <p>
        <a className="btn btn-danger-outline notification-title" data-toggle="collapse" href="#error1" aria-expanded="false" aria-controls="error1">
          <span className="error-title">
          Unable to locate your .docdev config file
          </span>
        </a>

      </p>
      <div className="collapse" id="error1">
        <div className="card card-block">
         <span className="notification-timestamp"> 2:43pm 10/10/16</span>
          <br></br>
          <br></br>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.<br></br>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    </div>
  </div>

);

Notifications.propTypes = {
  updateToken: React.PropTypes.func,
  DOToken: React.PropTypes.string,
};

export default Notifications;
