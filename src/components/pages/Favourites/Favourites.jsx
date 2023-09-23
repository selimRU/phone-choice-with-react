
import React, { useEffect, useState } from 'react';
import Favourite from './Favourite';

const Favourites = () => {
    const [phone, setPhone] = useState([])
    const [noData, setNodata] = useState('')
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {

        const favourite = JSON.parse(localStorage.getItem('favourite'))
        if (favourite) {
            setPhone(favourite);
        }
        else {
            setNodata('No Data Found')
        }

        console.log(phone);
    }, [])

    const handleDeleteAll = () => {
        localStorage.removeItem('favourite')
        setPhone([])
        setNodata('No Data Found')
    }
    return (
        <div className=' max-w-6xl mx-auto'>

            <div>
                <div className={`flex justify-center ${phone.length <= 0 && 'hidden'}`}>
                    <button onClick={handleDeleteAll}
                        className=" mt-10 middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                    >
                        Delete All
                    </button>
                </div>
                <p className={`font-light pl-5 mt-10 ${phone.length === 0 && 'hidden'}`}>Price: {phone.reduce((pp, item) => (pp + item.price), 0)}</p>
            </div>
            {noData ?
                <p className=' text-2xl text-center font-semibold mt-20'>{noData}</p> :
                !isShow ? <div className=' grid md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-10 mt-10 px-5'>
                    {
                        phone.slice(0, 3).map(item => <Favourite key={item.id} item={item}></Favourite>)
                    }
                </div>
                    : <div className=' grid md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-10 mt-10 px-5'>
                        {
                            phone.map(item => <Favourite key={item.id} item={item}></Favourite>)
                        }
                    </div>
            }

            <div className={`flex justify-center ${phone.length < 3 && 'hidden'}`}>
                <button onClick={() => setIsShow(!isShow)}
                    className=" mt-4 middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                >{!isShow ? 'See All' : 'Less'}
                </button>
            </div>
        </div>
    );
};

export default Favourites;