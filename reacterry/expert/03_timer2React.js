import {useEffect,useState} from 'react';

const App = () => {
  // Write your code here
  const [timer,setTimer]= useState(localStorage.getItem('time')||'10:00')
  let sec = 0;
  let min = 10;
  const cache = localStorage.getItem('time')
    if (cache !== 'undefined'){
      let tarr = cache.split(':');
      min = parseInt(tarr[0]);
      sec = parseInt(tarr[1]);
  }
  useEffect(()=>{
    
    const timerId = setInterval(()=>{ 
    if (sec === 0){
      sec = 60;
      min --;
    }
    sec --
    if(min === 0){
      sec = 0;
      min = 10
    }
    currTimer = `${min.toString().length === 1? '0'+min.toString():min.toString()}:${sec.toString().length === 1? '0'+sec.toString():sec.toString()}`
    setTimer(currTimer)
    localStorage.setItem('time',currTimer)
    },1000)
    return() => clearInterval(timerId)
  },[])
  return(
    <h3>{timer}</h3>
  )
};

export default App;