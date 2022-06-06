import React from 'react';
import Navbar from '../components/navbar.jsx';
import '../App.css';
import LearnMore from '../components/learn-more';
import RoadMap from '../components/roadmap';
import Header from '../components/header.jsx';
import LearnArt from '../components/learn_art.jsx';
import Banner from '../components/banner.jsx';
import ConnectWallet from '../components/connect-wallet.jsx';



function RoadMapPage (){
  

    return (
        <div className="home">
                
                <Header name='Our Journey'/>
                <Navbar />
                <ConnectWallet/>
                <RoadMap />
               
                <Banner/>
                <LearnMore />
                
          
        </div>
    )
}
export default RoadMapPage;