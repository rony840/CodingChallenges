import { useState } from "react";

const ToDo = () =>{
    const [todo, setTodo] = useState('')
    const [list, setList] = useState([])
    const addTodo = () => {
        let temp = [...list]
        temp.push(todo)
        setList(temp)
        setTodo('')
    }
    return(
        <div>
            <input
            type="text"
            placeholder="add a todo"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}/>
            <button onClick={addTodo}>add todo</button>
            <table>
                <thead>
                    <tr>
                        <th>
                        Todo List
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {list.length>0? list.map((element)=>{
                        return(
                        <tr key={element}>
                            <td>{element}</td>
                        </tr>)
                    }):null}
                </tbody>
            </table>
        </div>
    )
}

export default ToDo;