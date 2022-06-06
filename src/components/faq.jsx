import React from 'react';
import '../App.css';
import FAQItem from './faq__item';
import{NavLink} from 'react-router-dom';


function FAQ (){

    const linkElement = 
    <NavLink to='/mint' className={'link faq__link'}>&#60;--  Click Here  --&#62;</NavLink> ;


    return (
        <div className="section faq__section">
            <div className="faq__container">
             <h2 className='faq__header about__header'>FAQ</h2>
             <ul className="list">
                 <li className="item_container">
                     <FAQItem question=' What is the Initial Minting Price? ' textOne='-  0.02 Eth presale' textTwo="-  0.04 Eth Public Sale"/><br />
                 </li>
                 <li className="item__container">
                     <FAQItem question='Launch Date?' textOne='-  Presale: 10/D/03/M/2022' textTwo="-  Public Sale: 14/D/03/M/2022"/>
                 </li>
                 <li className="item__container">
                     <FAQItem question='Total Supply?' textOne='-  4,999 Bad Poles in Total' textTwo="- Each Saltier than the Last"/>
                 </li>
                 <li className="item__container">
                     <FAQItem question='How to Mint?' textOne= '-  Navigate to Mint Page' link={linkElement}/>
                 </li>
                 <li className="item__container">
                     <FAQItem question='First Donation Date?' textOne='-  We Start Donating at Presale!' textTwo=" -  Staring at 5% of Sales"/>
                 </li>
             </ul>


            </div>
         </div>       
                
    )
   
        
        
        
          
         
        
      
            
          
}
export default FAQ;