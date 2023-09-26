import { Link } from "react-router-dom"
import {  useAuth } from "../security/AuthContext"
import { useState } from "react";
import {  retriveHelloworldPaht } from "../api/HelloWorldApiService";



export default function Welcome (){
    const useContext = useAuth()

    const [message, setMessage] = useState(null)
    function callTodosRestApi(){
        retriveHelloworldPaht(useContext.username)
            .then(response=> successfulResponse(response))
            .catch(error=> errorResponse(error))
            .finally(()=> console.log('cleanup'))
    }

    function successfulResponse(response){
        console.log(response.data);
        setMessage(response.data);
    }

    function errorResponse(error){
        console.log(error);
    }





    return(
        <div className="container">
            <h1>Welcome {useContext.username}</h1>
            <div> manage your todo <Link to="/todos">go here</Link></div>
            <div><button className="btn btn-success m-5 p-2" onClick={callTodosRestApi}>Call todos </button></div>
            <div>

               <h1>{message}</h1>
            </div>
        </div>
    )
}