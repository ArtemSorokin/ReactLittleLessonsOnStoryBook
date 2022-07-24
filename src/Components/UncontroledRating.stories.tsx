import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontroledRating} from "./UncontroledRating";


export default {

    title: 'UncontroledRating stories',
    component: UncontroledRating
}

const callback = action('pizda')

export const RatingOne = () => <UncontroledRating defaultvalue={1} onClick={callback}/>
export const RatingTwo = () => <UncontroledRating defaultvalue={2} onClick={callback}/>
export const RatingThree = () => <UncontroledRating defaultvalue={3} onClick={callback}/>
export const RatingFour = () => <UncontroledRating defaultvalue={4} onClick={callback}/>
export const RatingFive = () => <UncontroledRating defaultvalue={5} onClick={callback}/>


