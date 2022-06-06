import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; 
import '../css/learn-art.css'; 
 

function LearnArt (props){
    return (
        
            <div className={props.backgroundClass}>
                <div className={props.classNames}>
                
                        <h2 className='learn-art__header'>Learn More About the Art!</h2>
                       
                            <NavLink className="learn-art__btn link btn btn--primary" to="/art">Art</NavLink>
                      
                
                
                
                </div>
            </div>
        
        )
    }
    export default LearnArt;