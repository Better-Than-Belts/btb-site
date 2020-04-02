import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = (props) => {
    return (
        <div>
            {
            props.accordionData.map((item, index) => {
                return (
                    <AccordionItem title={item.title}>
                        {item.content}
                    </AccordionItem>
                )
            })
            }

        </div>
     
    );
};

export default Accordion;