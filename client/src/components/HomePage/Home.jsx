import React from 'react'
import NavBar from '../NavBar'
import Facilities from './Facilities'
import Footer from '../FooterArea'
import SliderBar from './SliderBar'
import Packages from './Packages'
import Reasons from './Reasons'


function Home() {
    return (
        <div>
            
            <NavBar />
            <SliderBar/>
            <Packages />
            <Facilities />
            {/* <Reasons/> */}
            <Footer />
        </div>
    )
}

export default Home
