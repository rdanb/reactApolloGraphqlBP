import { useState } from 'react'
import { ExposureModal } from './components/ExposureModal'
import * as yup from 'yup'
import './App.css';

let schema = yup.object().shape({
  personId: yup.number().required()
})

function App() {
  const [ personId, setPersonId ] = useState(0)
  const [ inputValue, setInputValue ] = useState('')

  function validate({target}) {
    const { value } = target
    if (value.length > 10) {
      return setInputValue()
    }

    if (value[value.length - 1] === '.') {
      return setInputValue()
    }

    schema.validate({ personId: value }).then(() => {
      setInputValue(value)
    }).catch(error => {
      console.log('@R name: ', error.name)
      console.log('@R errors: ', error.errors)
      setInputValue()
    })
  }

  return (
    <div className="App">
      <input type="text" autoFocus onChange={(e) => validate(e)} />
      <button disabled={!inputValue} onClick={() => {
        setPersonId(parseFloat(inputValue))
      }}>Submit</button>
      {Boolean(personId) &&
        <ExposureModal personId={personId} setPersonId={setPersonId} />
      }
    </div>
  );
}

export default App;
