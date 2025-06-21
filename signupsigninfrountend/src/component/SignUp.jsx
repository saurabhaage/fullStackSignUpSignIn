import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

function SignUp(){
    let navigate=useNavigate();
    const[employee , setEmployee]=useState({
        empname:"",
        empaddress:"",
        contactnumber:"",
        empDOB:"",
        empemail:"",
        empPassword:"",
    })
    const{empname , empaddress, contactnumber, empDOB, empemail,empPassword}=employee;

    const onInputChange=(e)=>{
        setEmployee({...employee,[e.target.name]:e.target.value})
    }
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/employees/signUp",employee);
        navigate("/")
        alert("Registration Done Successfully..")

    }
    
    return(
        <>
        <h1>SignUp</h1>
        <div className="container">
        <div className="row">
        <div className="col-md-9 offset-md-3 border rounded p-4 mt-2 shadow">
            <form onSubmit={onSubmit}>
                
        <div className="mb-3">
        <label htmlFor="" className="mb-1">Name</label>
        <input type="text" placeholder="Enter Your Name" name="empname" value={empname} onChange={(e)=>onInputChange(e)}/>
        </div>

         <div className="mb-3">
        <label htmlFor="" className="mb-1">Address</label>
        <input type="text" placeholder="Enter Your Address" name="empaddress" value={empaddress} onChange={(e)=>onInputChange(e)}/>
        </div>

        <div className="mb-3">
        <label htmlFor="" className="mb-1">Contact Number</label>
        <input type="text" placeholder="Enter Your Contact Number" name="contactnumber" value={contactnumber} onChange={(e)=>onInputChange(e)}/>
        </div>

        <div className="mb-3">
        <label htmlFor=""className="mr-2">DOB </label>
        <input type="date" name="empDOB" value={empDOB} onChange={(e)=>onInputChange(e)}/>
        </div>

        <div className="mb-3">
        <label htmlFor=""className="mb-1">Email address</label>
        <input type="email" placeholder="Enter Your Email" name="empemail" value={empemail} onChange={(e)=>onInputChange(e)}/>
        </div>

        <div className="mb-3">
        <label htmlFor=""className="mb-1">Password</label>
        <input type="password" placeholder="Enter Your Password" name="empPassword" value={empPassword} onChange={(e)=>onInputChange(e)}/>
        </div>

        <button type="submit" className="btn btn-success">SignUp</button>
            </form>
        </div>

        </div>

        </div>
        </>
    )
}

export default SignUp;