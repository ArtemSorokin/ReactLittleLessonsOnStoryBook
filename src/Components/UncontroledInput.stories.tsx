import React, {ChangeEvent,MouseEvent, useRef, useState} from 'react';
import Onoff from "./Onoff";
import {Simulate} from "react-dom/test-utils";
import {specialChars} from "@testing-library/user-event";
import {action} from "@storybook/addon-actions";



export default {
  title: 'UncontroledInput',
  //component: Onoff
}
 export const uncontroledInput = () => <input />
 export const controledInputFix = () => <input value={'ddd'} />
 export const TrackInput = () => {

   const [value, setValue] =  useState('')
const onchange = (e: ChangeEvent<HTMLInputElement>)=> {
    const actualValue = e.currentTarget.value
    setValue(actualValue)

}
     return <> <input onChange={onchange}/> -  {value} </>
 }


 export const ControledInput = () => {

    let [parentValue, setParentValue] = useState('')

    const saveValue = (e: ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.value)
    }                                         // сохраняет значение для инпута

    return <input value={parentValue} onChange={ saveValue }/>

}

export const Controledcheckbox = () => {

     let [parentValue, setParentValue] = useState(true)

    const saveCheck = (e: ChangeEvent<HTMLInputElement>)=> {

         const actualvalue = e.currentTarget.checked
         setParentValue(actualvalue)

    }

    return <input type='checkbox' checked={parentValue}  onChange={saveCheck}/>

}

export const TrackInputByButtonPressed = () => {


    const InputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] =  useState('')
    const save = ()=> {
         const el = InputRef.current as HTMLInputElement // разобрать получше
        setValue(el.value)

    }


    return <> <input ref={InputRef}/>  <button onClick={save}>Save</button>  ActualValue-  {value} </>
}


export const ControledSelect = () => {

    let [parentValue, setParentValue] = useState('2' )

    const saveSelectValue = (e: ChangeEvent<HTMLSelectElement>)=> {

        const actualvalue = e.currentTarget.value
        setParentValue(actualvalue)

    }

    return <select value={parentValue}  onChange={ saveSelectValue}>
            <option value={'1'}>null</option>
            <option value={'2'}>Minsk</option>
            <option value={'3'}>Kiev</option>
            <option value={'4'}>Moscow</option>



    </select>


}
