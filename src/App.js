import { useState } from "react";

function App() {
  const [time, setTime] = useState(60);
  const [IntervalTracker, setIntervalTracker] = useState(-1);
 

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingseconds = seconds % 60;
    return `${minutes}:${remainingseconds < 10 ? "0" : ""}${remainingseconds}`;
  };

  return (
    <>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      <button
        onClick={() => {
          const intervalId = setInterval(() => {
            setTime((t) => t + 1);
          }, 1000);
          setIntervalTracker(intervalId);
        }}
      >
        Start
      </button>

      <button
        onClick={() => {
          clearInterval(IntervalTracker);
          setTime(0);
          setIntervalTracker(-1);
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          clearInterval(IntervalTracker);
          setIntervalTracker(-1);
        }}
      >
        Stop
      </button>
    </>
  );
}

export default App;
