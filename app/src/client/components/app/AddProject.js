import React from 'react';
import { remote } from 'electron';

const AddProject = ({ addNewProject }) => {
  let projectName;
  let projectPath;

  const popFileSelector = () => {
    projectPath = remote.dialog
      .showOpenDialog({ properties: ['openDirectory', 'createDirectory'] })[0];
  };

  const projNameHandler = event => { projectName = event.target.value; };

  const submit = () => addNewProject(projectPath, projectName);

  return (
      <div className="full-page">
        <div className="settings-content">
          <h3>Create a Docker project</h3>
          <p>
            Creating a project is easy, give your Docker project a name, then create a folder.
          </p>
          <div className="col-xs-12 form-input-spacing">
            <input
              className="form-control form-control-lg border-bottom-input"
              type="text"
              placeholder="Enter Name"
              onChange={projNameHandler}
              />
          </div>
          <div className="col-xs-12 form-input-spacing">
            <label className="file width-12">
              <input type="file" id="file" />
              <span className="file-custom border-bottom-input" onClick={popFileSelector}></span>
            </label>
          </div>
          <div className="col-xs-6">
            Cancel
          </div>
          <div className="col-xs-6">
            <button className="btn btn-primary-outline btn-block" onClick={submit}>
              Add
            </button>
          </div>
        </div>

      </div>

  );
};

AddProject.propTypes = {
  addNewProject: React.PropTypes.func,
};

export default AddProject;
