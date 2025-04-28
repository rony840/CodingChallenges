import {useEffect,useState} from 'react';

const App = () => {
  // Write your code here
  const [timer,setTimer]= useState('00:00')
  let sec = 0;
  let min = 0;
  useEffect(()=>{
    const timerId = setInterval(()=>{ 
    sec ++
    if (sec === 60){
      sec = 0;
      min ++;
    }
    if(min == 60){
      sec = 0;
      min = 0
    }
    currTimer = `${min.toString().length === 1? '0'+min.toString():min.toString()}:${sec.toString().length === 1? '0'+sec.toString():sec.toString()}`
    setTimer(currTimer)
    },1000)
    return() => clearInterval(timerId)
  },[])
  return(
    <h3>{timer}</h3>
  )
};

export default App;