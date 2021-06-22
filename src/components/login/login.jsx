import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap'
import Menu from '../nav_bar/Navbar'
import './login.css'
import {
	IfFirebaseUnAuthed
  } from "@react-firebase/auth";
const  SignIn = (props) => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
        <>
        <Menu />
			<div className="formcontainer shadow container pt-4 pb-4 mt-4">
							<Form className='was-validated'>
								<div className="pt-2 form-group text-center">
									<h2>Sign In</h2>
								</div>
								<Form.Group controlId="signupEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" required placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
									<div className="invalid-feedback">Please fill out this field.</div>
								</Form.Group>
								<Form.Group controlId="signupPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" required maxLength="25" placeholder="At least 6 characters" length="40" onChange={(e) => { setPassword(e.target.value) }} />
								</Form.Group>
								<div className="divider">
									<Button variant="dark" onClick={()=> {
										console.log(email +','+password)
									}} id="signupSubmit" block type="submit">Sign In</Button>
								</div>
								<IfFirebaseUnAuthed>
    							{({ firebase }) => {
							  return <div className="divider">
									<Button variant="dark" onClick={async ()=> {
										try{
											const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
											await firebase.auth().signInWithPopup(googleAuthProvider);
											props.history.replace('/dashboard')
										} catch(error) {
											Alert(error)
										}
									}} id="" block type="click">Sign In with Google</Button>
								</div>
								}}
								</IfFirebaseUnAuthed>
								<hr />
								<p>Don't  have an account? <Link to="/signin">Sign in</Link></p>
							</Form>
			</div>
        </>
	)
}

export default withRouter(SignIn)