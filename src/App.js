import { useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [intervalTracker, setIntervalTracker] = useState(null); // Null when not running

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const startStopwatch = () => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    setIntervalTracker(intervalId);
  };

  const stopStopwatch = () => {
    clearInterval(intervalTracker);
    setIntervalTracker(null);
  };

  const resetStopwatch = () => {
    if (intervalTracker) clearInterval(intervalTracker);
    setTime(0);
    setIntervalTracker(null);
  };

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      <div className="button-container">
        {intervalTracker === null ? (
          <button onClick={startStopwatch}>Start</button>
        ) : (
          <button onClick={stopStopwatch}>Stop</button>
        )}
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
}

export default App;
