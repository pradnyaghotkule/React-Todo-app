import React, { Component } from 'react';
import './App.css';
import TodoListComponent from './component/TodoListComponent';
import HeaderComponent from './component/HeaderComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title"><HeaderComponent/></h1>
        </div>
        <div className="App-intro">
         <TodoListComponent/>
        </div>
        <div  className="App-footer">
  
        </div>
      </div>
    );
  }
}

export default App;
