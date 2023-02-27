

import style from './AnalogClock.module.css'





export const AnalogClock = ()=> {
    return <div className={style.body}>

<div className={style.clock} >

    <div className={style.hour}>
        <div className={style.hours}> </div>
    </div>
<div className={style.minute}>
    <div className={style.minutes}> </div>
</div>
    <div className={style.second}>
        <div className={style.seconds}> </div>
    </div>

</div>
    </div>
}







