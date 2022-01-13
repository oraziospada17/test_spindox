import { AppDispatch } from "..";
import * as api from '../api/index';
import { ActionKinds } from "../context/reducers/user";
export const fetchUser = ()=>async(dispatch:AppDispatch)=>{
    try {
        let {data} = await api.fetch_user();
        const {results} = data;
        const user = results && results.length > 0 ? results[0] : null;
        dispatch({type:ActionKinds.SET_USER,user});
    } catch (error:any) {
        console.error(error);
    }
}