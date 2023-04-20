import React from 'react'
import TeslaLogo from '../images/tesla.png'




function Navbar({ setMenu, menu, CarName }) {




    return (
        <div className='navBar'>
            <div className='navStart'>
                <img src={TeslaLogo} alt='TeslaLogo' style={{ width: '110px' }} className='navContentLogo' />
            </div>
            <div className='navMid'>
                <CarName className='navContent' />
            </div>
            <div className='navEnd'>

                <p className='navContent'>Shop</p>
                <p className='navContent'>Account</p>
                <p className='navContentMenu' onClick={(e) => {
                    e.preventDefault();
                    setMenu(menu ? false : true)
                }}>Menu</p>
            </div>
        </div>
    )
}



export default Navbar