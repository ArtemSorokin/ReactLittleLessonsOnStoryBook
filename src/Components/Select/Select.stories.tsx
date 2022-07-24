import React, {useState} from "react";
import {Select} from "./Select";

import {action} from "@storybook/addon-actions";
import {Accordion} from "../Accordion";


export default {
    title: 'Select',
    component: Select
}

export const ExampleSelect = () => {

    const [selectValue, setSelectValue] = useState('2')

    return (
        <Select
            value={selectValue}
            onChange={setSelectValue}
            items={[
                {value: '1', title:'Moscow'},
                {value: '2', title:'Paris'},
                {value: '3', title:'Berlin'},
                {value: '4', title:'Minsk'}
            ]}
        />
    )
}
export const SelectWithoutValue = () => {
    return (
        <Select

            onChange={action('value changed')}
            items={[
                {value: '1', title:'Moscow'},
                {value: '2', title:'Paris'},
                {value: '3', title:'Berlin'},
                {value: '4', title:'Minsk'}
            ]}
        />
    )
}