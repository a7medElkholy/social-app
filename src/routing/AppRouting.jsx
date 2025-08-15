
import { createBrowserRouter } from 'react-router';
import Layout from '../components/layout/Layout';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Posts from '../pages/posts/Posts';
import ProtectedRoutes from './ProtectedRoutes';
import AuthProtectedRoutes from './AuthProtectedRoutes';
import UserContextProvider from '../context/UserContext';

export const routing = createBrowserRouter([
  
    {path:"/", element:<UserContextProvider><Layout/></UserContextProvider> , children : [
        {index:true ,element: <ProtectedRoutes><Posts/></ProtectedRoutes> },
        {path:"Login", element: <AuthProtectedRoutes><Login/></AuthProtectedRoutes> },
        {path:"register" ,element : <Register/>},
    ]}

])