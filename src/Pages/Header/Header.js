import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar className='d-flex' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Quality Academy</Navbar.Brand>
                    <Nav.Link>

                        <Image className='h-7 d-sm-block' src='https://cdn.vectorstock.com/i/1000x1000/87/84/logo-world-globe-in-headphones-concept-work-vector-30428784.webp'
                            roundedCircle
                            height='30px'

                        >
                        </Image>
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link> <Link to='/'>Home</Link></Nav.Link>

                            <Nav.Link><Link to='/course'>Courses</Link></Nav.Link>


                        </Nav>
                        <Nav>
                            <Nav.Link><Link to='/faq'>Faq</Link></Nav.Link>
                            <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                            <Nav.Link ><Link to='/login'>Login</Link></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Link to='/register'>Register</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;