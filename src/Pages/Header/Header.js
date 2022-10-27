
import { React, useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvide/AuthProvider';
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
    const [toggle, setToggle] = useState(false)

    const { user, LogOut } = useContext(AuthContext)

    console.log(user)
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

        <Navbar className='bg-black p-3' collapseOnSelect expand="lg" bg="blue" variant="dark">
            <Container className=''>
                <Link className='no-underline text-3xl '><p className='text-white'>Quality Academy </p> </Link>
                <Nav.Link className='m'>

                    <Image className='h-7 ml-4 ' src='https://cdn.vectorstock.com/i/1000x1000/87/84/logo-world-globe-in-headphones-concept-work-vector-30428784.webp'
                        roundedCircle
                        height='30px'

                    >
                    </Image>
                </Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav ">
                    <Nav className="me-auto">
                        <Nav.Link> <Link className='no-underline' to='/'><p>Home</p></Link></Nav.Link>

                        <Nav.Link><Link className='no-underline' to='/course'><p>Courses</p></Link></Nav.Link>


                    </Nav>
                    <Nav.Link>

                        <div className='logo'>
                            <h6 onClick={() => setToggle(!toggle)} className='ms-3 mt-2 toggle'>
                                {toggle ? <><FaMoon>dark</FaMoon></> :

                                    <div className='text-white'>
                                        <FaSun>Sun</FaSun>

                                    </div>
                                }

                            </h6>

                        </div>

                    </Nav.Link>
                    <Nav>
                        <Nav.Link><Link className='no-underline' to='/faq'><p>Faq</p></Link></Nav.Link>
                        <Nav.Link><Link className='no-underline' to='/blog'><p>Blog</p></Link></Nav.Link>




                        {
                            user?.uid ? <>


                                <Nav.Link>
                                    <p className='text-white mr-3'> {user?.displayName}</p>
                                </Nav.Link>
                                <Nav.Link>



                                    <button onClick={handLogout} className='bg-primary rounded-2 w-100 h-50'>Log out</button>
                                </Nav.Link>


                            </>
                                :
                                <>
                                    <Nav.Link><Link className='no-underline' to='/login'>Login</Link>
                                    </Nav.Link>
                                    <Nav.Link><Link className='no-underline p-2' to='/register'><span>Register</span></Link></Nav.Link>

                                </>
                        }

                        {

                            <Nav.Link>

                                <Image
                                    title={user?.displayName}
                                    src={user?.photoURL
                                    }
                                    className='h-4 ml-4 '
                                    roundedCircle

                                ></Image>

                            </Nav.Link>
                        }
                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;