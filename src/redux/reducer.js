import { ADD } from "./actionTypes"

const init=[]

const reducer=(state=init,{type,payload})=>{
    switch (type) {
        case ADD:
            return [...state,payload] 
    
        default:
            return state
    }
}

export default reducer