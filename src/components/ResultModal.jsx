import { useImperativeHandle, useRef} from "react"

export default function ResultModal ({ref, targetTime, remainingTime, onReset}) {
  const dialog = useRef();

  const secondsLeft = (remainingTime / 1000).toFixed(2)

  useImperativeHandle(ref, () => {
    return {
      open (){
        dialog.current.showModal();
      }
    }
  })

  return (
    <dialog ref={dialog} className="result-modal">
      {remainingTime <= 0 ? <h2>You lost</h2> : <h2>You won</h2>}
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