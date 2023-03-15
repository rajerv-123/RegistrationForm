// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import style from "./forgotPass.css";

// function ForgotPassword() {
//   // const[email,setEmail] = useState("");
//   // const[currentPass,setCurrentPass] = useState("");
//   // const[newPass,setNewPass] = useState("");
//   // const[confirmPass, setConfirmPass] = useState("");

//   // const[emailErrMsg,setEmailErrMsg] = useState("");
//   // const[currentPassErrMsg,setcurrentPassErrMsg] = useState("");
//   // const[newPassErrMsg,setnewPassErrMsg] = useState("");
//   // const[confirmPassErrMsg,setconfirmPassErrMsg] = useState("");

//   // const[emailValidate,setEmailValidate] = useState(false);
//   // const[currentPassValidate,setcurrentPassValidate] = useState(false);
//   // const[newPassValidate,setnewPassValidate] = useState(false);
//   // const[confirmPassValidate,setconfirmPassValidate] = useState(false);

//   // // Regular Expression
//   // let emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
//   // let passwordRegEx = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

//   // const handleEmail = (e)=>{
//   //   setEmail(e.target.value);
//   // }
//   // const handleCurrentPass = (e)=>{
//   //   setCurrentPass(e.target.value);
//   // }
//   // const handleNewPass = (e)=>{
//   //   setNewPass(e.target.value);
//   // }
//   // const handleConfirmPass = (e)=>{
//   //   setConfirmPass(e.target.value);
//   // }

//   // const handleForgot = (e)=>{
//   //   e.preventDefault();
//   //   let msg = true;
//   //   setEmailErrMsg("");
//   //   setcurrentPassErrMsg("");
//   //   setnewPassErrMsg("");
//   //   setconfirmPassErrMsg("");
    
//   //   setEmailValidate(false);
//   //   setcurrentPassValidate(false);
//   //   setnewPassValidate(false);
//   //   setconfirmPassValidate(false);

//   //   if(email === "")
//   //   setEmailValidate(true);
//   //   setEmailErrMsg("please enter the email");

//   //   if(email !== "" && emailRegex.test(email)=== false){
//   //     msg = false;
//   //     setEmailValidate(true)
//   //     setEmailErrMsg("Please enter valid Email ID")
//   //   }
//   //   if(currentPass === " " && passwordRegEx.test(email)=== false){
//   //     msg = false;
//   //     setcurrentPassValidate(true);
//   //     setconfirmPassErrMsg("enter your current password");
//   //   }
//   //   if(newPass === " " && passwordRegEx.test(email)=== false){
//   //     msg = false;
//   //     setnewPassValidate(true);
//   //     setnewPassErrMsg("Enter new password");
//   // }

//   //   if(confirmPass == " " && passwordRegEx.test(email)=== false){
//   //     msg = false;
//   //     setconfirmPassValidate(true);
//   //     setconfirmPassErrMsg("password does not match");
//   //   }

// return (
//     <>
//       <div className="auth-form-container main">
//         <h2 style={{color:'white'}}>Forgot Password</h2>
//         <form className="login-form">
//           <label className="text-light " htmlFor="email">
//             Email
//           </label>
//           <input
//           style={{color:"red"}}
//             // className={`form-control ${emailValidate? "error":""}`}
//             // value={email} 
//             // onChange={handleEmail}
//             type="email"
//             placeholder="abc123@gmail.com"
//           />
//           {/* {emailErrMsg?.length>0 && (
//           <p className={style.msg}>{emailErrMsg}</p>
//           )} */}

//           <label htmlFor="password">Current Password</label>
//           <input style={{color:"red"}}
//             // className={`form-control ${currentPassValidate ? "error" : ""}`}
//             // onChange={handleCurrentPass}
//             type="password"
//             placeholder="Enter your current password"
//           />
//           {/* {currentPassErrMsg?.length > 0 && (
//           <p className={style.msg}>{currentPassErrMsg}</p>
//         )} */}

//           <label htmlFor="password">New Password</label>
//           <input style={{color:"red"}}
//             // className={`form-control ${newPassValidate ? "error" : ""}`}
//             // onChange={handleNewPass}
//             type="password"
//             placeholder="Enter new password"
//           />
//           {/* {newPassErrMsg?.length > 0 && (
//           <p className={style.msg}>{newPassErrMsg}</p>
//         )} */}

//           <label htmlFor="confirm-password">Confirm password</label>
//           <input style={{color:"red"}}
//             // className={`form-control ${confirmPassValidate ? "error" : " "}`}
//             // onChange={handleConfirmPass}
//             type="password"
//             placeholder="Enter confirm password"
//           />
//           {/* {confirmPassErrMsg?.length > 0 && (
//           <p className={style.msg}>{confirmPassErrMsg}</p>
//         )} */}

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Link as={Link} to="/login" style={{marginTop:"10px"}}>
//               <button className="btn btn-primary">Log In</button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }



// export default ForgotPassword;


import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./Login.css";


const Login =()=>{
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("")
    const[confirmPass,setConfirmPass] = useState();
    const[emailErrMsg,setEmailErrMsg] = useState("")
    const[passErrMsg,setPassErrMsg] = useState("")
    const[conPassErrMsg,setconPassErrMsg]=useState("")
    const[emailValidate,setEmailValidate] = useState(false);
    const[passValidate,setPassValidate] = useState(false);
    const[confirmPassValidate,setConfirmPassValidate] = useState(false);


    let emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    let passwordRegEx = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    const navigte = useNavigate();

    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }
    const handleConfirmPassword = (e)=>{
      setConfirmPass(e.target.value)
    }
    const handleLogin = (e)=>{
        e.preventDefault();
        let flag = true
        setEmailErrMsg("")
        setPassErrMsg("")
        setconPassErrMsg("")
        setEmailValidate(false)
        setPassValidate(false)
        setConfirmPassValidate(false)

        if(email === ""){
            flag = false
            setEmailValidate(true)
            setEmailErrMsg("Please enter the Email")
        }
        if(email !== "" && emailRegex.test(email)=== false){
            flag = false;
            setEmailValidate(true)
            setEmailErrMsg("Please enter valid Email ID")
        }
        if(password === ""){
            flag = false
            setPassValidate(true)
            setPassErrMsg("Please enter the Password")
        }
        if(password == "" && passwordRegEx.test(password) === false){
            flag = false
            setPassValidate(true)
            setPassErrMsg("Password must be combination of 0-9,a-z,A-Z,!@#$%^&*()")
        }
        if(password !== "" && password.length < 8){
            flag = false;
            setPassValidate(true);
            setPassErrMsg("Password must be 8 characters")
        }
        if(confirmPass == ""){
          flag = false;
          setPassValidate(true);
          setconPassErrMsg("please enter a valid password")
        }

        if(password !== confirmPass){
          flag = false;
          setConfirmPassValidate(true);
          setPassErrMsg("Please enter a valid password")
        }
        if(flag=== true){
            navigte("/dashbord")
        }
    }
    return(
        <>
        {/* <div className="gap"></div> */}
        <div className="container" style={{width:"30%"}}>
            <div className="card box login">
                <div className="card-body">
                    <div className="card-title title">Forgot Password</div>
                    <div class="mb-3 ">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" className={`form-control ${emailValidate? "error":""}`} id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={handleEmail}/>
                       <div style={{color:"red"}}> {emailErrMsg?.length>0 && (
                            <p className={style.msg}>{emailErrMsg}</p>
                        )}</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input type="password" className={`form-control ${passValidate? "error":""}`} id="exampleFormControlInput1" placeholder="Please enter the Password" value={password} onChange={handlePassword}/>
                       <div style={{color:"red"}}> {passErrMsg?.length > 0 && (
                            <p className={style.msg}>{passErrMsg}</p>
                        )}</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
                        <input type="password" className={`form-control ${confirmPassValidate? "error":""}`} id="exampleFormControlInput1" placeholder="Please enter confirm Password" value={confirmPass} onChange={handleConfirmPassword}/>
                       <div style={{color:"red"}}> {conPassErrMsg?.length > 0 && (
                            <p className={style.msg}>{conPassErrMsg}</p>
                        )}</div>
                    </div>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <Link to="/login">
                        <button class="btn btn-primary" onClick={handleLogin}>Submit</button>
                        </Link>
                        
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;