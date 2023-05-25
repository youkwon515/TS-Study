import {Todo as TodoType} from '../../types/todo'
import Button from '../Button';
import Input from '../Input';
import type {ChangeEvent} from 'react'
interface TodoProps {
    name: TodoType['name'];
    deleteTodo: () => void; // 타입을 함수로
    handleSelected: (checked: boolean) => void; // 매개변수 type이 boolean
    toggleEditTodo: () => void;
    isEdited: boolean;
    setEditedName: (name: TodoType["name"]) => void;
    editTodo: () => void;
}

function Todo({name, deleteTodo, handleSelected, toggleEditTodo, isEdited, setEditedName, editTodo}:TodoProps) {
    const handleEditedName = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        setEditedName(value)
    }
    return (
    <li>
        {isEdited ? <Input defaultValue={name} onChange={handleEditedName}/> : <span>{name}</span>}
        <Button onClick={deleteTodo}>삭제</Button>
        <Button onClick={toggleEditTodo}>{isEdited ? "취소" : "수정"}</Button>
        {isEdited && <Button onClick={editTodo}>저장</Button>}
    </li> 
    )
}

export default Todo;