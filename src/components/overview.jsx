import React from 'react';
import '../App.css';
import wooleyHat from '../images/wooley-hat.webp';
import Tilt from 'react-parallax-tilt';

function Overview (){
    return (
        <div className="section bg--black">
              <div className="container overview__container about__container">
                  
                      <h1 className="text-blue about__header overview__header">Overview  </h1>
                  
                  <div className="grid--1x2 grid overview__grid">
                      <p className="overview__text text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi autem aliquam eum iste rerum, fugit nobis. Provident enim, natus necessitatibus facilis sit porro quos rerum aliquam accusantium eligendi reiciendis vero, minus repellat adipisci corrupti esse autem dicta sed beatae sequi odio voluptatum iste at! Minima laboriosam dolorem totam sunt esse dolor culpa excepturi doloribus in.</p>
                     <Tilt trackOnWindow={true}><img className='overview__img' src={wooleyHat} alt="wooley hat badpole" /></Tilt>
                  </div>
              </div>
                
                
            
        </div>
    )
}
export default Overview;