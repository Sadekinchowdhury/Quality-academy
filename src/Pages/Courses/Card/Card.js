import React from 'react';
import { Link } from 'react-router-dom';


const Cards = ({ curs }) => {
    const { img, name, _id } = curs
    return (
        <div className="card w-96 bg-base-100 mt-3 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} className="rounded-xl w-50" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Learn {name}</h2>

                <div className="card-actions">
                    <button className="btn btn-primary"><Link className='text-white no-underline' to={`/course/${_id}`}> Details </Link></button>
                </div>
            </div>
        </div>
    );
};

export default Cards;