import React from 'react';

const ProjButtons = ({ start, stop, restart, remove }) => (
  <div className="btn-group btn-group-sm" role="group" aria-label="Container Controls">
    <button type="button" className="btn btn-secondary">S</button>
    <button type="button" className="btn btn-secondary">P</button>
    <button type="button" className="btn btn-secondary">RR</button>
    <div className="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

    </button>
    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a className="dropdown-item" href="#">Dropdown link</a>
      <a className="dropdown-item" href="#">Dropdown link</a>
    </div>
  </div>
  </div>


);

ProjButtons.propTypes = {
  start: React.PropTypes.func,
  stop: React.PropTypes.func,
  restart: React.PropTypes.func,
  remove: React.PropTypes.func,
};

export default ProjButtons;


{/*<div className="btn-group container-player-btns" data-toggle="buttons">
  <label className="btn btn-primary active">
    <input type="radio" name="options" id="option1" autoComplete="off" />
      <img src="./client/images/png/arrow@2x.png" onClick={start}></img>
  </label>
  <label className="btn btn-primary">
    <input type="radio" name="options" id="option2" autoComplete="off" />
      <img src="./client/images/png/shapes@2x.png" onClick={stop}></img>
  </label>
  <label className="btn btn-primary">
    <input type="radio" name="options" id="option3" autoComplete="off" />
      <img src="./client/images/png/arrows@2x.png" onClick={restart}></img>
  </label>
  <label className="btn btn-primary">
    <input type="radio" name="options" id="option3" autoComplete="off" />
      <img src="./client/images/png/shapes@2x.png" onClick={remove}></img>
  </label>
</div>*/}
