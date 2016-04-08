import React from 'react';
import R from 'ramda';
import Container from './assets/Container';

const ProjectDetail = ({ projects, params, delContainer }) => {
  const proj = projects[params.uuid];
  const server = R.toPairs(proj.containers)
    .filter(cont => cont[1].server)
    .map(cont =>
      <Container
        key={cont[0]}
        details={cont[1]}
        uuid={params.uuid}
        delContainer={delContainer}
      />
    );

  const dbs = R.toPairs(proj.containers)
    .filter(cont => !cont[1].server)
    .map(cont =>
      <Container
        key={cont[0]}
        details={cont[1]}
        uuid={params.uuid}
        delContainer={delContainer}
      />
    );
  return (
    <div className="project-wrapper">
      <div className="col-xs-12" id="servers">
        <h5 className="section-title" >Servers</h5>
      </div>
      {server}
      <div className="col-xs-12" id="databases">
        <h5 className="section-title" >Databases</h5>
      </div>
      {dbs}
    </div>
  );
};

ProjectDetail.propTypes = {
  projects: React.PropTypes.object,
  params: React.PropTypes.object,
  delContainer: React.PropTypes.func,
};

export default ProjectDetail;
