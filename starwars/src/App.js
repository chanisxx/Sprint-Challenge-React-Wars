import React, { useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Characters from "./components/Character"
import { Container, Row } from "reactstrap";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [character, setCharacter] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect (() => {
    axios.get("https://rickandmortyapi.com/api/character")
    .then(response => {
     console.log('response', response)
     setCharacter(response.data.results)
    })
    .catch(er => console.log("error", er));
  }, []);
  console.log(character);

  return (
      <Container className="App">
        <h1 className="Header">Characters</h1>
        <Row> 
        {character.map(el => {
        return <Characters {...el}/>
        })}
        </Row>
     </Container>
  );
}

export default App;
