import { User } from "../../interfaces/user";

export enum ActionKinds{
    SET_USER = "SET_USER"
}
export interface UserAction {
    type:ActionKinds
    user:User
}

export interface UserState {
    user:null|User
}

const reducer = (state:UserState = {user:null},action:UserAction)=>{
    const {type,user} = action;
    switch(type){
        case ActionKinds.SET_USER:
            return {...state,user }
        default:
            return state;
    }
}
export default reducer;