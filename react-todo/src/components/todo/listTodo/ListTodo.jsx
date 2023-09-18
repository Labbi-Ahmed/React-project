import { useEffect, useState } from "react";
import { useAuth } from "../security/AuthContext";

export default function ListTodo() {
  const today = new Date();

  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );

  const todos = [
    { id: 1, description: "Learn Java", done: false, targetDate: targetDate },
    { id: 2, description: "Learn AWS", done: false, targetDate: targetDate },
    { id: 3, description: "Learn CSS", done: false, targetDate: targetDate },
    { id: 4, description: "Learn Spring", done: false, targetDate: targetDate },
    {
      id: 5,
      description: "Learn Spring boot",
      done: false,
      targetDate: targetDate,
    },
  ];

  const [data, setData] = useState([])
  const url =
    `http://localhost:8080/api/v1/todos/labbi@gmail.com`;


  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {setData(responseData)})
      .catch((error) => console.error("Error to fetching data: ", error));
    }, []);

    console.log(data);
  return (
    <div className="container">
      <h1>Things you to do. </h1>
      <table className="table border">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Is Done?</th>
            <th>Target Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((dt) => (
            <tr key={dt.id}>
              <td>{dt.id}</td>
              <td>{dt.descripton}</td>
              <td>{dt.done.toString()}</td>
              <td>{dt.targetDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
