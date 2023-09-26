
import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080/api/v1'
    }
)

// http://localhost:8080/api/v1/todos/labbi@gmail.com


export const retriveAllTodosForUserName = 
    (useremail)=> {
        return apiClient.get(`/todos/${useremail}`)
        
    }

export const deleteTodoFromDB = 
(useremail,id)=> {
    return apiClient.delete(`/todos/${useremail}/todos/${id}`)
    
}

export const retriveTodoApi = 
(useremail,id)=> {
    return apiClient.get(`/todos/update/${useremail}/todos/${id}`)
    
}

export const updateTodo = 
(todo)=> {
    return apiClient.put(`/todos/update-todo`, todo)
    
}