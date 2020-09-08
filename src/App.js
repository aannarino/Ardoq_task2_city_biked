import React from 'react';

import ViewSwitch from './components/ViewSwitch';
import BodyWrapper from './components/BodyWrapper';

function App() {
  return (
    <div className="App ">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Oslo City Bikes Tracker</h1>
          <p className="lead">This is an app designed to integrate with the Oslo City Bikes API, enjoy!</p>
        </div>
      </div>
      <div className="container fluid">
        <ViewSwitch />
        <BodyWrapper />
      </div>
    </div>
  );
}

export default App;
