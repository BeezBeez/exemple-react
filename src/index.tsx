import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Config, DAppProvider, Mainnet, Stardust } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';
import { getNetwork } from 'ethers/node_modules/@ethersproject/providers';

const config: Config = {
  readOnlyChainId: Stardust.chainId,
  readOnlyUrls: {
    [Stardust.chainId]: getDefaultProvider('https://stardust.metis.io/?owner=588')
  }
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);