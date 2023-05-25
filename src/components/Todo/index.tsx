import {Todo as TodoType} from '../../types/todo'
import Button from '../Button';
interface TodoProps {
    name: TodoType['name'];
    deleteTodo: () => void; // 타입을 함수로
    handleSelected: (checked: boolean) => void; // 매개변수 type이 boolean
}

function Todo({name, deleteTodo, handleSelected}:TodoProps) {
    return (
    <li>
        <span>{name}</span>
        <Button onClick={deleteTodo}>삭제</Button>
    </li> 
    )
}

export default Todo;