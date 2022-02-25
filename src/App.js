import React from 'react';
import logo from './logo.svg';
import './App.css';
import EightBall from './EightBall';
import answers from './Answers';
function App() {
  return (
    <div>
      <EightBall props = {answers} />
    </div>
  )
 
}

export default App;