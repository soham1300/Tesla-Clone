import React from 'react'
import TeslaLogo from '../images/tesla.png'
import carInfo from '../carInfo.json'

function CarName() {
    return (
        carInfo.map((data) =>

            <a href={`#${data.title}`} className='navContent'>{data.title}</a>


        )
    )
}

function Navbar() {
    return (
        <div className='navBar'>
            <div className='navStart'>
                <img src={TeslaLogo} alt='TeslaLogo' style={{ width: '110px' }} className='navContent' />
            </div>
            <div className='navMid'>
                <CarName />
            </div>
            <div className='navEnd'>

                <p className='navContent'>Shop</p>
                <p className='navContent'>Account</p>
                <p className='navContent'>Menu</p>

            </div>
        </div>
    )
}



export default Navbar