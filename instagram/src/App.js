import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.setState({data: dummyData})
  }
  
  render () {
    return (
        <div className="App">
          <SearchBar />
          <PostContainer />
        </div>
    );

  }
  
}

export default App;
