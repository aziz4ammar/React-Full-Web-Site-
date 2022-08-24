import { ADD,} from "./actionTypes"


export const add=(newTask)=>{
    return {
        type:ADD,
        payload:newTask
    }
}