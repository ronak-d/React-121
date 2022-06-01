import React, { useState ,useEffect} from 'react';
// import {useEffect} fro

function Timer(){
    const [time,setTime] = useState(null);
    const [TimeRuns, setTimeRuns] = useState(false);
    const [id, setId] = useState(null);

    const hStart = (time) => {
        setTime(time);
        console.log(time)
        setTimeRuns(true)
        handleStart();
    }

    // if time ==0 set to 0
    useEffect(() =>{
        if(time === 0){
            clearInterval(id);
        }
    },[time,id]);

    const handleStart = () =>{
        if(id !== null){
            return
        }
        
        const ide = setInterval(() =>{
            setTime((time) => time-1)
        },1000);

        setId(ide);
        setTimeRuns(true);

    }

    const handleStop = () =>{
        clearInterval(id)
        setTimeRuns(false);
        setId(null);
    }

    const handleReset = () =>{
        handleStop();
        setTime(0);
    }

    return(
        <div>
            <h1>Timer function</h1>
            <hr/>
            <br />
            {/* hUpdate used as a prop to send the starting time when start pressed */}

            {time === null? <TimerInput hUpdate={hStart}/> : <div>Timer : {time}</div>}
            {TimeRuns?(<button onClick={handleStop}>pause</button>):(<button onClick={handleStart}>Start</button>)}
            <button onClick={handleReset}>reset</button>
        </div>
    )
}



// timerinput is for setting the time for the clock something like that

const TimerInput = ({hUpdate}) =>{
    const[time,setTime] = useState(null);

    const hTimeUpdate = (e) =>{

        console.log(e);

        if(Number.isNaN(e)){
            alert("Please input Number");
            return
        }
        console.log(setTime)
        setTime(Number(e))
    }

    return(

        <div>
            <h1>TimerInput function</h1>
            <input value={time} onChange={(e) => setTime(Number(e.target.value))}/>
            <button onClick={()=>hUpdate(time)}> Start Timer</button>
        </div>
    )
}


export default Timer;