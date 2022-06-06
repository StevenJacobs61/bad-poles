import React from 'react';
import ConnectWallet from '../components/connect-wallet';
import Header from '../components/header';
import LearnMore from '../components/learn-more';
import MintSection from '../components/mint_section';
import Navbar from '../components/navbar';


function Mint (){
    return (
        <div className="home">
            
                <Navbar />
                <Header name='Mint' />  
                <ConnectWallet/>
                <MintSection />
                <LearnMore />
                     
        </div>
    )
}
export default Mint;

