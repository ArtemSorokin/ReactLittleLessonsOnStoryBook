import {spawn} from "child_process";
import {useState} from "react";


export type PropsOnOffType = {
    value: boolean
    onClick: (value:boolean)=>void
}




function Onoff (props: PropsOnOffType) {



    const onStyle = {
     width: '30px',
     height: '30px',
     border: '1px solid black',
     borderRadius: '30px',
     display: 'inline-block',
     backgroundColor: props.value? 'green': 'white'

 }
 const offStyle = {width: '30px',
     height: '30px',
     border: '1px solid black',
     borderRadius: '30px',
     display: 'inline-block',
     marginLeft: '2px',
     backgroundColor: props.value? 'white': 'red'
 }
 const indicatorStyle = {
     width: '15px',
     height: '15px',
     border: '1px solid black',
     borderRadius: '30px',
     display: 'inline-block',
     marginLeft: '2px',
     backgroundColor: props.value? 'green' : 'red'}



    return (
        <div>

            <div style={onStyle} onClick={ ()=>{props.onClick(true)}}>On</div>
            <div style={offStyle} onClick={ ()=>{props.onClick(false)}}>Off</div>
            <div style={indicatorStyle}> </div>


        </div>
    )

}


export default Onoff