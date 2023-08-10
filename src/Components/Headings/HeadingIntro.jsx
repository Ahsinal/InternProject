import React from 'react'
import './Heading.css'
const HeadingIntro = (props) => {
    return (
        <>
        <div className="section__header">
            <div className="block"></div>
            <h5>{props.label}</h5>
        </div>
        </>
    )
}
export default HeadingIntro