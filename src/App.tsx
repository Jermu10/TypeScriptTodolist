import React, { useState } from 'react';
import InputField from './InputField';
import TodoList from './TodoList';
import { Todo } from './Todo';



const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos,{todo}])
      setTodo("")
    }
  }
  


  return (
    <div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
