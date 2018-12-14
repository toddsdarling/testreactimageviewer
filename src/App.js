import React, { Component } from 'react';
import './App.css';

import TestViewer from './testViewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Here is our test image viewer
          </p>
          
          <TestViewer id="ocd-viewer" type="legacy-image-pyramid" image="./img/page-5.tif" />


        </header>
      </div>
    );
  }
}

export default App;
