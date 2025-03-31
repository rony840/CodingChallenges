import {useState} from 'react';
const App = () => {
  const [count, setCount] = useState(0)
  // Edit this component
  return (
    <>
      <h1 data-testid="count">{count}</h1>
      <button onClick={()=>{setCount(count+1)}} data-testid="increment">Increment</button>
      <button onClick={()=>{setCount(count-1)}} data-testid="decrement">Decrement</button>
    </>
  )
}

export default App