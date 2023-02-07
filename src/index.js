import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

const Hello = ({name, age}) => {
  // des- estructuracion de props
  //const name = props.name
  //const age = props.age

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()} </p>
    </div>
  )
}

//---------------------------------------------------------------------
function Boton({value}){
  const [counter, setCounter] = useState(0)
  return (
    <button
      onClick={() => setCounter(counter+1)}>
        {value + " " + counter}
    </button>
  );
}
//---------------------------------------------------------------------

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Boton value="hola manola"/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);