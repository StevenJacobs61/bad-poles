import React from 'react';
import '../App.css';
import { useState } from 'react';
import { ethers } from 'ethers';

export default function ConnectWallet (){
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, SetDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setconnButtonText] = useState('Connect Wallet');

    const connectWalletHandler = () => {
        if (window.ethereum){
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then (result => {
                accountChangedHandler(result[0]);
            })
        } else {
            setErrorMessage('Install MetaMask');
        }
    }
    const accountChangedHandler = (newAccount) => {
        SetDefaultAccount(newAccount);
        getUserBalance(newAccount);
    }
    const getUserBalance = (address) => {
           window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
      .then(balance => {
        setUserBalance(ethers.utils.formatEther(balance));
    })
}
    window.ethereum.on('accountChanged', accountChangedHandler);

   
  

    return(
     <div className="connect-wallet__section">
         <div className='connect-wallet__container'>
             <h2 className="connect-wallet__header">{defaultAccount == null ? 'Connect Wallet' : 'Wallet Connected'}</h2>
             <div className="connect-wallet__btn__container">
                 <span className={defaultAccount == null ? 'connect-wallet__btn' : 'display--none'} onClick={connectWalletHandler} >MetaMask</span>
                 </div>
                 <p className={defaultAccount == null ? "display--none" : 'account'} >Account: <br/> {defaultAccount}</p>
                 <p className={defaultAccount == null ? "display--none" : 'balance'}>Balance: <br/>{userBalance} Eth</p>
         </div>
     </div>
    )
    }