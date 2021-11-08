import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './../App.css';
// function login() {
//     var data =[]
//     data this.ref.email
// }


// function Login() {
//     return (
//         <form >
//             <h1>Login Form</h1>
//             <br />
//             <div>
//                 <label>Email</label>
//                 <input type="email" placeholder="Email" ref="email"></input>
//             </div>
//             <br />
//             <div>
//                 <label>Password</label>
//                 <input type="password" placeholder="Password" ref="password" ></input>
//             </div>
//             <br />
//             <div>
//                 <button onClick={() => { login() }}>Login</button>
//             </div>
//             <br />
//             <div>
//                 <Link to="/CNA"><p>Create New Account</p></Link>
//             </div>
//         </form>
//     );
// }
/////////////////////////////////////////////////////////////


export default class Login extends Component {
    login() {
        //alert("Login Called");
        console.warn(this.state)
        fetch('http://localhost:5000/api/Usernames',
            {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application / json"
                },
                body: JSON.stringify(this.state)
            }).then((result) => {
                result.json().then((resp) => {
                    localStorage.setItem(this.state.UserName1, JSON.stringify(resp))
                    console.warn(this.state.UserName1, JSON.stringify(resp));
                })
            })
    }
    render() {
        return (
            <div className="Container">
                <div className="Inner-Container">
                    <input type="text" placeholder="Username" onChange={(e) => { this.setState({ UserName1: e.target.value }) }} /> <br /><br />
                    <input type="password" placeholder="Password" onChange={(e) => { this.setState({ UserPassword: e.target.value }) }} /> <br /><br />
                    <button onClick={() => this.login()}>Login</button>
                </div>
            </div>
        )
    }
}



