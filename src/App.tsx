import React from 'react';
import styled from 'styled-components';
import { View } from './components/Containers';
import { Counter } from './components/Counter';

const Page = styled(View)`
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, transparent 60%, rgb(0, 0, 0)), linear-gradient(0deg, rgba(20, 20, 20, 0.7), rgba(20, 20, 20, 0.7)), url("./assets/images/backgrounds/background.jpg");
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

const Container = styled(View)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(32, 32, 32, 0.7);
  border-radius: 24px;
  backdrop-filter: blur(32px);
  box-shadow: 0px 8px 16px rgba(16, 16, 16, 0.25), inset 0px 6px 12px rgba(255, 255, 255, 0.05);
  width: 70%;
  height: 70%;
`

function App() {
  return (
    <Page>
      <Container>
        <h3>Chibres counter</h3>
        <h5>On-chain application counting number of maxi chibrax</h5>
        <Counter/>
      </Container>
    </Page>
  );
}

export default App;
