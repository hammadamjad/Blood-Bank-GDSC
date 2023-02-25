import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { redirect } from 'react-router-dom';
import "../assets/css/LoginPage.css"
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom'



const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate()

    const [errMsg, setErrMsg] = useState("");

    React.useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/dashboard")
            }
        });

        return () => {
            listen();
        };
    }, []);

    const submitLogin = (e) => {
        e.preventDefault()
        if (email === "" || pass === "") {
            setErrMsg("Field are empty")
        } else {
            signInWithEmailAndPassword(auth, email, pass).then((res) => {
                navigate("/dashboard")
            }).catch((err) => {
                console.log(err)
            })
        }
    }


    return (
        <div className='outerMain d-flex justify-content-center align-items-center'>
            <div className='container  h-50 d-flex justify-content-center align-items-center'>
                <div className='main-login-form bg-white h-100'>
                    <h2 className='p-4 text-center' style={{ color: "red", fontWeight: 400 }}>Log In</h2>
                    <form onSubmit={submitLogin} className='d-flex align flex-column align-items-center'>
                        <div className='bg-danger w-75 text-white ' >
                            {errMsg}
                        </div>
                        <div className="form-group">
                            {/* <label className='p-2' for="exampleInputEmail1">Email address</label> */}
                            <div className='d-flex align-items-center p-2'>
                                <img src={require("../assets/images/person-icon.png")} />
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                        </div>
                        <div className="form-group mt-2">
                            {/* <label className='p-2' for="exampleInputPassword1">Password</label> */}
                            <div className='d-flex align-items-center p-2'>
                                <img src={require("../assets/images/pass-icon.png")} />
                                <input onChange={(e) => setPass(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>

                        </div>
                        <button type="submit" className="btn btn-danger mt-4">Login</button>
                        <p className='text-center p-3'>or continue with</p>
                        <div className='d-flex align-items-center'>
                            <a>
                                <img className='p-2' src={require("../assets/images/logos_google-icon.png")} />
                            </a>
                            <a>
                                <img className='p-2' src={require("../assets/images/akar-icons_facebook-fill.png")} />
                            </a>
                        </div>
                        <p className='mt-3'>Don't have an account? <a href={`/register`} style={{ color: "red" }}>Sign Up</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage