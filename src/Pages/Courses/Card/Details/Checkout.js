import React, { useContext } from 'react';

import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvide/AuthProvider';

const Checkut = () => {
    const { user } = useContext(AuthContext)
    const premium = useLoaderData()
    const { name, price, picture } = premium
    console.log(premium)
    return (
        <div>


            <div className="card w-96 mx-auto mt-10 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Package name: {name}</h2>
                    <p>price: {price}</p>
                    <p>User Id: {user?.displayName} <img className='w-4 rounded inline-block' src={user?.photoURL} alt="" /></p>
                    <div className="card-actions">
                        <button className="btn btn-primary w-100">Place Order</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Checkut;