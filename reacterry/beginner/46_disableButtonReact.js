import React, {useState} from 'react';
const App = () => {
  const [input,setInput] = useState('')
  return (
    <>
      <input value={input} data-testid="input-id" onChange={(e)=>setInput(e.target.value)} />
      {input.length<3? <button disabled data-testid="button-id">Click</button> : <button data-testid="button-id">Click</button>}
    </>
  )
}

export default App