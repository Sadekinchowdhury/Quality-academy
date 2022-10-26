
import { React, useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvide/AuthProvider';



const Header = () => {

    const { user, LogOut } = useContext(AuthContext)


    const handLogout = () => {
        LogOut()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (

        <Navbar className='d-flex' collapseOnSelect expand="lg" bg="blue" variant="dark">
            <Container>
                <Link className='no-underline text-3xl '>Quality Academy </Link>
                <Nav.Link className='m'>

                    <Image className='h-7 ml-4 ' src='https://cdn.vectorstock.com/i/1000x1000/87/84/logo-world-globe-in-headphones-concept-work-vector-30428784.webp'
                        roundedCircle
                        height='30px'

                    >
                    </Image>
                </Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link> <Link className='no-underline' to='/'>Home</Link></Nav.Link>

                        <Nav.Link><Link className='no-underline' to='/course'>Courses</Link></Nav.Link>


                    </Nav>
                    <Nav>
                        <Nav.Link><Link className='no-underline' to='/faq'>Faq</Link></Nav.Link>
                        <Nav.Link><Link className='no-underline' to='/blog'>Blog</Link></Nav.Link>




                        {
                            user?.uid ? <>


                                <p> {user?.displayName}</p>
                                <button onClick={handLogout} className='bg-primary rounded-2 w-100 h-50'>Log out</button>

                            </>
                                :
                                <>
                                    <Nav.Link><Link className='no-underline' to='/login'>Login</Link>
                                    </Nav.Link>
                                    <Nav.Link><Link className='no-underline' to='/register'>Register</Link></Nav.Link>

                                </>
                        }

                        {

                            <Image
                                src={user?.photoURL
                                }
                                className='h-4 ml-4'
                                roundedCircle

                            ></Image>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;