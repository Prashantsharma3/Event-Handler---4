import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleDoubleClick = (event) =>{
   if (clicks === 1) {
      console.log('I was double clicked');
      setClicks(0);
    } else {
      setClicks(clicks + 1);
    }
  };
  }
  return (
    <div id="main">
      <button id="dblclick-btn">Double click me</button>
    </div>
  )
}


export default App;
