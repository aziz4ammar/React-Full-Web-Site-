import { ADD,DELETE} from "./actionTypes"


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