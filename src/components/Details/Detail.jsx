import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import swal from 'sweetalert';

const Detail = ({ phone }) => {
    const { id, brand_name, image, phone_name, price, rating } = phone

    const handleFavourites = () => {
        const added = []
        const favourite = JSON.parse(localStorage.getItem('favourite'))

        if (!favourite) {
            added.push(phone)
            localStorage.setItem('favourite', JSON.stringify(added))
            swal("Good job!", "You have added successfully!", "success");
        }
        else {
            const exists = favourite.find(item => item.id === id)
            if (!exists) {
                added.push(...favourite, phone)
                localStorage.setItem('favourite', JSON.stringify(added))
                swal("Good job!", "You have added successfully!", "success");
            }
            else {
                return alert('already added')
            }

        }
    }
    return (
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-10 mx-auto">
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
                <div className=' flex items-center gap-3 justify-center'>
                    <button onClick={handleFavourites} className=' text-pink-600'>Add To Favourites </button>
                    <BsFillArrowRightCircleFill className='text-pink-600'></BsFillArrowRightCircleFill>
                </div>
            </div>
        </div>
    );
};

export default Detail;