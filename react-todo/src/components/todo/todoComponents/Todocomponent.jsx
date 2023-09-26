import { useParams } from "react-router-dom"
import { retriveTodoApi, updateTodo } from "../api/TodosApiService";
import { useAuth } from "../security/AuthContext";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { isDate } from "moment";



export default function TodoComponent(){
    const {id} = useParams();
    const authContext = useAuth();
    const username = authContext.username;
    const [description, setDescription] = useState('');
    const [targetDate, setTargetDate] = useState('');
    const [creationDate, setCreationDate] = useState('');


    function retriveTodos(){
        retriveTodoApi(username, id)
        .then(response=> {
           
            setDescription(response.data.description)
            setTargetDate(response.data.targetDate)
            setCreationDate(response.data.creationDate)
            console.log(description);
        })
        .catch(err=> console.log(err))
    }

    useEffect( ()=> retriveTodos(),[id])

    function onSubmit(values){
        const todo = {
            id:id,
            email: username,
            description:values.description,
            creationDate: creationDate,
            targetDate:values.targetDate, 
            done: false
        }
        console.log(todo);

        updateTodo(todo).then(response=> {
            console.log("updated");
            console.log(response)

        })
        .catch(err => console.log(err))
    }

    function validate(values){
        let errors = {
            // description: 'Enter a valid description',
            // targetDate: 'Enter a valid Target Date'
        }
        if(values.description.length < 5)
        {
            errors.description = 'Enter at least 5 characters on Description';
        }

        if(values.targetDate == '')
        {
            errors.targetDate = 'Enter valid date';
        }
        console.log(isDate);
        return errors
    }
    return(
        <div className="container">
            <h1>Enter Details</h1>
           
            <div>
                
                <Formik initialValues={{description, targetDate}}
                 enableReinitialize={true}
                 onSubmit={onSubmit}
                 validate={validate}
                 validateOnChange={false}
                 validateOnBlur={false}
                 >
                    
                    {
                        (props) =>(
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />

                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field type="date" className="form-control" name="targetDate"/>
                                </fieldset>
                                <div>
                                <button className="btn btn-success mt-5" type="submit">Save</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>

            </div>
        </div>
    )
}