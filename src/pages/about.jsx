import React from 'react';
import Navbar from '../components/navbar';
import '../App.css';
import Overview from '../components/overview';
import Team from '../components/team';
import Header from '../components/header';
import LearnMore from '../components/learn-more';
import RoadMap from '../components/roadmap';
import FAQ from '../components/faq';
import LearnArt from '../components/learn_art';
import Banner from '../components/banner';
import AboutFeatures from '../components/about-features';
import AboutRoadMap from '../components/about-roadmap';
import ConnectWallet from '../components/connect-wallet';


function About (){
    return (
        <div className="home section">
            
                <Navbar />
                <Header name='About' />
                <ConnectWallet/>
                <Overview />
                <AboutRoadMap/>
                <AboutFeatures/>
                <Team />
                <LearnArt backgroundClass='learn-art__section' classNames='learn-art bg--white container--center' />
                <FAQ />
                <LearnMore/>
                
            
        </div>
    )
}
export default About;
