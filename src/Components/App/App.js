import React from 'react';
import './App.css';

import Image from '../Image/Image';

class App extends React.Component {

  

  render() {
    return (
      <div>
        <h1>Comic Of The Day</h1>
        <h2>{new Date().toLocaleDateString()}</h2>
        <div className="ImageContainer">
          <Image />
        </div>
        <div className="Buttons">
          {/*<NewImage /> */}
          {/*<SaveImage /> */}
        </div>
      </div>
    )
  }
}

export default App;
