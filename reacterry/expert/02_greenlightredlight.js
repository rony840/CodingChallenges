import { useEffect, useState } from "react";

function GreenLightRedLight() {
    // Write your game here
    const [hovered, setHovered] = useState(false)
    const [time, setTime] = useState(15)
    const [score, setScore]= useState(0)
    const [timerSubscriber,setTimerId] = useState('')
    const [initialState, setInitial] = useState(true)
    const [isStarted, setStarted] = useState(false)
    const [isGreen, setGreen] = useState(true)
    const [hasLost, setLost] = useState(false)
    const [colorId, setColorId] = useState('')
    let timerId = ''
    let coloId = ''
    let timer = time
    useEffect(()=>{
        if(time === 0){
            clearInterval(timerSubscriber)
            clearInterval(colorId)
            setTime(15)
            setStarted(false)
            if(score >= 15){
                setLost(false)
            }
        }
    },[time,colorId])
    const startGame = () => {
        setInitial(false)
        setStarted(true)
        setTime(15)
        setScore(0)
        timerId = setInterval(()=>{
            timer = timer - 1
            setTime(timer)
        },1000)
        coloId = setInterval(()=>{
            let id = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
            if(id === 1){
                setGreen(true)
            }else{
                setGreen(false)
            }
        },500)
        setColorId(coloId);
        setTimerId(timerId)
    }
    const handleElementClick = (checkGreen) =>{
        if(checkGreen){
            let scr = score;
            scr = scr + 1;
            setScore(scr)
        }else{
            setStarted(false)
            setLost(true)
            clearInterval(timerSubscriber)
            clearInterval(colorId)
            setTime(0)
        }
    }
    const onHovered = () => {
        setHovered(!hovered)
    }
    return(
      <div style={styles.gameContainer}>
        {initialState?(
            <>
            <button
            onClick={startGame}
            onMouseEnter={onHovered}
            onMouseLeave={onHovered}
            style={hovered? styles.startButton1 : styles.startButton2}>
                Start Game
            </button>
            <h1>Score: 0</h1>
            </>
        ):(
            <>
                {isStarted?(<>
                    <h1 style={styles.timerStyle}>Time left: {time}s</h1>
                    <h1>Score: {score}</h1>
                    <div
                    onClick={()=>handleElementClick(isGreen)}
                    style={isGreen? styles.gameElement1:styles.gameElement2}/>
                </>): hasLost ? (<>
                    <button
                        onClick={startGame}
                        onMouseEnter={onHovered}
                        onMouseLeave={onHovered}
                        style={hovered? styles.startButton1 : styles.startButton2}>
                            Start Game
                    </button>
                    <h1>Score: {score}</h1>
                    <h1>Game Over!</h1>
                </>)
                : (<>
                        <button
                            onClick={startGame}
                            onMouseEnter={onHovered}
                            onMouseLeave={onHovered}
                            style={hovered? styles.startButton1 : styles.startButton2}>
                                Start Game
                        </button>
                        <h1>Score: {score}</h1>
                        <h1>You Won!</h1>
                    </>
                )

                }
            </>
        )
        
        }
        
      </div>
    )
  }

  const styles = {
    gameContainer:{
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection:'column',
    },
    timerStyle:{
        fontWeight: 500,
    },
    startButton1:{
        color:'white',
        width: '150px',
        height: '60px',
        fontSize: '18px',
        fontWeight: 600,
        borderRadius: '5px',
        borderWidth: '0px',
        backgroundColor:'#5d5d5d',
        cursor:'pointer'
    },
    startButton2:{
        color:'white',
        width: '150px',
        height: '60px',
        fontSize: '18px',
        fontWeight: 600,
        borderRadius: '5px',
        borderWidth: '0px',
        backgroundColor:'#3d3d3d',
        cursor:'pointer'
    },
    gameElement1:{
        backgroundColor:'green',
        width: '150px',
        height: '150px',
        display: 'flex',
        cursor:'pointer'
    },
    gameElement2:{
        backgroundColor:'red',
        width: '150px',
        height: '150px',
        display: 'flex',
        cursor:'pointer'
    }
  }
  
  export default GreenLightRedLight;