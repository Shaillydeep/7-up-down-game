import './App.css';

import React, {useEffect} from 'react';

import Game from './pages/Game';
import Header from './components/header';
import Name from './components/name';

function App() {
  useEffect (() => {
    document.title = "7 Up 7 Down";
  });
  return (
    <div className="App">
      <Header />
      <Game />
      <Name />
    </div>
  );
}

export default App;
