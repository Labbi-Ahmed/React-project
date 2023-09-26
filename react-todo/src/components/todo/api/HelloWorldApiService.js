import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080/api/v1'
    }
)

export const retriveHelloworld = 
    ()=> apiClient.get('/hello-world-bean')

    export const retriveHelloworldBean = 
    ()=> apiClient.get(`/hello-world-bean`);

export const retriveHelloworldPaht = 
(username)=> apiClient.get(`/hello-world/${username}`);