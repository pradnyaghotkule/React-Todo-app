import React from 'react';

    const TodoAddComponent = (props) => {
        return(
            <li>
                <div className='div-newTodo'>
                    <input type="textbox" id="newTodo" placeholder='Enter New Todo'
                     value={props.currentTodo} onChange={props.updateTodo}/>
                    <button id="newTodoBtn" title="Add Todo" className='btn-newTodo'
                        name="Add Todo" onClick={props.addTodo}>
                        Add Todo
                        </button>

                </div>
            </li>
        );
    }

export default TodoAddComponent;