import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import './Home.css'
const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='Home-container text-center'>
            <h1 className='text-5xl p-4 text-white '> Welcome Quality academy </h1>

            <div className='w-50 mx-auto p-10  h-50 '>
                <Carousel className='w-70 h-70'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1632882765546-1ee75f53becb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/photos/word-css-on-wooden-desk-and-laptop-picture-id1363205770?s=612x612"
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src=" https://thumbs.dreamstime.com/z/javascript-logo-javascript-logo-white-background-vector-format-available-136765881.jpg"
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;