import React from 'react';
import { Link } from 'react-router-dom';

const Phone = ({ phone }) => {
    const { id, brand_name, image, phone_name, price, rating } = phone
    return (
        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <img src={image} />
            </div>
            <div className="p-6 text-center">
                <h4 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Name: {phone_name}
                </h4>
                <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                    Price: {price}
                </p>
                <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                    {brand_name}
                </p>
                <Link to={`/details/${id}`} state={phone_name}> <button
                    className=" mt-4 middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                >
                    See Details
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Phone;