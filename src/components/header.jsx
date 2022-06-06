import React from 'react';
import '../App.css';
import {animated, useSpring} from 'react-spring';


function Header (props){

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
            <animated.div style={fade} className="page__header__container">
             <h1 className='page__header__text'>{props.name}</h1>
            </animated.div>
         </div>       
                
    )
        
}
export default Header;