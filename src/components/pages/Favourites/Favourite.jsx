import React from 'react';

const Favourite = ({ item }) => {
    const { brand_name, image, phone_name, price, rating } = item
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
            </div>
        </div>
    );
};

export default Favourite;