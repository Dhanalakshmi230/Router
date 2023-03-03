import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {


    const [name, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNo] = useState('');

    const navigate = useNavigate();


    const [nameErr, setNameErr] = useState('');
    const [passErr, setPassErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [addressErr, setAddErr] = useState('');
    const [phoneErr, setPhonErr] = useState('');



    const checkValidation = (e) => {
        e.preventDefault()
        let isValid=true;

        if (name === "") {
            setNameErr('Enter your name')
            isValid =false;
        }
        else {
            setNameErr('');
        }
        if (!email.includes('@', '.')) {
            setEmailErr('Enter valid email address')
            isValid=false
        }
        else {
            setEmailErr('');
        }
        if (password.length < 8) {
            setPassErr('password must have 8 character');
            isValid=false;
        }
        else {
            setPassErr('');
        }
        if (address === "") {
            setAddErr('Enter your Address')
            isValid=false
        }
        else {
            setAddErr('');
        }
        if (phoneNumber.length < 9) {
            setPhonErr('phonenumber must have 10 digits')
            isValid=false;
        }
        else {
            setPhonErr('');
        }
        if (isValid){
            navigate('/signin')

        }
        
    }


    const moveFunc=()=>{
        navigate('/signin')
            }

    return (
        <div>
            <div>
                <div className="container-fluid">
                    <div className="row main-content  text-light text-center">
                       
                        <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                            <div className="container-fluid">
                                <div className="row">
                                    <h2>Sign UP</h2>
                                </div>
                                <div className="row">
                                    <form control="" className="form-group">
                                        <div className="row">
                                            <input type="text" name="username" onChange={e => setUserName(e.target.value)} id="username" className="form__input" placeholder="Username" />
                                        </div>
                                        <p className='text-danger'>{nameErr}</p>
                                        <div className="row">
                                            <input type="text" name="EMail" id="password" onChange={e => setEmail(e.target.value)} className="form__input" placeholder="Email Id" />
                                        </div>
                                        <p className='text-danger'>{emailErr}</p>
                                        <div className="row">
                                            <input type="password" name="Password" id="password" onChange={e => setPassword(e.target.value)} className="form__input" placeholder="Password" />
                                        </div>
                                        <p className='text-danger'>{passErr}</p>
                                        <div className="row">
                                            <input type="text" name="Address" id="password" onChange={e => setAddress(e.target.value)} className="form__input" placeholder="Address" />
                                        </div>
                                        <p className='text-danger'>{addressErr}</p>
                                        <div className="row">
                                            <input type="number" name="PhoneNumber" id="password" onChange={e => setPhoneNo(e.target.value)} className="form__input" placeholder="PhoneNumber" />
                                        </div>
                                        <p className='text-danger'>{phoneErr}</p>


                                        <div className="row">
                                            <input type="submit" onClick={checkValidation} className="btn" />
                                        </div>
                                    </form>
                                </div>
                                <div className="row">
                                    <p>Don't have an account? <a href=' ' onClick={moveFunc}>Sign in</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid text-center footer">

                </div>
            </div>
        </div>
    )
}
export default Signup;