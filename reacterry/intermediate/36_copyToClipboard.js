import styled from "styled-components";
import {useState} from 'react';

const CopyToClipboard = ({ str = 'test-input' }) => {
  // Edit this component
  const [title,setTitle] = useState('Copy');
  const handleClick = () =>{
    navigator.clipboard.writeText(str)
    setTitle('Copied')
    setTimeout(()=>setTitle('Copy'),1000)
  }
  
  return (
    <Button onClick={handleClick}>{title}</Button>
  )
}

export default CopyToClipboard

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;