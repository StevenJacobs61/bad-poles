import React from 'react';
import HomeHero from '../components/home-hero';
import Navbar from '../components/navbar.jsx';
import '../App.css';
import LearnMore from '../components/learn-more';
import Features from '../components/features';
import LearnArt from '../components/learn_art';
import Banner from '../components/banner';
import AboutRoadMap from '../components/about-roadmap';
import HomeBanner from '../components/home_banner';
import ConnectWallet from '../components/connect-wallet';




function Home (){
  

    return (
        <div className="home">
          
                <Navbar />
                <ConnectWallet/>
                <HomeHero /> 
                <AboutRoadMap/>
                <Features/> 
                {/* <LearnArt backgroundClass='bg--white' classNames='learn-art bg--white container--center'/> */}
              
                <LearnMore />
                
          
        </div>
    )
}
export default Home;