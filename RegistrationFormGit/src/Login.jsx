// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailErrMsg, setEmailErrMsg] = useState("");
//   const [passErrMsg, setPassErrMsg] = useState("");

//   let emailRegex =
//     /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
//   let passwordRegEx =
//     /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let email = e.target[0].value;
//     if (emailRegex.test(email)) {
//       setEmailErrMsg("");
//     } else {
//       setEmailErrMsg("Invalid email");
//     }

//     let password = e.target[1].value;
//     if (passwordRegEx.test(password)) {
//       setPassErrMsg("");
//     } else {
//       setPassErrMsg(
//         "password should contain atleast one number and one special character and between 8-10 digits"
//       );
//     }
//     if (emailRegex.test(email) && passwordRegEx.test(password)) {
//       navigate("/dashbord");
//     }
//   };
//   const navigate = useNavigate();
//   return (
//     <>
//       <div className="container" style={{width:"400px"}}>
//         <h2 style={{color:"white"}}>Login</h2>
//         <hr className="hr"/>
//         <form className="login-form" onSubmit={handleSubmit}>
//           <label htmlFor="email">email</label>
//           <input
//             type="email"
//             placeholder="your email id"
//             id="email"
//             name="email"
//             className="coustome_input"
//           />
//           <span style={{ color: "red", fontSize: "15px" }}>{emailErrMsg}</span>
//           <label htmlFor="password">password</label>
//           <input
//             type="password"
//             placeholder="********"
//             id="password"
//             name="password"
//             className="coustome_input"
//           />
//           <span style={{ color: "red", fontSize: "15px" }}>{passErrMsg}</span>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Link as={Link} to="/dashbord" style={{marginTop:"10px"}}>
//               <button className="btn btn-primary">Log In</button>
//             </Link>
//           </div>
//         </form>
//         <Link as={Link} to="/register2">
//           Register Yourself
//         </Link>
//         <div>
//           <Link as={Link} to="/forgotPassword">
//             Forget Password
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Login;


import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./Login.css";

 
const Login =()=>{
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("")
    const[emailErrMsg,setEmailErrMsg] = useState("")
    const[passErrMsg,setPassErrMsg] = useState("")
    const[emailValidate,setEmailValidate] = useState(false);
    const[passValidate,setPassValidate] = useState(false);


    let emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    let passwordRegEx = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    const navigte = useNavigate();

    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }
    const handleLogin = (e)=>{
        e.preventDefault();
        let flag = true
        setEmailErrMsg("")
        setPassErrMsg("")
        setEmailValidate(false)
        setPassValidate(false)

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
                    <div className="card-title title">Log In</div>
                    <div className="mb-3 as">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className={`form-control ${emailValidate? "error":""}`} id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={handleEmail}/>
                       <div style={{color:"red"}}> {emailErrMsg?.length>0 && (
                            <p className={style.msg}>{emailErrMsg}</p>
                        )}</div>
                    </div>
                    <div className="mb-3 as">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password" className={`form-control ${passValidate? "error":""}`} id="exampleFormControlInput2" placeholder="Please enter the Password" value={password} onChange={handlePassword}/>
                       <div style={{color:"red"}}> {passErrMsg?.length > 0 && (
                            <p className={style.msg}>{passErrMsg}</p>
                        )}</div>
                    </div>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <Link to="/dashbord">
                        <button className="btn btn-primary" onClick={handleLogin}>Log In</button>
                        </Link>
                        
                    </div>
                    <div>
                        <div>
                            <Link to="/forgotpassword">Forgot Password ?</Link>
                            <p>Don't have an account ?<Link to="/register2">Register</Link></p>
                            {/* {passErrMsg?.length > 0 && (
                            <p className={style.msg}>{passErrMsg}</p>
                        )} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;