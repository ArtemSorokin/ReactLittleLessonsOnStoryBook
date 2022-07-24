import React from "react";
import {action} from "@storybook/addon-actions";
import UncontrloledOnoff from "./UncontrloledOnoff";




export default {
    title: 'UncontrloledOnoff',
    component: UncontrloledOnoff
}

export const On = ()=> <UncontrloledOnoff defaultvalue={true}   oClick={z=>z}/>
export const Off = ()=> <UncontrloledOnoff defaultvalue={false}  oClick={z=>z}/>



