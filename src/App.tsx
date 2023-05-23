import type { DispatchSetStateAction } from './types/util';
import { Todo } from './types/todo';
import {useState} from 'react';
import Input from "./components/Input";
import TodoList from "./components/TodoList";
function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [selectedTodoIds, setSelectedTodoIds] = useState<Todo['id'][]>([]);
    const handleDeleteTodo = (id:Todo['id']) => {
        setTodos(prevState => {
            const filterTodos = [...prevState].filter(todo => todo.id !== id);
            return filterTodos;
        })
    }
    return (
        <>
            <Input />
            <TodoList todos={todos} searchValue={searchValue} deleteTodo={handleDeleteTodo} setSelectedTodoIds={setSelectedTodoIds}/>
        </>
        
    );
}

export default App;