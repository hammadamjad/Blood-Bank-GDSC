import React from 'react'

const BloodName = ({ name }) => {
    return (
        <div className='col-3 m-1  position-relative d-flex justify-content-center align-items-center'>
            <p style={{ top: 10, right: 9 }} className='position-absolute text-light'>{name}</p>
            <img style={{ width: 50, height: 40 }} src={require("../assets/images/blood-drop.png")} alt="" />
        </div>
    )
}

export default BloodName