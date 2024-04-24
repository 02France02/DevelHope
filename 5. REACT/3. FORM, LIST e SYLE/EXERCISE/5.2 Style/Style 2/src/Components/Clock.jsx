import React, { useState, useEffect } from 'react';
import './Clock.scss';

export function Clock() {
  const [time, setTime] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='Clock'>
      <h1 className='title'>DATE: {time}</h1>
    </div>
  );
}

