import React from 'react';
import Navbar from '../components/navbar';
import '../App.css';
import Header from '../components/header';
import LearnMore from '../components/learn-more';
import ComingSoon from '../components/coming-soon';
import Banner from '../components/banner';
import ConnectWallet from '../components/connect-wallet';



function HallOffFame (){
    const comingSoonText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, molestias expedita. Repellat, voluptates cumque officiis, dolor quod fugit ab similique itaque possimus quisquam cum praesentium quaerat facilis sint perspiciatis porro, amet.';


    return (
        <div className="home">
            
                <Navbar />
                <Header name='Hall of Fame' />
                <ConnectWallet/>
                <ComingSoon text={comingSoonText}/>
                <Banner />
                <LearnMore />
                
            
        </div>
    )
}
export default HallOffFame;
