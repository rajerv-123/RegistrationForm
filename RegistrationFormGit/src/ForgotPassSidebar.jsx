import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./ForgotPassSidebar.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [passErrMsg, setPassErrMsg] = useState("");
  const [confirmPassErrMsg, setConfirmPassErrMsg] = useState("");
  const [emailValidate, setEmailValidate] = useState(false);
  const [passValidate, setPassValidate] = useState(false);
  const [confirmPassValidate, setConfirmPassValidate] = useState(false);

  const [show, setShow] = useState(false);

  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  let passwordRegEx =
    /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  // const navigte = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleconfirm = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    let flag = true;
    setEmailErrMsg("");
    setPassErrMsg("");
    setConfirmPassErrMsg("");
    setEmailValidate(false);
    setPassValidate(false);
    setConfirmPassValidate(false);

    // if (email === "") {
    //   flag = false;
    //   setEmailValidate(true);
    //   setEmailErrMsg("Please enter the Email");
    // }
    if (email !== "" && emailRegex.test(email) === false) {
      flag = false;
      setEmailValidate(true);
      setEmailErrMsg("Please enter valid Email ID");
    }
    if (password === "") {
      flag = false;
      setPassValidate(true);
      setPassErrMsg("Please enter the Password");
    }
    if (password !== "" && passwordRegEx.test(password) === false) {
      flag = false;
      setPassValidate(true);
      setPassErrMsg("Password must be combination of 0-9,a-z,A-Z,!@#$%^&*()");
    }
    if (password !== "" && password.length < 8) {
      flag = false;
      setPassValidate(true);
      setPassErrMsg("Password must be 8 characters");
    }
    if (confirmPassword !== " ") {
      flag = false;
      setConfirmPassValidate(true);
      setConfirmPassErrMsg("Please enter the password");
    }
    // if(flag=== true){
    //     navigte("/dashbord")
    // }
  };
  return (
    <>
      <main className={show ? "space-toggle" : null}>
        <header className={`header ${show ? "space-toggle" : null}`}>
          <div className="header-toggle" onClick={() => setShow(!show)}>
            <i
              className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}
            ></i>
          </div>
        </header>

        <aside className={`sidebar ${show ? "show" : null}`}>
          <nav className="nav">
            <div>
              <Link to="/" className="nav-logo">
                <i className={`fas fa-home-alt nav-logo-icon`}></i>
                <span className="nav-logo-name">Homepage</span>
              </Link>

              <div className="nav-list">
                <Link to="/editProfileSidebar" className="nav-link active">
                  <i className='<i class="fa-sharp fa-solid fa-pen-to-square"></i>'></i>
                  <span className="nav-link-name">Edit Profile</span>
                </Link>
                <Link to="/forgotPassSidebar" className="nav-link">
                  <i className="fas fa-hotel nav-link-icon"></i>
                  <span className="nav-link-name">Change Password</span>
                </Link>
                <Link to="/list" className="nav-link">
                  <i className="fas fa-image nav-link-icon"></i>
                  <span className="nav-link-name">List</span>
                </Link>
                <Link to='/PersonalInfo' className='nav-link'>
                  <i className='fas fa-image nav-link-icon'></i>
                  <span className='nav-link-name'>Personal Info</span>
                </Link>
                <Link to='/CustomerOrder' className='nav-link'>
                  <i className='fas fa-image nav-link-icon'></i>
                  <span className='nav-link-name'>CustomerOrder</span>
                </Link>
              
                <Link to="/Cards" className="nav-link">
                <i className="fas fa-image nav-link-icon"></i>
                <span className="nav-link-name">Profile Card</span>
              </Link>
              </div>
            </div>
            <Link to="/login" className="nav-link">
              <i className="fas fa-sign-out nav-link-icon"></i>
              <span className="nav-link-name">Logout</span>
            </Link>
          </nav>
        </aside>

        <div className="container">
          <div className="card box login">
            <div className="card-body">
              <div className="card-title title">Change Password</div>
              <div class="mb-3 as">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className={`form-control ${emailValidate ? "error" : ""}`}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmail}
                  disabled
                />
                <div style={{ color: "red" }}>
                  {" "}
                  {emailErrMsg?.length > 0 && (
                    <p className={style.msg}>{emailErrMsg}</p>
                  )}
                </div>
              </div>
              <div class="mb-3 as">
                <label for="exampleFormControlInput1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${passValidate ? "error" : ""}`}
                  id="exampleFormControlInput2"
                  placeholder="Please enter the Password"
                  value={password}
                  onChange={handlePassword}
                />
                <div style={{ color: "red" }}>
                  {" "}
                  {passErrMsg?.length > 0 && (
                    <p className={style.msg}>{passErrMsg}</p>
                  )}
                </div>
              </div>
              <div class="mb-3 as">
                <label for="exampleFormControlInput1" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className={`form-control ${confirmPassValidate ? "error" : ""
                    }`}
                  id="exampleFormControlInput3"
                  placeholder="Please enter the Password"
                  value={confirmPassword}
                  onChange={handleconfirm}
                />
                <div style={{ color: "red" }}>
                  {" "}
                  {confirmPassErrMsg?.length > 0 && (
                    <p className={style.msg}>{confirmPassErrMsg}</p>
                  )}
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link as={Link} to="/login">
                  <button class="btn btn-primary" onClick={handleLogin}>
                    Submit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ForgotPassword;
