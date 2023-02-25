import React from 'react'

const Donors = () => {
    return (
        <div className='container mb-3   d-flex justify-content-between align-items-center' style={{ borderRadius: 10, boxShadow: "rgb(158 158 158) 0px 1px 5px " }}>
            <img src={require("../assets/images/Ellipse 208.png")} alt="asda" />
            <div >
                <p>Ujala Akmal</p>
                <p>16 Oct, 2022</p>
            </div>
            <div className='bg-danger p-1' style={{ borderRadius: 5 }}>
                A+
            </div>
        </div>
    )
}

export default Donors