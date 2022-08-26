import { ADD , DELETE , INCREMANT , DECREMANT, DOLLAR, SEARCH} from "./actionTypes"


export const add=(newTask)=>{
    return {
        type:ADD,
        payload:newTask
    }
}

export const del=(id)=>{
    return {
        type:DELETE,
        payload:id
    }
}
export const inc=(id)=>{
    return {
        type:INCREMANT,
        payload:id
    }
}
export const dec=(id)=>{
    return {
        type:DECREMANT,
        payload:id
    }
}
export const tod=(id)=>{
    return {
        type:DOLLAR,
        payload:id
    }
}
export const ser=(id)=>{
    return {
        type:SEARCH,
        payload:id
    }
}