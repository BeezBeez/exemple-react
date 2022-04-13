import { Stardust, useEthers } from '@usedapp/core';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { getDefaultProvider } from 'ethers';
import React from 'react';
import styled from 'styled-components';
import { Button } from './components/Buttons';
import { View } from './components/Containers';
import { Counter } from './components/Counter';
import Web3Modal from 'web3modal';

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
  const { activateBrowserWallet, account, activate } = useEthers();

  const onConnect = async () => {
    try {
      const providerOptions = {
        injected: {
          display: {
            name: 'Metamask',
            description: 'Connect with the provider in your Browser',
          },
          package: null,
        },
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            rpc: {
              [Stardust.chainId]: "https://stardust.metis.io/?owner=588",
            }
          },
        },
      }

      const web3modal = new Web3Modal({
        providerOptions,
      })

      const provider = await web3modal.connect();
      await activate(provider);
      // 0x4422Da427C62fBfF168adA60eb5EA415fF060C6D
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Page>
      <Container>
        <h3>Chibres counter</h3>
        <h5>On-chain application counting number of maxi chibrax</h5>
        {
          account && <p>Account : {account}</p>
        }
        <p>Current value : #</p>
        <Counter min={0} max={10} />
        {
          account ?
            <Button variation='primary'>Send value</Button>
            :
            <Button variation='primary' onClick={onConnect}>Connect wallet</Button>
        }
      </Container>
    </Page>
  );
}

export default App;
