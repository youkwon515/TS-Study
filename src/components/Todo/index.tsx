interface TodoProps {
    deleteTodo: () => void; // 타입을 함수로
    handleSelected: (checked: boolean) => void; // 매개변수 type이 boolean
}

function Todo({deleteTodo, handleSelected}:TodoProps) {
    return <div></div>
}

export default Todo;