import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
    <footer className="footer items-center p-4 bg-neutral text-neutral-content"style={{ backgroundColor: '#C6FCED'}}>
  <aside className="items-center grid-flow-col">
    <img src={logo} alt="logo" className="w-8 h-8" />
    <p style={{ color: 'black' }}>Copyright © 2024 - All right reserved</p>
  </aside> 
</footer>
    </>
  )
}

export default Footer