import {ActionType} from "./UncontroledAccordion";

export type stateType = {
    collapsed: boolean
}


export const Togle = 'Togle'
export const reducer = (state: stateType, action: ActionType):stateType => {

    switch (action.type) {
        case Togle:

            return  {
                ...state, collapsed: !state.collapsed
            };
    }

    return state

}