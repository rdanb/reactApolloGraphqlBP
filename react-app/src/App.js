import { useState } from 'react'
import { ExposureModal } from './components/ExposureModal'
import { InputField } from './components/InputField/Field'
import { Button } from './components/Button/Button'
import { theme } from './util/Theme'
import { messages } from './util/Messages'
import * as yup from 'yup'
import styled from 'styled-components'

let schema = yup.object().shape({
  personId: yup.number().required()
})

const AppWrapper = styled.div`
  text-align: center;
  background-color: ${theme.backgroundColorLightHex};
  height: 100vh;
  display: grid;
  grid-template-areas:
    '. input button .'
    '. error error .';

  @media screen and (max-width: 400px) {
    display: block;
  }
`

const ErrorMessage = styled.p`
  grid-area: error;
  color: red;
  align-self: flex-start;
`

function App() {
  const [ personId, setPersonId ] = useState(0)
  const [ inputValue, setInputValue ] = useState('')
  const [ validationErrors, setValidationErrors ] = useState()

  function validate({target}) {
    const { value } = target
    // validation for ensuring the 10 characters limit is not passed
    if (value.length > 10) {
      setValidationErrors(messages.maxCharactersValidation)
      return setInputValue()
    }

    // validation for ensuring the value won't end with "."
    if (value[value.length - 1] === '.') {
      setValidationErrors(messages.numberValidation)
      return setInputValue()
    }

    schema.validate({ personId: value }).then(() => {
      setInputValue(value)
      setValidationErrors()
    }).catch(error => {
      setValidationErrors(messages.numberValidation)
      setInputValue()
    })
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter' && Boolean(inputValue)) {
      setPersonId(parseFloat(inputValue))
      e.target.blur()
    }
  }

  return (
    <AppWrapper>
      <InputField onKeyPress={handleKeyPress} placeholder={messages.textFieldPlaceholder} type="text" autoFocus onChange={(e) => validate(e)} />
      <Button disabled={!inputValue} onClick={() => {
        setPersonId(parseFloat(inputValue))
      }}>Submit</Button>
      {Boolean(validationErrors) &&
        <ErrorMessage>{validationErrors}</ErrorMessage>
      }
      {Boolean(personId) &&
        <ExposureModal personId={personId} setPersonId={setPersonId} />
      }
    </AppWrapper>
  );
}

export default App;
