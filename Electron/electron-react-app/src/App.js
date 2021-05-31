import logo from './logo.svg';
import MySurvey from '../src/survey/mysurvey'
import styled from 'styled-components'
import React, { useState } from 'react'



function App() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <div className="App">
      <Container>
        <Button onClick={openModal}>Take a survey!!</Button>
        <MySurvey showModal={showModal} setShowModal={setShowModal} />
      </Container>


    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Button = styled.button`
 min-width: 100px;
 padding: 16px 32px;
 border-radius: 4px;
 border: none;
 background: #141414;
 color: #fff;
 font-size: 24px;
 cursor: pointer;
`