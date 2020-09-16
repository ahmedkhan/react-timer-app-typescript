import React,{useState , useEffect } from 'react';
import "./Timer.css"
import TimerButton from '../TimerButton/TimerButton';




function Timer (){ 

const [minutes,setMinutes]=useState("00");
const [seconds,setSeconds]=useState("00");
const [isOn,setIsOn]=useState(false);
const [reset,setReset]=useState(false);

function convertTo2Dec (time:string): string{
 return (parseInt(time)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
}

  const startTimer =() =>{
   setIsOn(true)
  }

  const stopTimer=()=>{
   setIsOn(false)
  }

  const resetTimer=()=>{
    setReset(true)
  }

  useEffect(() => {

    if (reset){

      setReset(false);
      setIsOn(false);
      setMinutes("00");
      setSeconds("00");
    }

    if (isOn){
  
 
      const interval = setInterval(() => {
    
        if (parseInt(seconds) < 59){
        setSeconds( convertTo2Dec((parseInt(seconds) + 1).toString()));
      }
      else{
        setSeconds( "00");
        setMinutes(convertTo2Dec((parseInt(minutes) + 1).toString()))
    
      }
    
    
      }, 1000);
    
    
      return () => clearInterval(interval);
    }

}, [seconds,isOn,reset,minutes]);
    

    return (
        <div className="timer-container">
        <div className="time-display">
        <p>{minutes}:{seconds}</p>
        </div>
        <div className="timer-button-container">
          <TimerButton buttonAction={startTimer} buttonValue={'Start'} />
          <TimerButton buttonAction={stopTimer} buttonValue={'Stop'} />
          <TimerButton buttonAction={resetTimer} buttonValue={'Reset'} />
        </div>
      </div> 
    );
 
}

export default Timer;

