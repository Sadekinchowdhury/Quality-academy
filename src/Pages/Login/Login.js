import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'
import ButtonGroup from 'react-bootstrap/ButtonGroup';


import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../AuthProvide/AuthProvider';


const provider = new GithubAuthProvider()
const Gprovider = new GoogleAuthProvider()
const Login = () => {
    const [Error, setError] = useState("")
    const { setLoading } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const { googleSignin, githubSignIn, LogInuser } = useContext(AuthContext)

    // google
    const handlGoogle = () => {
        googleSignin(Gprovider)
            .then(result => {
                const user = result.user
                console.log(user)


            })
            .catch(error => {
                console.error('error', error)
            })
    }

    const handlGithub = () => {
        githubSignIn(provider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handlLogin = event => {

        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        LogInuser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                navigate(from, { from: true })
                setLoading(false)
            })
            .catch(error => {
                console.error('error', error)
                setError(Error.massage)
            })
    }



    return (
        <div>
            <Form onSubmit={handlLogin} className='w-50 mx-auto mt-5 border-2 p-10 '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <span> Haven't account please  <Link to='/register'>Register</Link></span>


                <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-full' variant="primary" type="submit">
                    Login
                </Button>

                <Form.Text className='text-danger'>

                    {Error}

                </Form.Text>

                <ButtonGroup vertical className='mt-3'>
                    <Button onClick={handlGoogle} className='mb-1 d-flex' variant="outline-primary"> <FaGoogle></FaGoogle>Log in width Google</Button>
                    <Button onClick={handlGithub} className='d-flex ' variant="outline-dark"> <FaGithub></FaGithub>  Log in width Github </Button>


                </ButtonGroup>


            </Form>
        </div>
    );
};

export default Login;