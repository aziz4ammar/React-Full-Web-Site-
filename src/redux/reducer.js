import { ADD , DECREMANT, DELETE , INCREMANT, SEARCH } from "./actionTypes"

const init = []


const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case ADD:
            return state.find(el => el.id == payload.id) ? state.map(el => el.id == payload.id ? { ...el, cont: el.cont+1 } : el) :[...state, payload]



        case DELETE:
            return state.filter(el => el.id != payload)

        case INCREMANT:
            return state.map(el=>el.id==payload?{...el,cont:el.cont+1}:el)
        
        case DECREMANT:
            return state.map(el=>el.id==payload?{...el,cont:el.cont-1}:el)

        case SEARCH:
            return state.map(el=>el.id==payload?{...el,cont:el.cont-1}:el)

        default:
            return state
    }
}

export default reducer