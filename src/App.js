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
      <p>{character.name}</p>
    </CharacterWrapper>
  );
};

const CharacterList = () => {
  const characters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];

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
