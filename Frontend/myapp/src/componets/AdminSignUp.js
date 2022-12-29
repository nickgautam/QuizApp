// import React,{useState} from 'react'
// import axios from "axios";

// function AdminSignUp() {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (!email || !password|| !name) {
//             return window.alert("Please fill all the fields")
//         }
//         const config = {
//             headers: {
//                 "Content-type": "application/json",
//             }
//         }
//         const { data } = await axios.post("/adminRegister", { name, email, password }, config)
//         // navigate("/login")   
//          window.alert("Registration successfully")   
//     }

//   return (
// <React.Fragment>
    
// <form>
//     <h1>Admin Registration</h1>
// <div className="mb-3">
//     <label for="exampleInputName1" className="form-label">Name</label>
//     <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp"/> 
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1"/>
//   </div>
//   <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
// </form>
// </React.Fragment>

//   )
// }

// export default AdminSignUp




import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom' 
import axios from "axios";
function AdminSignUp(e) {
   
    // const navigate = useNavigate();
    const [adminName, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !password || !adminName) {
            return window.alert("Please fill all the fields")
        }
        // const config = {
        //     headers: {
        //         "Content-type": "application/json",
        //     }
        // }
        // const { data } = await fetch.post("/adminRegister")
        // // navigate("/login")
        //  window.alert("Registration successfully")
        fetch("http://localhost:3000/adminRegister", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({setName, setEmail, setPassword})
            }).then((res) => res.json()).then((response) => {
                // console.log(response)
                // setSuccessMessage(response.msg)
                // clear input email and name
                // clearFormData();
                // getData(); // reload table 
            })
                .catch((err) => console.log(err))
        

       
       
    }
    return (
        <>
            <h1>Register</h1>
            <form>

            <label>Name</label>
                <input value={adminName}
                    type="text" placeholder='adminName' onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Email</label>
                <input value={email}
                    type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password</label>
                <input value={password} type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleSubmit} >Submit</button><br></br>
                {/* <a href="http://localhost:3001/login"> If You Are Already Registered So Login Here</a> */}

            </form>
        </>
    )

}

export default AdminSignUp