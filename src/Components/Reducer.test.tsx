import {reducer} from "./Reducer";
import {stateType} from "./Reducer";



test('collapsed true', ()=> {


 const state: stateType = {
    collapsed: false
}

 const newStatae = reducer(state , {type: "Togle"})


expect(newStatae.collapsed).toBe(true)

})














