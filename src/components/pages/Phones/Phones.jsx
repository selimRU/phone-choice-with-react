import React from 'react';
import Phone from '../../Phone/Phone';

const Phones = ({ phones }) => {

    return (
        <div className=' grid md:grid-cols-2 lg:grid-cols-3  max-w-6xl mx-auto gap-10 py-10 px-5'>
            {
                phones.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
            }
        </div>
    );
};

export default Phones;