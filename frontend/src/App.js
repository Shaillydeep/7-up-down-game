import './App.css';

import React, {useEffect} from 'react';

import Game from './pages/Game';

function App() {
  useEffect (() => {
    document.title = "7 Up 7 Down";
  });
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
