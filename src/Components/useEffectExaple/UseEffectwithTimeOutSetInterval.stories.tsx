import React, {useEffect, useState} from "react";

export default {
    title: 'react useEffect'
}

let updateValue = (st: number) => {
    return st + 1
}
let getInintValue = () => {
    return 5
}

export const UseEffectTime = () => {


    const [counter, setCounter] = useState<number>(getInintValue)
    const [fake, setFake] = useState<number>(1)



    // useEffect(()=>{
    //     console.log('setTimeOut in use Effect')
    //
    //     setTimeout( ()=>{
    //         document.title = counter.toString()
    //     }, 3000)
    //
    //
    // }, [counter])

    useEffect(()=>{
        console.log('setInterval in use Effect')

        setInterval( ()=>{
           setCounter(st=> st+1 )
        }, 1000)


    },[])

    let a = new Date().getSeconds()
    let h = new Date().getHours()
    let m = new Date().getMinutes()

    let [time, setTime] = useState(a)

        useEffect(()=>{
        console.log('setInterval clock')

        setInterval( ()=>{
            setTime(st=> st+1 )
        }, 1000)


    },[])



    return (<div>
            <button onClick={() => {
                setCounter(updateValue)
            }}>AddCount
            </button>
            {counter}

            <button onClick={() => {
                setFake(updateValue)
            }}>fake
            </button>
            {fake}

            <div>{
                `${h}:${m}:${time}`
            }
            </div>
        </div>
    )
}


