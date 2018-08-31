import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Chat from './Chat.js';



class App extends Component {
  // constructor(props)
  // {
  //   super(props);
  //   console.log("constructor");
    
  // }
  // componentWillMount()
  //   {
  //     console.log("Component Will Mount");
  //   }

  // componentDidMount()
  //   {
  //     console.log("Component Did Mount");
  //   }
  render() {
    return (
     <BrowserRouter>
     <div>
         <Route  exact path="/" component={Home} />
         <Route exact path="/Profile/:id" component={Profile} />
         <Route  exact path="/Chat" component={Chat} />
         

     </div>
     </BrowserRouter>
    );
  }
}

export default App;
/// 
