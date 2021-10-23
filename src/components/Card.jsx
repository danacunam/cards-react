import React from 'react'
import "./Card.css"

const card = ({lang,img, fcolor, scolor}) => {
    return (
        <div className="card" style={{
            background: `linear-gradient(to left,${fcolor}, ${scolor})`,
        }}>
        <img src={img} alt="lenguaje de prog"/>
        <h3>{lang}</h3>
        </div>
    )
}

export default card
