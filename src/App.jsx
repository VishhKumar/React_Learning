import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './components/UseState'
import EventHandeling from './components/EventHandeling'
import ConditionalRendering from './components/ConditionalRendering'
import ListRendering from './components/ListRendering'
import Forms from './components/Forms'
import UseEffect from './components/UseEffect'
import MainPage from './components/routing/MainPage'
import MainParent from './components/contextAPiExample/MainParent'
import UseRef from './components/UseRef'
import CustomMain from './components/customHook/customMain'
// import customMain from './components/customHook/CustomMain'

function App() {

  const user={
    name:"Salemon Boi",
    type:'existing'
  }
  return (
    <>
      {/* <UseState/> */}
      {/* <EventHandeling/> */}
      {/* <ConditionalRendering props={user}/> */}
      {/* <ListRendering/> */}
    {/* <Forms/> */}
      {/* <UseEffect/> */}
      {/* <MainPage/> */}
      {/* <MainParent/> */}
      {/* <UseRef/> */}
      <CustomMain/>
    </>
  )
}

export default App
