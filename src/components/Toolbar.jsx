import React from 'react'
import WebLogo from '../assets/web_logo.png'


export default function Toolbar() {
  return (
            <div className="toolbar d-flex justify-content">
                    <div className="logo_container"><img className="logo"
                            src={WebLogo} alt="My Logo" /></div>
                    <div className="links container-fluid d-flex justify-content">
                        <div className="link"><a href="#projects">Projects</a></div>
                        <div className="link"><a href="#about">About me</a></div>
                    </div>
                </div>
  )
}
