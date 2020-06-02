import React, {useState} from "react"


const Form = props => {
    const [inputValue, setInputValue] = useState("");
    console.log(props)
  
    const changeHandler = event => {
      setInputValue(event.target.value);
      console.log(event.target.value)
    };

  
    return (
      <div className="App">
        <form>
          <label>
            <input type="text" onChange={changeHandler} placeholder="Search Characters..."/>
          </label>
        </form>
      </div>
      
    );
  };

export default Form;