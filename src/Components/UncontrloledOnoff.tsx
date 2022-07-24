import {spawn} from "child_process";
import {useState} from "react";


type PropsOnOffType = {
    oClick: (on:boolean)=>void
    defaultvalue: boolean
}









function UncontrloledOnoff (props: PropsOnOffType) {

    let [on, setOn] = useState(props.defaultvalue? props.defaultvalue : false)

    const onStyle = {
     width: '30px',
     height: '30px',
     border: '1px solid black',
     borderRadius: '30px',
     display: 'inline-block',
     backgroundColor: on? 'green': 'white'

 }
 const offStyle = {width: '30px',
     height: '30px',
     border: '1px solid black',
     borderRadius: '30px',
     display: 'inline-block',
     marginLeft: '2px',
     backgroundColor: on? 'white': 'red'
 }
 const indicatorStyle = {
     width: '15px',
     height: '15px',
     border: '1px solid black',
     borderRadius: '30px',
     display: 'inline-block',
     marginLeft: '2px',
     backgroundColor: on ? 'green' : 'red'
 }

    const clickedON = () => {
        setOn(true)
        props.oClick(true)
    }
    const clickedOFF = () => {
        setOn(false)
        props.oClick(false)
    }
    return (
        <div>

            <div style={onStyle} onClick={clickedON}>On</div>
            <div style={offStyle} onClick={clickedOFF}>Off</div>
            <div style={indicatorStyle}></div>


        </div>
    )

}


export default UncontrloledOnoff