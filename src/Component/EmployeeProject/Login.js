import React, { useState } from "react";
import './Login.css';
function Login(){
    const[email, setemail]=useState("");
    const[password, setpassword]=useState("");
    const[emailErr, setemailErr]=useState("");
    const[passwordErr, setpasswordErr]=useState("");
    const [msgErr, setmsgErr]=useState({email:"", password:""})
    const [EmsgErr, setEmsgErr]=useState(false)
    const [PmsgErr, setPmsgErr]=useState(false)
    // const regex=/[a-zA-Z0-9]+@[a-z0-9][A-Za-z$-@]?/ ;
    // const regex= /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
     const regex = /^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;
    const passwordExp =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@\#\&])[a-zA-Z0-9@\#\&]{6,16}$/
    // const passwordExp=/ ^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*).{6,16}$ /
    const handleEmail=(e)=>{
        setemail(e.target.value)
        setmsgErr({email:""})
        if(regex.test(email)===false){
            // setemailErr("Use a Valid Email")
            // setmsgErr({...msgErr,email:true})
            setEmsgErr(true)
          } 
           else {
        //    setemailErr("")
        // setmsgErr({...msgErr,email:false})
        setEmsgErr(false)
           //return true;  // option 
          }
    }
    const handlePasssword=(e)=>{
        setpassword(e.target.value)
         if(passwordExp.test(password)===false){
            // setpasswordErr("use a strong password")
            // setmsgErr({...msgErr,password:true})
            setPmsgErr(true)
           }
           else {
            // setpasswordErr("")
            // setmsgErr({...msgErr,password:false})
            setPmsgErr(false)
            //return true;  // option 
           }
    }
    const handleLogin=(e)=>{
        e.preventDefault();
        if (EmsgErr===true || PmsgErr===true){
            alert ("fil the form")
        }else if(email.length===0 || PmsgErr===true){
            alert ("fil the email")
        }
        else{
            alert("success")
        }

        if(email.length===0){
            setmsgErr({...EmsgErr,email:"Required"})
            setEmsgErr("")
        }else{
            setmsgErr({...EmsgErr,email:""})
        }
        
    }

    return(
        <div className="container-fluid ">
            <div className="container d-flex justify-content-center fluid align-items-center">
                <div className="center-div  mb-5 py-5 px-3 ">
                   <div className="row  justify-content-center align-items-center ">
                       <div className=" col-12 col-lg-6 col-md-6 mt-4 heading">
                           <h3 className=" fw-bold text-danger">LOGIN</h3>
                       </div>
                   </div>
                   <div className="row d-flex justify-content-center align-items-center mt-3 ">
                       <div className=" col-12 col-lg-6 col-md-6  ">
                           <div class="form-group ">
                            <form>
                                <div className="form-outline mt-4 mb-4">
                                  <label className="form-lable">Email</label>
                                  <input type="email" value={email} className="form-control form-control-md" 
                                  onChange={handleEmail}/>
                                  {/* <p className="text-danger">{emailErr}</p> */}
                                  {EmsgErr ? <span>use a valid Email</span> :""}
                                  {msgErr.email}
                                </div>
                                <div class="form-outline mt-4 ">
                                  <label class="form-label">Password</label>
                                  <input type="password" value={password} class="form-control form-control-md"
                                  onChange={handlePasssword} />
                                  {/* <p className="text-danger">{passwordErr}</p> */}
                                  {PmsgErr ? <span>use a strong password</span> :""}
                                </div>
                                <div className="form-group mt-4 mb-4 ">
                                    <button className="btn btn-danger px-4"
                                    onClick={handleLogin}>LOGIN</button>
                                </div>
                                <div className="form-group mt-4  ">
                                    <p className="fw-bold text-body">Create a account SignUp</p>
                                </div>
                            </form>
                            </div> 
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
export default Login;