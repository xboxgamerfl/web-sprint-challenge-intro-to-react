import React, {useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const CharacterWrapper = styled.div`
  margin-bottom: 20px;
`;

const Character = ({ characterId }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${characterId}`);
        console.log(response.data);
        setCharacter(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [characterId]);

  return (
    <CharacterWrapper>
      {character ? <p>{character.name}</p> : <p>Loading...</p>}
    </CharacterWrapper>
  );
};

const CharacterList = () => {
  const characters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      {characters.map(characterId => (
        <Character key={characterId} characterId={characterId} />
      ))}
    </div>
  );
};

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterList />
    </div>
  );
}

export default App;
