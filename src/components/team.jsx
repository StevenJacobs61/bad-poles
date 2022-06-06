import React from 'react';
import '../App.css';
import cat from '../images/cat-in-the-hat.webp';
import astronaut from '../images/astronaut.webp';
import fishbowl from '../images/fishbowl.webp';


function Team (){
    return (
        <div className="section team__section bg--black">
            
              <h2 className='text-blue team__header about__header'>Team</h2>
            <div className="grid grid--1x3">
                <div className="team__card bg--white">
                    <img src={cat} alt="" className="team__image" />
                    <h3 className="team__name">Ultra Salt</h3>
                    <p className="team__text">Puts salt to shame.</p>
                </div>
                <div className="team__card bg--white">
                    <img src={astronaut} alt="" className="team__image" />
                    <h3 className="team__name">Saltstonaut</h3>
                    <p className="team__text">Makes the salt happen</p>
                </div>
                <div className="team__card bg--white">
                    <img src={fishbowl} alt="" className="team__image" />
                    <h3 className="team__name">Saltwater</h3>
                    <p className="team__text">The Rodeo</p>
                </div>
            </div>

            
        </div>
    )
}
export default Team;