import React, { useEffect, useState } from "react";
 import './Login.css';
//import {Link} from 'react-router-dom';
function SignUp(){
    const [fname, setfname]=useState("");
    const [lname, setlname]=useState("");
    const [email, setemail]=useState("");
    const [password, setpassword]=useState("");
    const [confirmpassword, setconfirmpassword]=useState("");
    const [emailErr, setemailErr]=useState(false);
    const [passwordErr, setPasswordErr]=useState(false)
    const [CpasswordErr, setCpasswordErr]=useState(false)
    const [Errmessage, setErrmessage]=useState({email:"",password:"",confirmpassword:""})

  // email handle function //  
    const handleEmail=(e)=>{
        setemail(e.target.value)
        setErrmessage({email:""})
        const regex = /^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (regex.test(email)===false){
            setemailErr(true)
        }else{
            setemailErr(false);
        }
    }
  // password handle function //  
    const handlePasssword=(e)=>{
        setpassword(e.target.value);
        setErrmessage({password:""})
        const regex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@ # &])[a-zA-Z0-9@ # &]{6,16}$/
        if (!regex.test(password)){
            setPasswordErr(true)
        } else{
            setPasswordErr(false);
        }

    }
  // confirm password function //  
    const handleConformpassword=(e)=>{
        setconfirmpassword(e.target.value);
        
    }
  // handle signup function on button click //  
    const handleSignup=(e)=>{
        e.preventDefault();
        if(confirmpassword != password){
            setCpasswordErr(true)
            console.log("cppassword")
        }else{
            setCpasswordErr(false)
        }
    
     // for email & password length checked on signup button click //   
        if(email.length===0){
            setErrmessage({...Errmessage,email:"Required"})
            setemailErr("")
        }else if(password.length===0){
            setErrmessage({...Errmessage,password:"Required"})
            setemailErr("")
        }else{
            setErrmessage({...Errmessage,email:""})
            setErrmessage({...Errmessage,password:""})
        }

        if(emailErr===true || password===true || CpasswordErr===true){
            alert("fill the form")
        } else if (password.length===0 || emailErr===true){
            alert("Fill the password")
        }else if (confirmpassword.length===0 || passwordErr===true){
            alert("Fill the Confirmpassword")
        }else{
            alert("success")
        }
        
    }
   
    return(
        <div className="container-fluid ">
        <div className="container d-flex justify-content-center fluid align-items-center">
            <div className="center-div  mb-5 mt-5 px-3 ">
               <div className="row  justify-content-center align-items-center ">
                   <div className=" col-12 col-lg-6 col-md-6 mt-4 heading">
                       <h3 className=" fw-bold text-danger">SIGNUP</h3>
                   </div>
               </div>
               <div className="row d-flex justify-content-center align-items-center mt-3 ">
                   <div className=" col-12 col-lg-6 col-md-6  ">
                       <div class="form-group ">
                        <form>
                           <div className="form-outline mt-1 mb-4">
                              <label className="form-lable">First Name</label>
                              <input type="text" className="form-control form-control-md" 
                              onChange={(e)=>{setfname(e.target.value)}} required/>
                            </div>
                           <div className="form-outline mt-4 mb-4">
                              <label className="form-lable">Last Name</label>
                              <input type="text" className="form-control form-control-md" 
                              onChange={(e)=>{setlname(e.target.value)}} required/>
                            </div>
                            <div className="form-outline mt-4 mb-4">
                              <label className="form-lable">Email</label>
                              <input type="text" className="form-control form-control-md" 
                              onChange={handleEmail} required/>
                              <p className="text-danger">{emailErr ? <span>use a valid Email</span> :""} {Errmessage.email} </p>
                              
                            </div>
                            <div className="form-outline mt-4 mb-4">
                              <label className="form-lable">Password</label>
                              <input type="password" className="form-control form-control-md" 
                              onChange={handlePasssword} required/>
                              <p className="text-danger">{passwordErr ? <span>Use a strong password</span> :""} {Errmessage.password}</p>
                            </div>
                            <div class="form-outline mt-4 ">
                              <label class="form-label" for="form3Example1cg">Confirm Password</label>
                              <input type="password" id="form3Example1cg" class="form-control form-control-md"
                               onClick={handleConformpassword}/> 
                               {CpasswordErr ? <span>didn't match password</span> :""}
                               {/* <p className="text-danger">{CpasswordErr}</p> */}
                            </div>
                            <div className="form-group mt-4 mb-4 ">
                                <button className="btn btn-danger px-4"
                                onClick={handleSignup}>SIGNUP</button>
                            </div>
                            <div className="form-group mt-4  ">
                                <p className="fw-bold text-body">Have any account? Login</p>
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
export default SignUp;