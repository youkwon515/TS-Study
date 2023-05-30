import {Todo as TodoType} from '../../types/todo'
import Button from '../Button';
import Input from '../Input';
import type {ChangeEvent} from 'react'
import * as S from './styled';
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
    <S.liContainer>
        {isEdited ? <Input placeholder='수정내용' defaultValue={name} onChange={handleEditedName}/> : <span>{name}</span>}
        <div>
            <Button onClick={deleteTodo}>삭제</Button>
            <Button onClick={toggleEditTodo}>{isEdited ? "취소" : "수정"}</Button>
            {isEdited && <Button onClick={editTodo}>저장</Button>}
        </div>
    </S.liContainer> 
    )
}

export default Todo;