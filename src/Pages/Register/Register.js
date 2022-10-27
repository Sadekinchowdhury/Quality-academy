
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvide/AuthProvider';


const Register = () => {
    const navigate = useNavigate()

    const { creatUser, userUpdate } = useContext(AuthContext)

    const Handlregister = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const photoURL = form.photoURL.value
        const name = form.name.value
        console.log(email, password)
        creatUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                UpdatProfile(name, photoURL)
                navigate('/')
            })
            .catch(error => {
                console.error('error', error)
            })
    }

    const UpdatProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        userUpdate(profile)
            .then(() => {

            })
            .catch(error => {
                console.error(error)
            })

    }
    return (
        <Form onSubmit={Handlregister} className='w-50 mx-auto mt-10'>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" name='name' placeholder="First-name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                <Form.Label>PhotoURL</Form.Label>
                <Form.Control type="photoURL" name='photoURL' placeholder="Enter photoURL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Form.Text>
                <span>Have an account please <Link to='/login'>Login</Link></span>
            </Form.Text>



            <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button>


        </Form>
    );
};

export default Register;