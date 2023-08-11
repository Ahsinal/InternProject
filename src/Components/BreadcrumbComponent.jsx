import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const BreadcrumbComponent = ({paths}) => {
  const stylelink={
    color:'black',
    fontSize:'1rem'
  }
  return (
    <Breadcrumb>
    <Breadcrumb.Item as={Link} to="/" style={stylelink}>Home</Breadcrumb.Item>
    {paths.map((path, index) => (
        <Breadcrumb.Item style={stylelink}
          key={index}
          as={Link}
          to={path.link}
          active={index === paths.length - 1}
        >
          {path.name}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}

export default BreadcrumbComponent