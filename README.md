# Fundraising web-application based on blockchain technology

This app is promising for solving many problems related to confidentiality, security, and transparency in the transactions involving donation.
- [Link to the web application](https://umit-fundraising.netlify.app/)
- [Follow on LinkedIn](https://linkedin.com/in/kamzadias)

![Fundraising web-application](<img width="1710" alt="image" src="https://github.com/kamzadias/blockchain-fundraising-app/assets/68639981/edf60e89-80f3-4ad2-8591-a0024cddb0a6">)

## Overview
- Campaign creator can create own charity campaign and monitor the fundraising process
- The donor can donate ETH to charitable companies and also monitor the transparency of the transaction
- Universal App: Run on smartphone, and Laptop

## System architecture

<img width="912" alt="image" src="https://github.com/kamzadias/blockchain-fundraising-app/assets/68639981/99be9ef0-5b9b-465f-89bd-ee3542d90eb0">

- Frontend in React, Vite.js, Tailwind.css, JavaScript 
- Blockchain in Solidity, Hardhat, thirdweb, Etherscan, Netlify
- Decentralized database with IPFS
- Donation through MetaMask crypto wallet and Alchemy

## Installation
Create a project using this example:

```bash
npx thirdweb create --contract --template hardhat-javascript-starter
```

After any changes to the contract, run:

```bash
npm run build
# or
yarn build
```

When you're ready to deploy your contracts, just run one of the following command to deploy you're contracts:

```bash
npm run deploy
# or
yarn deploy
```
