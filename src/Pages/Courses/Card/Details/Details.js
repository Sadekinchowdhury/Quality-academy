import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {

    // const [premium, setPrimium] = useState()
    // useEffect(() => {
    //     fetch('https://quality-server-sadekinchowdhury.vercel.app/premium')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])


    const data = useLoaderData()
    const { name, img, title, description, id } = data
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
                    <button className="btn btn-primary"> <Link to={`/course/${id}`} className='text-2xl text-white no-underline'>Get premium access</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Details;