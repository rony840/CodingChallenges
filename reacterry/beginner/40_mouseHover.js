import React,{useState} from 'react';
const App = () => {
  // Edit this component
  const [count,setCount]=useState(0)
  const handleCount = () => {
    setCount(count+1)
  }
  return (
    <div>
      <button onMouseEnter={handleCount} data-testid='button'>Hover Me</button>
      <h1 data-testid='count'>{count}</h1>
    </div>
  );
};

export default App;