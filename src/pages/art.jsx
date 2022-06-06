import React from 'react';
import ArtHome from '../components/art__home';
import ConnectWallet from '../components/connect-wallet';
import Header from '../components/header';
import LearnMore from '../components/learn-more';
import Navbar from '../components/navbar';


function Art (){
    return (
        <div className="home">
           
                <Navbar />
                <Header name='Art' />
                <ConnectWallet/>
                <ArtHome />
                <LearnMore/>
        
        </div>
    )
}
export default Art;