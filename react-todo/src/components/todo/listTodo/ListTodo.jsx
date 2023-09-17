


export default function ListTodo(){
    const today = new Date()

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());

    const todos = [
        {id: 1, description: "Learn Java", done: false, targetDate: targetDate},
        {id: 2, description: "Learn AWS", done: false, targetDate: targetDate},
        {id: 3, description: "Learn CSS", done: false, targetDate: targetDate},
        {id: 4, description: "Learn Spring", done: false, targetDate: targetDate},
        {id: 5, description: "Learn Spring boot", done: false, targetDate: targetDate}
    ]

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
              { 
                todos.map(
                    todo=> (
                        <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.description}</td>
                        <td>{todo.done.toString()}</td>
                        <td>{todo.targetDate.toDateString()}</td>
                    </tr>
                    ))
              }

               
               </tbody>
            </table>
        </div>
    )
}