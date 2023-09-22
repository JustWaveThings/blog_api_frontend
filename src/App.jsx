import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  return (
    <>
      <div className=''>
        <p> hello world</p>
        <p>{time}</p>
      </div>
    </>
  );
}

export default App;
