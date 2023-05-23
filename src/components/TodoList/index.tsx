import type { DispatchSetStateAction } from '../../types/util';
import type {Todo} from '../../types/todo'
interface TodoListProps {
    todos: Todo[];
    searchValue:string;
    deleteTodo: (id:Todo['id']) => void;
    // () => 그냥 함수 / 따로 작성한 함수    
    // DispatchSetStateAction = useState의 두번째 인자로 받은 함수
    setSelectedTodoIds: DispatchSetStateAction<Todo['id'][]>;
}

function TodoList({todos, searchValue, deleteTodo, setSelectedTodoIds}:TodoListProps) {
    return <ul></ul>
}

export default TodoList