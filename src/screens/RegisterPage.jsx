import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react'
import "../assets/css/LoginPage.css"
import { auth } from '../utils/firebase'
import { db } from '../utils/firebase'
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {

    const [errMsg, setErrMsg] = useState("");
    const navigate = useNavigate()
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

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        address: "",
        pass: "",
        conpass: ""
    })


    const submitReg = (e) => {
        e.preventDefault();
        if (userData.email === "" || userData.name === "" || userData.address === "" || userData.pass === "" || userData.conpass === "") {
            setErrMsg("Field are empty")
        }
        else if (userData.pass !== userData.conpass) {
            setErrMsg("Passwords does not match")
        } else if (userData.pass.length < 8) {
            setErrMsg("Password should be more than 8 letters")
        }
        else {

            createUserWithEmailAndPassword(auth, userData.email, userData.pass).then(async (res) => {
                const uid = res.user.uid
                await setDoc(doc(db, "UserData", uid), {
                    uid: uid,
                    email: userData.email,
                    address: userData.address,
                    name: userData.name
                }).then((res) => {
                    navigate("/dashboard")
                }).catch((err) => {
                    console.log(err)
                    setErrMsg("An error Occurred. Try again")
                })
                setUserData({
                    name: "",
                    email: "",
                    address: "",
                    pass: "",
                    conpass: ""
                })
            }).catch((err) => {
                console.log(err)
                setErrMsg("An error Occurred. Try again")
            })
        }
    }

    return (
        <div className='outerMain d-flex justify-content-center align-items-center'>
            <div className='container  h-75 d-flex justify-content-center align-items-center'>
                <div className='main-login-form bg-white h-100'>
                    <h2 className='p-4 text-center' style={{ color: "red", fontWeight: 400 }}>Sign Up</h2>
                    <form onSubmit={submitReg} className='d-flex align flex-column align-items-center'>
                        <div className='bg-danger w-75 text-white ' >
                            {errMsg}
                        </div>
                        <div className="form-group mt-2">
                            {/* <label className='p-2' for="exampleInputEmail1">Email address</label> */}
                            <div className='d-flex align-items-center p-2'>
                                <img src={require("../assets/images/person-icon.png")} />
                                <input onChange={(e) => {
                                    setUserData({
                                        ...userData,
                                        name: e.target.value
                                    })
                                }} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Name" />
                            </div>
                        </div>
                        <div className="form-group mt-2">
                            {/* <label className='p-2' for="exampleInputEmail1">Email address</label> */}
                            <div className='d-flex align-items-center p-2'>
                                <img src={require("../assets/images/person-icon.png")} />
                                <input onChange={(e) => {
                                    setUserData({
                                        ...userData,
                                        email: e.target.value
                                    })
                                }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group mt-2">
                            {/* <label className='p-2' for="exampleInputEmail1">Email address</label> */}
                            <div className='d-flex align-items-center p-2'>
                                <img src={require("../assets/images/address-icon.png")} />
                                <input onChange={(e) => {
                                    setUserData({
                                        ...userData,
                                        address: e.target.value
                                    })
                                }} type="text" className="form-control" id="exampleInputAddress" aria-describedby="emailHelp" placeholder="Address" />
                            </div>
                        </div>
                        <div className="form-group mt-2">
                            {/* <label className='p-2' for="exampleInputPassword1">Password</label> */}
                            <div className='d-flex align-items-center p-2'>
                                <img src={require("../assets/images/pass-icon.png")} />
                                <input onChange={(e) => {
                                    setUserData({
                                        ...userData,
                                        pass: e.target.value
                                    })
                                }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-group mt-2">
                            {/* <label className='p-2' for="exampleInputPassword1">Password</label> */}
                            <div className='d-flex align-items-center p-2'>
                                <img src={require("../assets/images/pass-icon.png")} />
                                <input onChange={(e) => {
                                    setUserData({
                                        ...userData,
                                        conpass: e.target.value
                                    })
                                }} type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-danger mt-4">Signup</button>
                        <p className='text-center p-3'>or continue with</p>
                        <div className='d-flex align-items-center'>
                            <a>
                                <img className='p-2' src={require("../assets/images/logos_google-icon.png")} />
                            </a>
                            <a>
                                <img className='p-2' src={require("../assets/images/akar-icons_facebook-fill.png")} />
                            </a>
                        </div>
                        <p className='mt-3'>Already have an account? <a href={`/login`} style={{ color: "red" }}>Sign In</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage