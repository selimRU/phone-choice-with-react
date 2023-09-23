import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
const MainLayOut = () => {
    let location = useLocation();
    console.log(location);
    React.useEffect(() => {
        if (location.pathname === '/') {
            document.title = 'phone-home'
        }
        else {
            document.title = `phone ${location.pathname.replace('/', '-')}`
        }
        if (location.state) {
            document.title = `${location.state}`
        }

    }, [location.pathname]);
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;