import {useEffect, useState} from "react";


type CloackPropsType = {

}




export const Cloack = (props: CloackPropsType)=> {


    const timedecoratorZero = (num:number)=> num < 10? '0' +num : num

    let [timeValue, setTimeValue] = useState(new Date())

    useEffect(()=>{


       let CloackTickInterval =  setInterval(()=>{
            console.log('tick')
            setTimeValue(new Date())}, 1000)

        return ()=> clearInterval(CloackTickInterval)

    }, [])




    return <>
    <span>{timedecoratorZero(timeValue.getHours())}</span>:
    <span>{timedecoratorZero(timeValue.getMinutes())}</span>:
    <span>{timedecoratorZero(timeValue.getSeconds())}</span>
        <div>
            {timeValue.toLocaleTimeString()}
        </div>

    </>
}













