import type { DispatchSetStateAction } from './types/util';
import { Todo } from './types/todo';
import {ChangeEvent, useState} from 'react';
import Input from "./components/Input";
import TodoList from "./components/TodoList";
function App() {
    const [todoName, setTodoName] = useState<Todo['name']>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [selectedTodoIds, setSelectedTodoIds] = useState<Todo['id'][]>([]);

    const handleTodoName = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoName(e.target.value);
    }


    const handleDeleteTodo = (id:Todo['id']) => {
        setTodos(prevState => {
            const filterTodos = [...prevState].filter(todo => todo.id !== id);
            return filterTodos;
        })
    }
    return (
        <>
            <Input onChange={handleTodoName} />
            <Input />
            {todoName}
            <TodoList todos={todos} searchValue={searchValue} deleteTodo={handleDeleteTodo} setSelectedTodoIds={setSelectedTodoIds}/>
        </>
        
    );
}

export default App;