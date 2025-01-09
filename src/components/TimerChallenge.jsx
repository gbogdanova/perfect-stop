import { useState, useRef } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge ({title, targetTime}) {
  const timer = useRef();
  const dialog = useRef();

  const [timerStart, setTimerStart] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart(){
    setTimerStart(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
  }

  function handleStop(){
    clearTimeout(timer.current);
    setTimerStart(false);
  }

  return (
    <>
       <ResultModal ref={dialog} targetTime={targetTime} result={'lost'}/>
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">{targetTime} second{targetTime > 1 ? 's' : ''}</p>
        <p>
          <button onClick={timerStart? handleStop : handleStart}>
            {timerStart ? 'Stop ' : 'Start '}Chalenge
          </button>
        </p>
        <p className={timerStart ? 'active' : undefined}>{timerStart ? 'Time is running...' : 'Timer inactive'}</p>
      </section>
    </> 
  )
}