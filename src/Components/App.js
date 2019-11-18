import React from 'react';
import './App.css';

class App extends React.Component {
  // constructor
  
  

  render() {
    return (
      <div>
        <h1>Comic Of The Day</h1>
        <h2>{new Date().toLocaleDateString()}</h2>
        {/* <Image /> */}
        <div className="Buttons">
          {/*<NewImage /> */}
          {/*<SaveImage /> */}
        </div>
      </div>
    )
  }
}

export default App;
