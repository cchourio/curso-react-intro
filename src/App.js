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
    {text: 'Task 4', completed: false},
    {text: 'Task 5', completed: true}
]

function App() {
    const [todos, setTodos] = React.useState(defaultTodos);
    const [searchValue, setSearchValue] = React.useState('');

    // Derived states
    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length;

    return (
        <>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
            
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
