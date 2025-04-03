import React, {useState,useEffect} from 'react';
const App = () => {
  // Edit this component
  const [text,setText] = useState('');
  const [wordCount,setWordCount] = useState(0);
  useEffect(()=>{
    if(text.length == 0){
      setWordCount(0)
    }else{
      let arr = text.trim().split(' ');
      setWordCount(arr.length);
    }
  })
  const handleTextChange = (e) => {
    setText(e.target.value)
    
  };
  return (
    <>
      <textarea value={text} onChange={handleTextChange} data-testid='textarea-id'/>
      <h1 data-testid='output-id'>Your article has {wordCount} words</h1>
    </>
  )
}

export default App