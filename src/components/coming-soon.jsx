import React from 'react';
import '../App.css';
import badpole from '../components/badpoles.gif';


export default function ComingSoon(props){
    return(
        <div className="section bg--black">
        <div className="container overview__container about__container">
            
                <h1 className="text-blue about__header overview__header coming-soon__header">Coming Soon ...</h1>
            
            <div className=" grid overview__grid">
                <p className="overview__text text-white">{props.text}</p>
                 <img className='overview__img coming-soon__img' src={badpole} alt="badpole gif" />
            </div>
        </div>
          
          
      
  </div>
    )
}
