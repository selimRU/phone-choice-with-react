import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Detail from './Detail';

const Details = () => {
    const { id } = useParams()
    const phones = useLoaderData()
    const phone = phones.find(phone => phone.id == id)
    
    return (
        <div>
            <Detail phone={phone}></Detail>
        </div>
    );
};

export default Details;
