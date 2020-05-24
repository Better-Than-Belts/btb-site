import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = (props) => {
    return (
        <div>
            {
                props.accordionData.map((item, index) => {
                    return (
                        <AccordionItem title={item.title} color={props.color}>
                            {item.content}
                        </AccordionItem>
                    )
                })
            }

        </div>

    );
};

export default Accordion;