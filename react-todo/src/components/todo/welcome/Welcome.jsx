import { useParams } from "react-router-dom"

export default function Welcome (){

    const {username} = useParams();
    return(
        <div>
            <h1>Welcome {username}</h1>
            manage your todo <a href="/todos">go here</a>
        </div>
    )
}