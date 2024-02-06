import React from 'react'
import Wrapper from '../assets/wrappers/PageHaeder'

function PageHeader({ name, description }) {
  return (
    <Wrapper>
      {<h3 className="page-center"> {name}</h3>}
      {<h1 className="page-center"> {description}</h1>}
    </Wrapper>
  )
}

export default PageHeader
