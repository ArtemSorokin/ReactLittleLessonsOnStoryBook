import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./Components/Rating";
import {Accordion} from "./Components/Accordion";
import UncontrloledOnoff from "./Components/UncontrloledOnoff";
import UncontroledAccordion from "./Components/UncontroledAccordion";
import {UncontroledRating} from "./Components/UncontroledRating";
import Onoff from "./Components/Onoff";
import {PropsOnOffType} from "./Components/Onoff";



function App(props: any) {

        let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setaccordionCollapsed] = useState(false);
    let [on, setOn] = useState(false)
        return (
        <div>


                <Rating value={ratingValue} onClick={setRatingValue} />
                <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} setaccordionCollapsed={ ()=>{setaccordionCollapsed(!accordionCollapsed)}}/>

                {/*<Onoff value={on} onClick={setOn}/>*/}
            <UncontrloledOnoff oClick={setOn} defaultvalue={true}/> {on.toString()}


            </div>


    );
}
{/*type PageTitlePropsType = {*/}
{/*    title: string*/}
{/*}*/}
{/*function PageTitle(props: PageTitlePropsType) {*/}
{/*return <h1>{props.title}</h1>*/}
{/*}*/}


export default App;


