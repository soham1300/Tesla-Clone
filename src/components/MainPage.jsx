import React, { useState } from 'react'
import Navbar from './Navbar'
import Section from './Section'
import carInfo from '../carInfo.json'
import SideBar from './SideBar'

function CarName({ className }) {
    return (
        carInfo.map((data) =>
            <a href={`#${data.title}`} className={className}>{data.title}</a>
        )
    )
}

function MainPage() {
    const [menu, setMenu] = useState(false)
    return (
        <div>
            <Navbar setMenu={setMenu} CarName={CarName} />

            <Section setMenu={setMenu} />

            {menu && <SideBar CarName={CarName} />}

        </div>
    )
}

export default MainPage