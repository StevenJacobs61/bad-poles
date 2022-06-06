import React from 'react';
import './navbar';
import badpole from '../components/badpoles.gif';
import{NavLink} from 'react-router-dom';
import {animated, useSpring} from 'react-spring';
import Tilt from 'react-parallax-tilt';


function HomeHero (){

    const fade = useSpring ({
        from:{
            opacity: 0,
            
        },
        to:{
            opacity: 1,
            
        },
        
    });


    return (
        
            <div className="section bg--black">
                <div className="hero__container">
                        <animated.h1 style={fade} className='hero__header text-white'>BADPOLES</animated.h1>
                        <div className="hero__btn__container">
                               <NavLink className='link btn btn--primary' to='/'>Discord</NavLink>
                                <NavLink className='link btn btn--blue-mint' to='/'>Mint</NavLink>
                                <NavLink className='link btn btn--primary' to='/'>Opensea</NavLink>
                        </div>
                   <Tilt trackOnWindow={true} perspective={2000} > <animated.img style={fade} className='hero__gif' src={badpole} alt="" /></Tilt>
                
                        <p className='hero__text text-white'>BadPoles are BADASS tadpoles who do GOODASS deeds <br/> <br />
                        4,999 BadPoles are shooting out into existence and spraying all over the Ethereum blockchain
                        <br/><br />
                         Help celebrities and influencers to use their status to better causes you care about</p>
                
                </div>
            </div>
       
    )
}
export default HomeHero;