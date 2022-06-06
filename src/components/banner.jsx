import React from 'react';
import '../App.css';
import {TextLoop} from "react-text-loop-next";

function Banner (){
    return (
        <div className="section bg--white">
                <div className="container--center banner__container">
            <TextLoop className='banner__header' adjustingSpeed='150' interval='2000' children={["Exclusive Content", "Badass Art", "Utility NFTs"]}>
                   
            </TextLoop>
                </div>
        </div>
    )
}
export default Banner;