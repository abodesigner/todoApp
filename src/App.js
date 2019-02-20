import React, { Component } from 'react';
import './App.css';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';
class App extends Component {
      state = {
        items : [
          {id:1, name:'Hamza', age:32},
          {id:2, name:'Amer',  age:22},
          {id:3, name:'Eman',  age:12}
        ]
      }

      addItem = (item) => {
        item.id = Math.random();
        const items = this.state.items;
        items.push(item);
        this.setState({
          items : items
        })
      }

      deleteItem = id => {
        const newItems = this.state.items.filter(item => item.id !== id);
        this.setState({
          items : newItems
        })
      }

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Welcome todolist App</h1>
        <TodoItems items = {this.state.items} myProps = {this.deleteItem} />
        <AddItem addItem = {this.addItem}/>
      </div>
    );
  }
}

export default App;
