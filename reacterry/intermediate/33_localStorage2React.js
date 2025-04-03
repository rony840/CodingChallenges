import React,{useEffect,useState} from 'react';
export const useLocalStorage = (key, initialValue) => {
  // Write the body of the hook here
  const [value,setValue] = useState(()=>{
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  })
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return {value,setValue};
};

const App = () => {
  const {value, setValue} = useLocalStorage('inputValue', '');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default App;