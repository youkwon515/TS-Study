import type { DispatchSetStateAction } from '../../types/util';
import type { Todo as TodoType } from '../../types/todo'
import Todo from '../Todo';
import * as S from './styled';
interface TodoListProps {
    todos: TodoType[];
    searchValue:string;
    editedTodoId: TodoType["id"] | undefined;
    deleteTodo: (id:TodoType['id']) => void;
    // () => 그냥 함수 / 따로 작성한 함수    
    // DispatchSetStateAction = useState의 두번째 인자로 받은 함수
    setSelectedTodoIds: DispatchSetStateAction<TodoType['id'][]>;
    toggleEditTodo: (id: TodoType["id"]) => void;
    setEditedName: (name: TodoType["name"]) => void;
    editTodo: () => void;
}

function TodoList({todos, searchValue, deleteTodo, setSelectedTodoIds, toggleEditTodo, editedTodoId, setEditedName, editTodo}:TodoListProps) {
    return (
        <ul>
            {todos.
            filter(({name}) => name.includes(searchValue))
            .map(({id, name}) => {
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

                const handleEditTodo = () => {
                    toggleEditTodo(id);
                }

                const isEdit = editedTodoId === id;

                return (
                    <S.TodoContainer>
                        <Todo 
                            key={id} 
                            name={name}
                            deleteTodo={handleDeleteTodo} 
                            handleSelected={handleSelected}
                            toggleEditTodo={handleEditTodo}
                            isEdited={isEdit}
                            setEditedName={setEditedName}
                            editTodo={editTodo}
                        />
                    </S.TodoContainer>
                );
            })}
        </ul>
    );
}

export default TodoList;