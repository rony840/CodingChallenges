import React, { useState } from 'react';

const App = () => {
  const [text,setText] = useState(localStorage.getItem('inputValue')||'')
  const handleChange = (e) => {
    setText(e.target.value);
    localStorage.setItem('inputValue',e.target.value)
  }
  return (
    <div>
      <input data-testid='input-id' type="text" value={text} onChange={handleChange}/>
    </div>
  );
};

export default App;