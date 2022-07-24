import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import Onoff, {PropsOnOffType} from "./Onoff";
import {Rating} from "./Rating";






export default {

    title: 'OnOff',
    component: Onoff
}
const callback = action('clicked')
export const OnOffWorking = ()=> < Onoff value={true} onClick={callback} />
export const OnOffDisabled = ()=> < Onoff value={false} onClick={x=>x} />

export const RatingChanging = ()=> {
    const [onoff, setOnoff] = useState<boolean>(false)
   return < Onoff value = {onoff} onClick = {setOnoff} />
}
