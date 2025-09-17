import { useState } from 'react';

export default function LudoBoard() {
  let [count, setCount] = useState({
    blue: 0,
    yellow: 0,
    green: 0,
    red: 0
  });

  let [arr, setArr] = useState(["no moves"]);

  const updateBlue = () => {
    setCount({ ...count, blue: count.blue + 1 });
    setArr(prevArr => [...prevArr, "blue moves"]);
  };

  const updateYellow = () => {
    setCount({ ...count, yellow: count.yellow + 1 });
    setArr(prevArr => [...prevArr, "yellow moves"]);
  };

  const updateGreen = () => {
    setCount({ ...count, green: count.green + 1 });
    setArr(prevArr => [...prevArr, "green moves"]);
  };

  const updateRed = () => {
    setCount({ ...count, red: count.red + 1 });
    setArr(prevArr => [...prevArr, "red moves"]);
  };

  return (
    <div>
      <h2>Game Begins!</h2>
      <div className="board">
        <p>
          Blue moves: {count.blue}
          <br />
          <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={updateBlue}>+1</button>
        </p>
        <p>
          Yellow moves: {count.yellow}
          <br />
          <button style={{ backgroundColor: 'yellow', color: 'black' }} onClick={updateYellow}>+1</button>
        </p>
        <p>
          Green moves: {count.green}
          <br />
          <button style={{ backgroundColor: 'green', color: 'white' }} onClick={updateGreen}>+1</button>
        </p>
        <p>
          Red moves: {count.red}
          <br />
          <button style={{ backgroundColor: 'red', color: 'white' }} onClick={updateRed}>+1</button>
        </p>

        <div>
          <h3>Move Log:</h3>
          <ul>
            {arr.map((move, index) => (
              <li key={index}>{move}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
