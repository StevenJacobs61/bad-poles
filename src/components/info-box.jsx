import React from 'react';
import '../App.css';


function InfoBox (props){
   


    return(
        
            <div className={`info-box + ${props.boxStyle}`}><h4 className={`${props.headerStyle}`}>
            {props.header}</h4>
            <ul className="list info-box__list">
            <li className={`list__item + ${props.textStyle}`}>{props.itemOne}</li>
            <li className={`list__item + ${props.textStyle}`}>{props.itemTwo}</li>
            <li className={`list__item + ${props.textStyle}`}>{props.itemThree}</li>
            <li className={`list__item + ${props.textStyle}`}>{props.itemFour}</li>
            
            </ul>
            </div>
    
    )
}
export default InfoBox;