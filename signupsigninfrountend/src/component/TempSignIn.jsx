import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn(){

    let navigate=useNavigate();

    const[employee,setEmoloyee]=useState({
        empemail:"",
        empPassword:""
    })

    const{empemail,empPassword}=employee;

    const onInputChange=(e)=>{
        setEmoloyee({...employee,[e.target.name]:e.target.value});
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
       const result= await axios.get(`http://localhost:8080/employees/signIn/${empemail}/${empPassword}`);
       if(result.data){
         navigate("/welcome");
       }else{
        navigate("/")
        alert("Oops! Invalid Credential please try again!!");
       }
       

    }

    return(
        <>
        
        <div className="container">
            <h2>SignIn</h2>
        <div className="row">

        <div className="col-md-9 offset-md-3 border rounded p-4 mt-2 shadow">
           
            <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="" className="mb-1">EmailId</label>
            <input type="email" onChange={(e)=>onInputChange(e)} placeholder="Enter Your EmailId" name="empemail" value={empemail}/>
            </div>

            <div>
                <label htmlFor="" className="mb-1">Password</label>
            <input type="password" onChange={(e)=>onInputChange(e)} placeholder="Enter Your Password" name="empPassword" value={empPassword}/>
            </div>

            <button type="submit" className="btn btn-success mt-2">LogIn</button>

            </form>
        </div>

        </div>
        </div>
        </>
    )
}

export default SignIn;