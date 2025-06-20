import { useState, useRef } from "react";

export default function Player() {
  const player_Name = useRef();
  const [playerName, setPlayerName] = useState(null);
  
  function handleClick() {
    setPlayerName(player_Name.current.value);
    player_Name.current.value = '';
  }
  
  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={player_Name} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
