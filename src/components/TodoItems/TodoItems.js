import React from 'react';
import './TodoItems.css';

 const TodoItems = (props) => {

     const { items, myProps } = props;

     const length = items.length;

     const listItems = length ? (

      items.map( item => {

        return (
              <div key={item.id}>
                  <span className="name">{item.name}</span>
                  <span className="age">{item.age}</span>
                  <span  className="action icon" onClick={() => myProps(item.id)}>&times;</span>
              </div>
          )

       })
     ) : (
       <p>There is no items to show</p>
     )



  return (
    <div className="listItems">
      <span className="name title">Name</span>
      <span className="age title">Age</span>
      <span className="action title">Action</span>

      {listItems}
    </div>
  )
}

export default TodoItems;
