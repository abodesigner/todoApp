import React, { Component } from 'react';
import './App.css';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome todolist App</h1>
        <TodoItems />
        <AddItem />
      </div>
    );
  }
}

export default App;
