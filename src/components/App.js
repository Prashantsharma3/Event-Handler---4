import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [clicks, setClicks] = useState(0);

  const handleDoubleClick = () => {
    if (clicks === 1) {
      console.log('I was double clicked');
      setClicks(0);
    } else {
      setClicks(clicks + 1);
      console.log('I was not double clicked');
    }
  };

  return (
    <div id="main">
      <button id="dblclick-btn" onDoubleClick={handleDoubleClick}>Double click me</button>
    </div>
  );
};

export default App;

