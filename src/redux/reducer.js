import { ADD, DELETE } from "./actionTypes"

const init = []

const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case ADD:
            return state.find(el => el.id == payload.id) ? state.map(el => el.id == payload.id ? { ...el, cont: el.cont+1 } : el) :[...state, payload]







        case DELETE:
            return state.filter(el => el.id != payload)

        default:
            return state
    }
}

export default reducer