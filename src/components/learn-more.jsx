import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/learn-more.css';
import {GiMagnifyingGlass} from 'react-icons/gi';
import HomeBanner from './home_banner';


function LearnMore (){
    return (<>
            <HomeBanner/> 
            <div className="learn-more">
                <div className="container main__container">
                    
                        <h2 className='main__header'>Discover More!  <GiMagnifyingGlass className='learn__icon'/></h2>
                       
                  
                    
  <NavLink className="btn link btn--grey-learn" to="/about">About BadPoles</NavLink>
  <NavLink className="btn link btn--grey-learn" to="/about">See Collection</NavLink>
  <NavLink className="btn link btn--grey-learn" to="/about">Join Community</NavLink>

                  
                        
                  
                   
                       
            
            
                </div>
            </div>
            </>
    )
}
export default LearnMore;