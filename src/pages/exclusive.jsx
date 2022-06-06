import React from 'react';
import Banner from '../components/banner';
import ComingSoon from '../components/coming-soon';
import ConnectWallet from '../components/connect-wallet';
import Header from '../components/header';
import LearnMore from '../components/learn-more';
import Navbar from '../components/navbar';


function Exclusive (){
    const comingSoonText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, molestias expedita. Repellat, voluptates cumque officiis, dolor quod fugit ab similique itaque possimus quisquam cum praesentium quaerat facilis sint perspiciatis porro, amet.';
    return (
        <div className="home">
            
                <Navbar />
                <Header name='Exclusive Content' />
                <ConnectWallet/>
                <ComingSoon text={comingSoonText} />
                <Banner />
                <LearnMore />
        </div>
    )
}
export default Exclusive;