import { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/AuthContext";

export default function LoginFrom() {
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [authFail, setAuthFail] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();

  function handleTheemailChange(event) {
    // console.log(event.target.value);
    setUseremail(event.target.value);
  }

  function handleThePasswordChange(event) {
    // console.log(event.target.value);
    setUserpassword(event.target.value);
  }

  function handleSubmit() {
    if (authContext.login(useremail, userpassword)) {
      setUseremail("");
      setUserpassword("");
      navigate('/welcome');
    } else {
      setAuthFail(true);
    }
  }

  return (
    <div className="login">
      {authFail && <div> "Enter correct email and password"</div>}

      <div className="loginFrom">
        <div className="input-from">
          <label name="email">Email:</label>
          <input
            id="email"
            type="text"
            name="email"
            onChange={handleTheemailChange}
            value={useremail}
            placeholder="enter your password"
          />
        </div>

        <div className="input-from">
          <label name="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleThePasswordChange}
            value={userpassword}
            placeholder="enter your password"
          />
        </div>
        <div className="submit-div">
          <input
            type="submit"
            name="Login"
            className="submit"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
