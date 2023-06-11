import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
 const [characters, setCharacters] = useState([])
 useEffect(() =>{
  axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setCharacters(res.data)
    })
    
 }, []);

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {characters.map(character =>{
        return <div key={character.name}>{character.name}</div>
      })}
      
    </div>
  );
}

export default App;
