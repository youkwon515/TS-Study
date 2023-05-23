import type { DispatchSetStateAction } from '../../types/util';
import type { Todo as TodoType } from '../../types/todo'
import Todo from '../Todo';
interface TodoListProps {
    todos: TodoType[];
    searchValue:string;
    deleteTodo: (id:TodoType['id']) => void;
    // () => 그냥 함수 / 따로 작성한 함수    
    // DispatchSetStateAction = useState의 두번째 인자로 받은 함수
    setSelectedTodoIds: DispatchSetStateAction<TodoType['id'][]>;
}

function TodoList({todos, searchValue, deleteTodo, setSelectedTodoIds}:TodoListProps) {
    return (
        <ul>
            {todos.map(({id, name}) => {
                const handleDeleteTodo = () => {
                    deleteTodo(id);
                };

                const handleSelected = (checked: boolean) => {
                    if (checked) {
                        setSelectedTodoIds((prevState) => [...prevState, id]);
                    } else {
                        setSelectedTodoIds((prevState) => 
                            prevState.filter((prevId) => prevId !== id)
                        );
                    }
                };

                return (
                    <Todo 
                        key={id} 
                        name={name}
                        deleteTodo={handleDeleteTodo} 
                        handleSelected={handleSelected}
                    />
                );
            })}
        </ul>
    )
}

export default TodoList