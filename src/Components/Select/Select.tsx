import React, {useState, KeyboardEvent, useEffect} from "react";
import stl from './Select.module.css'

type ItemType = {
    title: string,
    value?: any

}

export type selectPropsType = {

    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: selectPropsType) {
 const [active, setActive] = useState(false)
 const [hoveredItemValue, sethoveredItemValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredItemValue)

    useEffect(
        ()=> {
            sethoveredItemValue(props.value)
        }, [props.value]  )


    const onItemClick = (value: any) => {
        props.onChange(value);
        showItems()
    }

    const showItems = ()=> setActive(!active)

    const pressButtonUp = (e: KeyboardEvent<HTMLDivElement>) => {
     debugger
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItemValue) {
                    const pretendentIndex = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentIndex) {
                        props.onChange(pretendentIndex.value)
                        break;
                    }
                }
            }
        }
        if(e.key === "Enter" || e.key === 'Escape'){
            setActive(false)
        }
    }




    return (

        <>
            <div className={stl.select} onKeyUp={pressButtonUp} tabIndex={0}>
                <span className={stl.main} onClick={showItems}> {selectedItem && selectedItem.title} </span>
                {
                    active &&
                    <div className={stl.items}>
                        {props.items.map(i => <div
                            className={stl.select + " " + (hoveredItem === i ? stl.selectedItem : '')}
                            key={i.value}
                            onMouseEnter={() => {
                                sethoveredItemValue(i.value)
                            }}
                            onClick={() => {
                                onItemClick(i.value)
                            }}
                        > {i.title} </div>)}
                    </div>
                }
            </div>
        </>
    )

}