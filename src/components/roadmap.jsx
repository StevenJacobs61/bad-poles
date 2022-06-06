import React from 'react';
import '../css/roadmap.css';
import InfoBox from './info-box';
import {GiHorizonRoad} from 'react-icons/gi';


function RoadMap (){
    return (
<div className="section  bg--black roadmao__section">
                <div className="container">
                    <h2 className='text-white roadmap__header'>Roadmap<GiHorizonRoad className='roadmap__icon'/></h2>
                                <div className="grid grid--1x4">
                                <InfoBox headerStyle='info-box__header' textStyle='info-box__text' header='&#60; 25%' itemOne='Idea Forumation' itemTwo='Team Creation' itemThree='Website V1' itemFour='Art Design' boxStyle='info-box--primary info-box__shadow roadmap__box'/>
                                <InfoBox headerStyle='info-box__header' textStyle='info-box__text' header='&#60; 50%' itemOne='Idea Forumation' itemTwo='Team Creation' itemThree='Website V1' itemFour='Art Design' boxStyle='info-box--primary info-box__shadow roadmap__box'/>
                                <InfoBox headerStyle='info-box__header' textStyle='info-box__text' header='&#60; 75%' itemOne='Idea Forumation' itemTwo='Team Creation' itemThree='Website V1' itemFour='Art Design' boxStyle='info-box--primary info-box__shadow roadmap__box'/>
                                <InfoBox headerStyle='info-box__header' textStyle='info-box__text' header='100%' itemOne='Idea Forumation' itemTwo='Team Creation' itemThree='Website V1' itemFour='Art Design' boxStyle='info-box--primary info-box__shadow roadmap__box'/>
                               
                    </div>
                </div>
</div>
           
    )
}
export default RoadMap;