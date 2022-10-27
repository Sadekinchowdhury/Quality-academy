import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const premium = useLoaderData()
    console.log(premium)
    return (
        <div>
            <h1>CheckOut</h1>
        </div>
    );
};

export default Checkout;