import React, {useState} from "react";

export default {
    title: 'react UseState'
}

let updateValue = (st: number) => {
    return st + 1
}
let getInintValue = () => {
    return 0
}

export const Exaple1 = () => {


    const [counter, setCounter] = useState<number>(getInintValue)


    return (<div>
            <button onClick={() => {
                setCounter(updateValue)
            }}>AddCount
            </button>
            {counter}
        </div>
    )
}


