import axios from "axios";

const API = axios.create({baseURL:"https://randomuser.me/api"});

export const fetch_user = async () => {
    return await API.get("");
}