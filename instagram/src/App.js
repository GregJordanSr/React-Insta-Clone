import React, {Component} from 'react';
import dummyData from './dummyData';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  render () {
    return (
      <div>{dummyData.map((user) => {
        return <PostContainer user={user}/>
      })}
      </div>
    )

  }
   
}




export default App;
