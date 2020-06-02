import React, { useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Characters from "./components/Character"
import { Container, Row } from "reactstrap";
import Form from "./components/Form"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  //search stuff here..
  // const [inputValue, setInputValue] = useState("");

  // const changeHandler = event => {
  //   setInputValue(event.target.value);
  //   console.log(event.target.value)
  // };

  // let filteredCharacters = character.filter(key => {
  //   return key.name.indexOf(inputValue) !== -1;
  // })


  const [character, setCharacter] = useState([]);

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

        {/* <form>
          <label>
            <input type="text" onChange={changeHandler} placeholder="Search Characters..."/>
          </label>
        </form> */}
        
        <Row> 
        {character.map(el => {
        return <Characters {...el}/>
        })}
        </Row>
     </Container>
  );
}

export default App;
