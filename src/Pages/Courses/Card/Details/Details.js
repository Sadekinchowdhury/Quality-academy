import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData()
    const { name, img, title, description } = data
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h1>{name}</h1>
                <h2 className="card-title"> {title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary"> <Link className='text-2xl text-white no-underline' to='/checkout'>Get premium access</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Details;