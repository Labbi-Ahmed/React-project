import { Link, useParams } from "react-router-dom"
import {  useAuth } from "../security/AuthContext"

export default function Welcome (){
    const useContext = useAuth()
    return(
        <div>
            <h1>Welcome {useContext.username}</h1>
            manage your todo <Link to="/todos">go here</Link>
        </div>
    )
}