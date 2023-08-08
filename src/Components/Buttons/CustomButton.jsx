import React from 'react'
import './Button.css'

const CustomButton = (props) => {
  return (
    <>
    <button>
      {props.label}
    </button>
    </>
  )
}

export default CustomButton