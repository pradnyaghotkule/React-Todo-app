import React from 'react';


class TodoDisplayComponent extends React.Component{

    render(){
        return(
           <li className='li-todos'>
               <input type='checkbox'
               defaultChecked={this.props.todo.completed}
               onChange={() => {this.props.clickHandler(this.props.index)}}/>
               {this.props.todo.value}
               
               <button id="deleteBtn" onClick={() => {this.props.deleteTodo(this.props.index)}}>X</button>
               
               </li>

        );
    }
}

export default TodoDisplayComponent;