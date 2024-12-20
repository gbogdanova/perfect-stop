import { useState, useRef } from "react";

export default function Player() {
  const currentName = useRef();
  const [name, setName] = useState(null);

  function handleClick(){
    setName(currentName.current.value);
    currentName.current.value = '';
  }
  
  return (
    <section id="player">
      <h2>Welcome {name ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={currentName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
