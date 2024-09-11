import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faEyeSlash, faLock, faUser, faEye, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Signup = () =>
{
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errorMsg, setErrorMsg] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const validateForm = () =>
    {
        const errors = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        if (!fullName) errors.name = 'Please fill your name';
        if (!email) errors.email = 'Please fill your email';
        if (!password) errors.password = 'Please fill your password';
        if (!confirmPassword) errors.confirmPassword = 'Please fill your confirm password';
        if (confirmPassword !== password) errors.confirmPassword = 'Password is not matching';
        setErrorMsg(errors);
        return Object.values(errors).every(error => !error);
    };

    const togglePasswordVisibility = () =>
    {
        setPasswordVisible(!passwordVisible);
    };

    const signUp = async (e) =>
    {
        e.preventDefault();
        if (validateForm())
        {
            alert('HI')
        }
    };

    return (
        <section className='signup-sec' onSubmit={signUp}>
            <div className='container custom'>
                <div className='form-card'>
                    <div className='row gx-0'>
                        <div className='col-lg-5'>
                            <div className='left-col'>
                                <div className='header'>
                                    <h1 className='logo'>Quizz</h1>
                                </div>
                                <div className='body'>
                                    <h2 className='title'>Welcome Back!</h2>
                                    <p className='text-descrip'>
                                        To keep connected with us please login with your personal info
                                    </p>
                                    <Link to='/signin' className='primary-btn'>Sign In</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <div className='right-col'>
                                <div className='header'>
                                    <h2>Create Account</h2>
                                    <ul className='social-icons'>
                                        <li><Link className='icon'><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                                        <li><Link className='icon'><FontAwesomeIcon icon={faGoogle} /></Link></li>
                                        <li><Link className='icon'><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                                    </ul>
                                    <p>Or use your email for registration</p>
                                </div>
                                <div className='body'>
                                    <form className='row gy-4'>
                                        <div className='col-12'>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser} /></span>
                                                <input type="text"
                                                    className="form-control"
                                                    placeholder="Full Name"
                                                    aria-label="Full Name"
                                                    onChange={(e) => setFullName(e.target.value)}
                                                    value={fullName} />
                                            </div>
                                            {errorMsg.name && <div className="invalid-feedback d-block">
                                                <FontAwesomeIcon icon={faTriangleExclamation} /> {errorMsg.name}
                                            </div>}
                                        </div>
                                        <div className='col-12'>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></span>
                                                <input type="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    aria-label="Email"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    value={email} />
                                            </div>
                                            {errorMsg.email && <div className="invalid-feedback d-block">
                                                <FontAwesomeIcon icon={faTriangleExclamation} /> {errorMsg.email}
                                            </div>}
                                        </div>
                                        <div className='col-12'>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faLock} /></span>
                                                <input type="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    aria-label="Password"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    value={password} autoComplete='true' />
                                            </div>
                                            {errorMsg.password && <div className="invalid-feedback d-block">
                                                <FontAwesomeIcon icon={faTriangleExclamation} /> {errorMsg.password}
                                            </div>}
                                        </div>
                                        <div className='col-12'>
                                            <div className="input-group">
                                                <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                                                <input type={passwordVisible ? 'text' : 'password'}
                                                    className="form-control last-child-input"
                                                    placeholder="Confirm Password"
                                                    aria-label="Confirm Password"
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    value={confirmPassword} autoComplete='true' />
                                                <span className="input-group-text last-child-text" onClick={togglePasswordVisibility}>
                                                    <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                                                </span>
                                            </div>
                                            {errorMsg.confirmPassword && <div className="invalid-feedback d-block">
                                                <FontAwesomeIcon icon={faTriangleExclamation} /> {errorMsg.confirmPassword}
                                            </div>}
                                        </div>
                                        <div className='col-12 text-center'>
                                            <button className='secondary-btn mt-2 mb-0'>Sign Up</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
