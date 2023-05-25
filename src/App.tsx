import type { DispatchSetStateAction } from './types/util';
import { Todo } from './types/todo';
import {ChangeEvent, useEffect, useState} from 'react';
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import {v4 as uuidv4} from 'uuid';
function App() {
    const [todoName, setTodoName] = useState<Todo['name']>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [selectedTodoIds, setSelectedTodoIds] = useState<Todo['id'][]>([]);
    const [editedTodoId, seteditedTodoId] = useState<Todo["id"] | undefined>();
    const [editedName, setEditedName] = useState<Todo["name"]>('');


    const handleTodoName = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        setTodoName(value);
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addTodo();
        }
      };

    const handleSearchValue = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(value)
    } 

    const handleEditedName = ((name: Todo["name"]) => {
        setEditedName(name);
    })

    const toggleEditTodo = (id: Todo["id"]) => {
        seteditedTodoId(prevState => (prevState === id ? undefined : id));
    }

    const handleDeleteTodo = (id:Todo['id']) => {
        setTodos(prevState => {
            const filterTodos = [...prevState].filter(todo => todo.id !== id);
            return filterTodos;
        })
    }

    const addTodo = () => {
        setTodos((prevState) => [...prevState, {id: uuidv4(), name: todoName}]);
    }

    const editTodo = () => {
        setTodos((prevState) => {
            return prevState.map(({id, name}) => {
                if (id === editedTodoId) {
                    return {id, name: editedName};
                }
                return {id, name};
            })
        });
        seteditedTodoId(undefined);
        setEditedName('');
    }

    useEffect(() => {
        setTodoName('');
    },[todos])

    return (
        <>
            <Input value={todoName} onChange={handleTodoName} onKeyUp={handleKeyPress}/>
            <button onClick={addTodo}>Todo 추가</button>
            <Input onChange={handleSearchValue}/>
            {todoName}
            <TodoList todos={todos} searchValue={searchValue} deleteTodo={handleDeleteTodo} setSelectedTodoIds={setSelectedTodoIds} toggleEditTodo={toggleEditTodo} editedTodoId={editedTodoId} setEditedName={handleEditedName} editTodo={editTodo}/>
        </>
        
    );
}

export default App;