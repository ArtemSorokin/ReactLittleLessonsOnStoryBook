import React, {useReducer} from "react";
import {reducer, Togle} from "./Reducer";

export type AccordionPropsType = {
    titleValue: string
    // collapsed?: boolean
}

export type ActionType = {
    type: 'Togle'
}


function UncontroledAccordion(props: AccordionPropsType) {

    console.log('Uncontroled Accordion rendered')

    // let [collapsed, setCollapsed] = useState(false)
 let [state, dispath] = useReducer(reducer, {collapsed: false})

    return (<div>
        <AccordionTitle title={props.titleValue}   onClick={()=>{dispath({type: Togle})} }/>

        { !state.collapsed && <AccordionBody/>}
    </div>);
}

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('title Accordion rendered')

    return (
        <div>
            <h3 onClick={()=>{props.onClick()}}>----{props.title}</h3>
        </div>
    )
}

function AccordionBody() {
    console.log('body Accordion rendered')

    return (
        <div>
            <ul>
                <li> 1</li>
                <li> 2</li>
                <li> 3</li>

            </ul>
        </div>
    )
}

export default UncontroledAccordion;

