import React from 'react';
import '../App.css';
import InfoBox from './info-box';
import {FaConnectdevelop} from 'react-icons/fa';
import {GiTakeMyMoney} from 'react-icons/gi';
import {GiEngagementRing} from 'react-icons/gi';
import {BiHappyHeartEyes} from 'react-icons/bi';
import {GiGemChain} from 'react-icons/gi';
import Tilt from 'react-parallax-tilt';
import { NavLink } from 'react-router-dom';


function Features (){
const charityIcon = 
    <GiTakeMyMoney className='features__box__icon'/>

const premiumDonorsText ='Celebrities raising buckets of cash for GoodAss causes';
const vipIcon = <GiEngagementRing className='features__box__icon'/>;
const exclusiveContentText = 'Be the first to see BadAss celebrity content';
const heartsIcon = <BiHappyHeartEyes className='features__box__icon'/>;
const hallOfFameText = 'A place for celebrities to show off their GoodAss Deeds';
const rarityText = 'Exciting combinations of unique BadPole collectibles';
const gemIcon = <GiGemChain className='features__box__icon'/>;

    return(
        <div className="section bg--black features__section">
                <h2 className="features__header">Features  <FaConnectdevelop className='features__icon'/></h2>
            <div className="grid grid--1x4 features__grid">
            <Tilt className="parallax-effect-glare-scale" perspective={500} glareEnable={false} glareMaxOpacity={0.45} scale={1.00}>
    <InfoBox textStyle='features__text' boxStyle='features__box' headerStyle='features__box__header' header='Premium Donors' itemOne={charityIcon} itemTwo={premiumDonorsText} itemThree='' itemFour=''/> </Tilt>
    <Tilt className="parallax-effect-glare-scale" perspective={500} glareEnable={false} glareMaxOpacity={0.1} scale={1.00}> 
     <InfoBox textStyle='features__text' boxStyle='features__box' headerStyle='features__box__header' header='Exclusive Content' itemOne={vipIcon} itemTwo={exclusiveContentText} itemThree='' itemFour=''/></Tilt>
     <Tilt className="parallax-effect-glare-scale" perspective={500} glareEnable={false} glareMaxOpacity={0.45} scale={1.00}>  
      <InfoBox textStyle='features__text' boxStyle='features__box' headerStyle='features__box__header' header='Hall of Fame' itemOne={heartsIcon} itemTwo={hallOfFameText} itemThree='' itemFour=''/></Tilt>
      <Tilt className="parallax-effect-glare-scale" perspective={500} glareEnable={false} glareMaxOpacity={0.45} scale={1.00}>
             <InfoBox textStyle='features__text' boxStyle='features__box' headerStyle='features__box__header' header='Collectible Rarity' itemOne={gemIcon} itemTwo={rarityText} itemThree='' itemFour=''/></Tilt>
                
        
               
            </div>
            <div className="features__btn__container"><span className="features__btn"><NavLink className='link featires__btn__text' to='/about'>Learn More</NavLink></span></div>
        </div>
    )
}
export default Features;