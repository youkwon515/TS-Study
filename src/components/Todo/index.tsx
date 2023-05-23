import {Todo as TodoType} from '../../types/todo'

interface TodoProps {
    name: TodoType['name'];
    deleteTodo: () => void; // 타입을 함수로
    handleSelected: (checked: boolean) => void; // 매개변수 type이 boolean
}

function Todo({name, deleteTodo, handleSelected}:TodoProps) {
    return <li>{name}</li>
}

export default Todo;