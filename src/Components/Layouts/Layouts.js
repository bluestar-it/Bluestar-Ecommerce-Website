import React from 'react' 
import { Outlet } from 'react-router-dom' 
import Header from './Header/Header' 
import Footer from './Footer/Footer' 

function Layout(props) {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    ) 
}

export default Layout 