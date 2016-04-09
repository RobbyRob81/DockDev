import React from 'react';

const Container = ({ details, delContainer, uuid, logo }) => {
  const clickDelContainer = () => delContainer(uuid, details);
  return (
    <div className="card-wrap">
      <div className="card">
        <img src={ logo } className="card-img"/>
        <div>
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  details: React.PropTypes.object,
  delContainer: React.PropTypes.func,
  uuid: React.PropTypes.string,
};

export default Container;
