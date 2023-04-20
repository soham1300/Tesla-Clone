import React from 'react'

function SideBar({ CarName }) {
    return (
        <div className='sideBar'>
            <h3 className='menuTitle'>Menu</h3>
            <CarName className='sideBarContent' />
        </div>
    )
}

export default SideBar