import React from 'react'
import Button from 'react-bootstrap/Button';

const CustomButton = (props) => {
  return (
    <div>
      <Button variant="danger" size="lg">
       {props.label}
      </Button>
    </div>
  )
}

export default CustomButton