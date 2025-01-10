import { useImperativeHandle, useRef} from "react"

export default function ResultModal ({ref, targetTime, remainingTime, onReset}) {
  const dialog = useRef();

  const secondsLeft = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - (remainingTime / (targetTime * 1000))) * 100)

  useImperativeHandle(ref, () => {
    return {
      open (){
        dialog.current.showModal();
      }
    }
  })

  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {remainingTime <= 0 ? <h2>You lost</h2> : <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong>
      </p>
      <p>
        You stopped the timer with <strong>{secondsLeft} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  )
}