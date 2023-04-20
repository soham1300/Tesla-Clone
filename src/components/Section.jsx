import React from 'react'
import carInfo from '../carInfo.json'


function SectionContaint() {
    return (
        carInfo.map((data) =>
            <div style={{
                backgroundImage: `url(` + require(`../images/${data.image}`) + `)`,
            }}
                className='Section'
                id={data.title}
            >
                <div className='SectionHead'>
                    <h1 className='Title'>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
                <div className='Buttons'>
                    <p className='Button1'>{data.button1}</p>
                    {data.button2 && <p className='Button2'>{data.button2}</p>}

                </div>
            </div >
        )
    )
}


function Section({ setMenu }) {
    return (
        <div className='sections' onClick={() => { setMenu(false) }}>
            <SectionContaint />
        </div>

    )
}

export default Section