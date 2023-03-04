import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [clicks, setClicks] = useState(0);

  const handleDoubleClick = () => {
    let timeout;

    if (clicks === 1) {
      console.log('I was double clicked');
      setClicks(0);
    } else {
      timeout = setTimeout(() => {
        console.log('I was not double clicked');
        setClicks(0);
      }, 300);
      setClicks(1);
    }

    return () => clearTimeout(timeout);
  };

  return (
    <div id="main">
      <button id="dblclick-btn" onDoubleClick={handleDoubleClick}>Double click me</button>
    </div>
  );
};

export default App;
