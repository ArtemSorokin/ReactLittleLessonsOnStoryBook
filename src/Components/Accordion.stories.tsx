import React, {useRef, useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType,} from "./Accordion";







export default {

    title: 'Accordion',
    component: Accordion
}
const callback = action('clicked')
const callBackOnCLick = action ('Click on Accrordion Item')


export const MenuAccordion = ()=> < Accordion collapsed={false} setaccordionCollapsed={callback} titleValue={'Menu'}  items={ [{title: 'Artem', value:1}, {title: 'Ivan', value:2}, {title: 'Petr', value:3}]} onClick={callBackOnCLick}/>
export const UsersAccordion = ()=> < Accordion collapsed={true} setaccordionCollapsed={callback} titleValue={'Users'}  items={ [{title: 'Artem', value:1}, {title: 'Ivan', value:2}, {title: 'Petr', value:3}]} onClick={callBackOnCLick}/>



export const AccordinAction = () => {

    let [AccordionValue, SetAccordionValue] = useState<boolean>(false)


   return <Accordion titleValue={'Users'} setaccordionCollapsed={()=>{SetAccordionValue(!AccordionValue)}} collapsed={AccordionValue}
                     items={ [{title: 'Artem', value:1}, {title: 'Ivan', value:2}, {title: 'Petr', value:3}] }
                     onClick={callBackOnCLick}/>

}