

import style from './AnalogClock.module.css'
import {useEffect} from "react";





export const AnalogClock = ()=> {


useEffect(()=>{

    debugger

    const deg = 6;
    // const hours = document.querySelector('#hours');
    // const seconds = document.querySelector('#seconds');
    // const minutes = document.querySelector('#minute');

    setInterval(() => {
        let day = new Date();
        let hour = day.getHours() * 30;
        let minute = day.getMinutes() * deg;
        let second = day.getSeconds() * deg;

// каким-то образом находи id в элементе без queryselectora
// @ts-ignore
        hours.style.transform = `rotateZ(${(hour) + (minute/12)}deg)`;
        // @ts-ignore
        minutes.style.transform = `rotateZ(${minute}deg)`;
        // @ts-ignore
        seconds.style.transform  = `rotateZ(${second}deg)`;
    }, 1000)

}, [])




    return <div className={style.body}>

<div className={style.clock} >

    <div className={style.hour}>
        <div className={style.hours} id={'hours'}> </div>
    </div>
<div className={style.minute}>
    <div className={style.minutes} id={'minutes'}> </div>
</div>
    <div className={style.second}>
        <div className={style.seconds} id={'seconds'}> </div>
    </div>

</div>
    </div>
}








