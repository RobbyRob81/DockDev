import React from 'react';
import ContainerControls from './ProjButtons';
import EditingNavigation from './projNavLinks';

const ServerDetailContainer = ({ details, delContainer, uuid, logo }) => {
  const clickDelContainer = () => delContainer(uuid, details);
  return (
    <div>
      <div className="card-deck-wrapper">
        <div className="card-deck">
          <div className="card">
            <div className="card-header">
              Project Server
              <div className="btn-group">
                <button type="button" className="btn btn-info-outline dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Add</a>
                  <a className="dropdown-item" href="#">Deploy</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Delete</a>
                </div>
              </div>
            </div>
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
               <ContainerControls />
              </li>
            </ul>
            <div className="card-block">
              <EditingNavigation />
            </div>
          </div>
          <div className="card server-configuration">
              <div className="card-header">
                Server Details
              </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <input className="form-control form-control-lg" type="text" placeholder="PORT http:168.158.0.1:3000"/>
              </li>
              <li className="list-group-item">
                <p className="card-text">
                  To start your project you only need to press  <kbd>Play</kbd>     button that is located to the left under the server logo.Last, visit the above URL to with your preferred browser to see your project.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

let controllerRow = {"padding":0};

ServerDetailContainer.propTypes = {
  details: React.PropTypes.object,
  delContainer: React.PropTypes.func,
  uuid: React.PropTypes.string,
};

export default ServerDetailContainer;


{/*<div className="card project-server card-wrap">
  <div className="card">
    <img className="card-img-top" src={logo} alt="Card image cap"/>
    <div className="card-block">
      <h4 className="card-title">Card title</h4>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<div className="card-wrap details">
  <div className="card">
    <div className="card-header">
      <h5><span>PORT:</span> <span>http:168.128.0:3000</span></h5>
    </div>
    <div className="detail-body">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          To start your project you only need to press  <kbd>Play</kbd>     button that is located to the left under the server logo.Last, visit the above URL to with your preferred browser to see your project.

        </li>
      </ul>
      <div className="card-block">
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>

  </div>
</div>*/}


{/*<img className="card-img-top" src={logo} alt="Card image cap" />
<ul className="list-group list-group-flush">
  <li className="list-group-item">
    <ContainerControls />
  </li>
</ul>
<div className="card-block">
  <a href="#" className="card-link">Card link</a>
  <a href="#" className="card-link">Another link</a>
</div>*/}


{/*<div className="card-wrap project-server">
  <div className="card">
    <img src={ logo } className="card-img"/>
    <div className="row" style={controllerRow}>
      <ContainerControls />
    </div>
  </div>
</div>*/}
