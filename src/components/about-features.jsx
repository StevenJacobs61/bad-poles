import React from 'react';
import '../App.css';
import ExpandableInfo from './expandable-info';
import {GiTakeMyMoney} from 'react-icons/gi';
import {GiEngagementRing} from 'react-icons/gi';
import {BiHappyHeartEyes} from 'react-icons/bi';
import {GiGemChain} from 'react-icons/gi';



function AboutFeatures(){
    const charityIcon = <GiTakeMyMoney className='about__feature__icon'/>;
    const charityText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur enim eaque magni veniam sed necessitatibus beatae, odit eum optio architecto!';
    const vipIcon = <GiEngagementRing className='about__feature__icon'/>;
    const vipText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur enim eaque magni veniam sed necessitatibus beatae, odit eum optio architecto!';
    const heartsIcon = <BiHappyHeartEyes className='about__feature__icon'/>;
    const heartsText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur enim eaque magni veniam sed necessitatibus beatae, odit eum optio architecto!';
    const gemIcon = <GiGemChain className='about__feature__icon'/>;
    const gemText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur enim eaque magni veniam sed necessitatibus beatae, odit eum optio architecto!';
    
    return(
         <div className="about__features__section">             
                     
                         <h2 className="about__header about__features__header">Features</h2>
                         
                             <ExpandableInfo
                             containerStyle = 'about__feature__container'
                             text={charityText}
                             header='Premium Donors'
                             headerStyle='about__feature__header'
                             textStyle='about__feature__text'
                              icon={charityIcon}/>
                        
                       
                         <ExpandableInfo
                         containerStyle = 'about__feature__container'
                         text={vipText}
                         header='Exclusive Content'
                         headerStyle='about__feature__header'
                         textStyle='about__feature__text'
                          icon={vipIcon}/>
                       
                         <ExpandableInfo
                         containerStyle = 'about__feature__container'
                         text={heartsText}
                         header='Hall of Fame'
                         headerStyle='about__feature__header'
                         textStyle='about__feature__text'
                          icon={heartsIcon}/>
                       
                         <ExpandableInfo
                         containerStyle = 'about__feature__container'
                         text={gemText}
                         header='Collectible Rarity'
                         headerStyle='about__feature__header'
                         textStyle='about__feature__text'
                          icon={gemIcon}/>
                       
         </div>
    )
}
export default AboutFeatures;