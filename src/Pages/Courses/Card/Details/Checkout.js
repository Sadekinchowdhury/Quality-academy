import React, { useContext } from 'react';

import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvide/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext)
    const premium = useLoaderData()
    const { name } = premium
    console.log(premium)
    return (
        <div>
            <h1>{name}</h1>

        </div>
    );
};

export default Checkout;