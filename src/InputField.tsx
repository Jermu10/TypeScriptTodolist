import React, { useRef } from "react";

interface Props{
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}



const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }:Props) => {
const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form className="input" onSubmit={handleAdd}>
            <input ref={inputRef}
            type="input" 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a task" />
            <button type="submit">Add task</button>
        </form>
    )
};      

export default InputField