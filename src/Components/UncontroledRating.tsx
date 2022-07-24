import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
type RatingPropsType = {
    //value?: number
    defaultvalue: 0 | 1 | 2 | 3 | 4 | 5
    onClick: (value: RatingValueType) => void
}

export function UncontroledRating(props: RatingPropsType) {

    let [value, setValue] = useState(props.defaultvalue ? props.defaultvalue : false)
    return (<div>
            <Star selected={value > 0} setValue={() => {
                setValue(1);
                props.onClick(1)
            }}/>
            <Star selected={value > 1} setValue={() => {
                setValue(2);
                props.onClick(2)
            }}/>
            <Star selected={value > 2} setValue={() => {
                setValue(3);
                props.onClick(3)
            }}/>
            <Star selected={value > 3} setValue={() => {
                setValue(4);
                props.onClick(4)
            }}/>
            <Star selected={value > 4} setValue={() => {
                setValue(5);
                props.onClick(5)
            }}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    // value: number
    setValue: () => void

}

function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.setValue()
    }}> {props.selected ? (<b> Star </b>) : ("Star")} </span>
}

