import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons'

const Signin = () =>
{
    return (
        <section className='signup-sec'>
            <div className='container custom'>
                <div className='form-card'>
                    <div className='row gx-0'>
                        <div className='col-lg-5'>
                            <div className='left-col'>
                                <div className='header'>
                                    <h1 className='logo'>Quizz</h1>
                                </div>
                                <div className='body'>
                                    <h2 className='title'>Hello, Friend!</h2>
                                    <p className='text-descrip'>
                                        Enter your personal details and start journey with us
                                    </p>
                                    <Link to='/' className='primary-btn'>Register</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <div className='right-col'>
                                <div className='header'>
                                    <h2>Sign In Quizz </h2>
                                    <ul className='social-icons'>
                                        <li><Link className='icon'><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                                        <li><Link className='icon'><FontAwesomeIcon icon={faGoogle} /></Link></li>
                                        <li><Link className='icon'><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                                    </ul>
                                    <p>
                                        Or use your email account
                                    </p>
                                </div>
                                <div className='body'>
                                    <form className='row gy-4'>
                                        <div className='col-12'>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></span>
                                                <input type="email" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="Username" />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="input-group">
                                                <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                                                <input type="password" className="form-control last-child-input" placeholder="password" aria-label="password" aria-describedby="password" autoComplete='true' />
                                                <span className="input-group-text last-child-text"><FontAwesomeIcon icon={faEyeSlash} /></span>
                                            </div>
                                        </div>
                                        <div className='col-12 text-center'>
                                            <button className='secondary-btn mt-2 mb-0'>Sign In</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signin