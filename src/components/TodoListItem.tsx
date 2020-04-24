import React, { useState } from 'react';
import "../styles/main.scss"


interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({todo, toggleTodo}) => {

    return(
        <div>
            <li>
                <label className={todo.complete ? "complete" : undefined}>
			    	<input type="checkbox" checked={todo.complete} onChange={() => toggleTodo (todo)}/>
                    {todo.text}
                </label>
            </li>
        </div>
    )
}

export default TodoListItem;