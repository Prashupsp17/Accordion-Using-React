
import { useState } from 'react';

const Accordion = ({data}) => {
 const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);

 const toggleActiveAccordion = (index) => {
     if(index === activeAccordionIndex){
        setActiveAccordionIndex(null);
     }else{
        setActiveAccordionIndex(index);
     }
 }
  return (
    <div className="coverup">
        {
            data.map((item,index) => {
                return(
                    <div className='prashant' key={index}>
                        <div onClick={() => toggleActiveAccordion(index)} className='question'>{item.Question} {
                            index===activeAccordionIndex ? <span className='icon'>-</span> : <span  className='icon'>+</span>
                        }</div>
                      
                            <div className={index===activeAccordionIndex ? "answer":"hidden"}>{item.Answer}</div>
                        </div>
                )
            })
        }
        </div>
  )
}

export default Accordion