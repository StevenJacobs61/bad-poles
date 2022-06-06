import React from 'react';
import '../App.css';
import { useState } from 'react';

export default function ExpandableInfo (props){
    const [click, setClick] = useState(true);

    const handleClick = () => setClick(!click);

   

    return(
        <div className={`ex-i__container + ${props.containerStyle}`} onClick={handleClick}>
            <h2 className={`ex-i__header + ${props.headerStyle}`}>{props.header}</h2>
            <span className={click ? 'ex-i__icon' : 'expanded__icon ex-i__icon'}>click{props.icon}</span>
            <p className={click ? `ex-i__text + ${props.textStyle}` : `ex-i__text ex-i__text__expanded + ${props.textStyle}`}>{props.text}</p>
        </div>
    )
}