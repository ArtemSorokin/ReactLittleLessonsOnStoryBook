import React from "react";


 type itemType ={
    title: string,
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setaccordionCollapsed: ()=>void
    items: itemType[]
    onClick: (value: any)=>void
}

export function Accordion(props: AccordionPropsType ) {
    return (<div>
        <AccordionTitle title={props.titleValue}  setaccordionCollapsed={props.setaccordionCollapsed}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}

    </div>);
}

type AccordionTitlePropsType = {
    title: string
    setaccordionCollapsed: ()=>void

}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('Render AccordionTitle')
    return (
        <div>
            <h3 onClick={(e) => props.setaccordionCollapsed()}>----{props.title}</h3>
        </div>
    )
}

export type AccordionBodyPropsType = {
    items: itemType[]
    onClick: (value: any)=>void
}

function AccordionBody (props: AccordionBodyPropsType) {
    console.log('Render AccordionBody')
    return (
            <ul>
                {props.items.map((i, index)=> <li onClick={  ()=>{props.onClick(i.value) } } key={index}> {i.title} </li>)}

            </ul>
    )
}

//