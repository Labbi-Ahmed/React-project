import { useEffect, useState } from "react";
import { useAuth } from "../security/AuthContext";
import { deleteTodoFromDB, retriveAllTodosForUserName } from "../api/TodosApiService";
import {  useNavigate } from "react-router-dom";

export default function ListTodo() {
  
  const [data, setData] = useState([])
  const [message , setMessage] = useState("")
  const authContext = useAuth();
  const username = authContext.username;
  const navigate = useNavigate();

  function refrashTodos() {
    retriveAllTodosForUserName(username)
      .then((response) => {setData(response.data)})
      .catch((error) => console.error("Error to fetching data: ", error));
  }
  useEffect(() => refrashTodos(),[]);
  
  function deleteTodoById(id){
    deleteTodoFromDB(username, id).then(()=>{
      setMessage(`Delete of todo with id=${id} successful`)
      refrashTodos()})
    .catch(err => console.log(err))
    //console.log("click " +id);
  }

  function updateTodo(id){
    navigate(`/todo/${id}`)
  }




  return (
    <div className="container">
      <h1>Things you to do. </h1>
      {message && <div className="alert alert-warning">{message}</div>}
      <table className="table border">
        <thead>
          <tr>
            <th>Description</th>
            <th>Is Done?</th>
            <th>Target Date</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {data.map((dt) => (
            <tr key={dt.id}>
              <td>{dt.description}</td>
              <td>{dt.done.toString()}</td>
              <td>{dt.targetDate.toString()}</td>
              <td><button className="btn btn-warning" onClick={() => deleteTodoById(dt.id)}>Delete</button></td>
              <td><button className="btn btn-success" onClick={() => updateTodo(dt.id)}>Update</button></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
