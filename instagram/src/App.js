import React from 'react';
import './App.css';
import dummyData from './dummy-data';

class App extends React.Component  {
  constructor () {
    super();
    this.state ={ 
      comments: dummyData
    };
  }


  render() {
    return (
      <div>
        <h1>Insta-Clone</h1>
      </div>
    )
  }
}

export default App;
