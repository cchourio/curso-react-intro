import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
import React from 'react'
    
const defaultTodos = [
    {text: 'Task 1', completed: true},
    {text: 'Task 2', completed: false},
    {text: 'Task 3', completed: false},
    {text: 'Task 4', completed: false}
]

function App() {
  return (
    <>
        <TodoCounter completed={3} total={5} />
        <TodoSearch />
        
        <TodoList>
            {defaultTodos.map(todo => {
                return(
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
            )
            })}
        </TodoList>
        
        <CreateTodoButton />
    </>
  );
}

export default App;
