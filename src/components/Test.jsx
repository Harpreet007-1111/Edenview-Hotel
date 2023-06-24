import React, { useState, useEffect } from 'react';

function Timer() {

  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let interval;
    if(duration > 0) {
       interval = setInterval(() => {
          setDuration(prevDuration => prevDuration - 1);
        }, 1000);
      }
      return () => clearInterval(interval);
  }, [duration]);

  const handleTimer = () => {
    if(duration > 0) {
      clearInterval(interval);
      setDuration(duration);
    }
  }

  return (
    <div>
    <input type="number" placeholder='Enter time' value={duration} onChange={(e) => setDuration(Number(e.target.value))} />
    <button onClick={() => handleTimer()}>Start</button>
    <p>Remianing time: {duration}s</p>
    </div>
  )
}

export default Timer;