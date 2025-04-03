import React,{useState} from 'react';
const App = () => {
  // Edit this component
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () =>{
    let arr = [...todoList]
    arr.push(todo)
    setTodoList(arr)
    setTodo('')
  }
  return (
    <div>
      <input
      value = {todo}
      onChange = {(e)=>setTodo(e.target.value)}
      data-testid="input-id" />
      <button data-testid="button-id" onClick={handleAddTodo}>Add a todo</button>
      <ul data-testid="ul-id">
        {/* Return todos here */}
        {
          todoList.map((item,index)=>{
            return(<li>{item}</li>)
          })
        }
      </ul>
    </div>
  )
}

export default App