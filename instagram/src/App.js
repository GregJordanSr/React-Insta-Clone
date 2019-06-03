import React, {Component} from 'react';
import './App.css';
import dummyData from './dummyData';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';





class App extends Component {
  
    state = {
      posts : [],
      inputText: '',
    };
    componentDidMount () {
      console.log('Component: App Mounted');
      this.setState({
        posts: dummyData
      })
    }
  render() {
    return (
     <div className="appContainer">
     <SearchBar />
     <PostContainer postData={this.state.posts}/>
     </div>
    )
  }
}

export default App;
