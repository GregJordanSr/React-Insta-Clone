import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <PostContainer />
    </div>
  );
}

export default App;
