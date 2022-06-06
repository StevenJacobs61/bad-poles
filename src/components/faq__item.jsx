import React from 'react';
import '../App.css';
import {BsChevronCompactDown} from 'react-icons/bs';
import {useState} from 'react';



function FAQItem (props) {

    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);

    

return(

         <faqItem>
             <h3 className="faq__question ">{props.question}</h3>
                 <BsChevronCompactDown className={click ? 'faq-chevron' :
                 'faq-chevron faq-chevron__expanded'} onClick={handleClick}/>
                 <ul className={click ? "list faq__list collapsible__faq" :
                 "list faq__list collapsible__faq faq__expanded"}>
                     <li className="faq__item link">{props.textOne}</li>
                     <li className="faq__item link">{props.textTwo}</li>
                     <li className="faq__item link">{props.textThree}</li>
                     <li className="faq__item link">{props.link}</li>
                     </ul>
         </faqItem>
                 )
                }

export default FAQItem;