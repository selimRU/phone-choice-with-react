
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../../MainLayOut/MainLayOut';
import Home from '../pages/Home/Home';
import Favourites from '../pages/Favourites/Favourites';
import LogIn from '../pages/LogIn/LogIn';
import Details from '../Details/Details';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('phones.json')
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: () => fetch('../phones.json')
            },
            {
                path: '/favourites/',
                element: <Favourites></Favourites>,

            },
            {
                path: '/logIn',
                element: <LogIn></LogIn>
            }
        ]
    }
])

export default router;