import React, { useState, useEffect } from 'react';
import './App.scss';
import getJokes from '../helpers/data/jokeData';

function App() {
  const [allJokes, setAllJokes] = useState([]);
  const [singleJoke, setSingleJoke] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);

  const handleClick = () => {
    if (showPunchline) {
      setShowPunchline(false);
      setSingleJoke(allJokes[Math.floor(Math.random() * allJokes.length)]);
    } else {
      setShowPunchline(true);
    }
  };

  useEffect(() => {
    getJokes()
      .then((jokes) => {
        setAllJokes(jokes);
        setSingleJoke(jokes[Math.floor(Math.random() * jokes.length)]);
      });
  }, []);

  return (
    <div className='App'>
      <h2>{singleJoke.joke}</h2>
      <p>
      {singleJoke.setup}
        </p>
        <ul>
        {showPunchline && singleJoke.punchline}
          </ul>
          <button color="info" onClick={handleClick}>
          {showPunchline ? 'Get Another Joke' : 'Get Punchline'}
      </button>
    </div>
  );
}

export default App;
