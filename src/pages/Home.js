import React from 'react'
import Banner from '../components/Banner'
import Cuerpo from '../components/Cuerpo'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
    <div>
        <Navbar/>
        <Banner/>
        <Cuerpo/>
        <Footer/>
    </div>
    )
}

export default Home