import { useState } from 'react';
import './LoginForm.css'
import { useNavigate } from 'react-router-dom';

export default function LoginFrom() {
  const [useremail, setUseremail] = useState('')
  const [userpassword, setUserpassword] = useState('')
  const [loginsucess, setLoginSucess] = useState(false)
  const [authFail, setAuthFail] = useState(false)
  const navigate = useNavigate();

  function handleTheemailChange(event){
    // console.log(event.target.value);
    setUseremail(event.target.value)

  }

  function handleThePasswordChange(event){
    // console.log(event.target.value);
    setUserpassword(event.target.value)

  }

  function handleSubmit(){
    if(useremail === 'labib@gmail.com' && userpassword==='1234'){
      setLoginSucess (true)
      setAuthFail(false)
     // const name = useremail;
      setUserpassword('')
      navigate(`/welcome/${useremail}`)
      setUseremail('')
    }else{
       setAuthFail(true)
       setLoginSucess(false)
    }
     

  }



  
  

  return (
    <div className="login">
     {loginsucess  && <div>"Login successful"</div>}
     {authFail && <div> "Enter correct email and password"</div>}

      
    <div className='loginFrom'>
    <div className='input-from'>
        <label name='email'>Email:</label>
        <input id='email' type='text' name='email' 
          onChange={handleTheemailChange} 
          value={useremail} 
          placeholder='enter your password' 
        />
      </div>

      <div className='input-from'>
        <label name='password'>Password:</label>
        <input id='password' type='password' name='password' 
          onChange={handleThePasswordChange}
          value={userpassword} 
          placeholder='enter your password' 
        />

      </div>
      <div className='submit-div'>
        <input type="submit" name='Login' className='submit' onClick={handleSubmit}/>
      </div>


    </div>

    </div>
  );
}
