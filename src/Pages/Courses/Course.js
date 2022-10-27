import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import Cards from './Card/Card';
import Category from './category/Category';

const Course = () => {

    const cours = useLoaderData()
    console.log(cours)


    return (
        <Container className='mt-7'>
            <Row className=' grid sm:grid-cols-1 lg:grid-cols-2'>
                <Col lg='4' className='fixed'>
                    <Category></Category>
                </Col>

                <Col lg='8' className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5 mx-auto'>
                    {cours.map(curs => <Cards
                        key={curs.id}
                        curs={curs}

                    ></Cards>

                    )}

                </Col>
            </Row>
        </Container>
    );
};

export default Course;