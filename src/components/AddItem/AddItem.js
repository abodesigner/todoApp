import React, { Component } from 'react'
import './AddItem.css';
class AddItem extends Component {

  state = {
    name : '',
    age  : ''
  }

  handleChange = (e) => {
    this.setState({
     [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(e.target.name.value === '') return;
        this.props.addItem(this.state);
        this.setState({
          name:'',
          age:''
        })
  }


  render() {


    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="name" type="text" id="name" placeholder="name" onChange={this.handleChange} value={this.state.name}/>
          <input className="age" type="number" id="age" placeholder="age" onChange={this.handleChange} value={this.state.age}/>
          <input type="submit" value="add" />
        </form>
      </div>
    )
  }
}

export default AddItem;