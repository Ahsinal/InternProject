import React from 'react'
import './Button.css'

const CustomButton = (props) => {
  return (
    <>
    <button className="button__red">
      {props.label}
    </button>
    </>
  )
}

export default CustomButton