import React from 'react'
import ChildComp from './ChildComp'
import ProvideContextExplanle from './ProvideCOntextExplanle'

function MainParent() {
  return (
    <>
        <ProvideContextExplanle>
        <ChildComp/>
        </ProvideContextExplanle>
    </>
  )
}

export default MainParent