import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';


const MainLayout =({children}) =>{
    return(
        <>
        <div className="test-app">
            <Navbar />
            <div className="site-main">
                <Header />
                {/* <Content/> */}
            </div>
        </div>
        <main>{children}</main>
        </>
    )
}

export default MainLayout;