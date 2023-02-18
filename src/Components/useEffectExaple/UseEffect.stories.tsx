import React, {useEffect, useState} from "react";

export default {
    title: 'react useEffect'
}

let updateValue = (st: number) => {
    return st + 1
}
let getInintValue = () => {
    return 0
}

export const Exaple1 = () => {


    const [counter, setCounter] = useState<number>(getInintValue)
    const [fake, setFake] = useState<number>(1)


    useEffect(()=>{
        console.log('useEffect work every time')
        document.title = counter.toString()
    })
    useEffect(()=>{
        console.log('useEffect work one time')


    }, [])
    useEffect(()=>{
        console.log('useEffect work when counter need to change')
    },[counter]) /// можно передать несколько


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
        </div>
    )
}


