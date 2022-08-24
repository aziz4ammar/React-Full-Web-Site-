import { ADD, DELETE } from "./actionTypes"

const init=[]

const reducer=(state=init,{type,payload})=>{
    switch (type) {
        case ADD:
            return [...state,payload] 
        
        case DELETE:
            return state.filter(el=>el.id!=payload)
    
        default:
            return state
    }
}

export default reducer