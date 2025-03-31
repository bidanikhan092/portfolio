import React from 'react'
import MainCharacter from '../assets/main_character.png'


export default function Header() {
  return (
    <div className="main_content d-flex justify-content">
    <div className="main_para">Hi, I'm<br />
        <span>Muhammad Ahmad,</span><br />
        and I make beautiful websites!</div>
        <div className="main_image">
            <img src={MainCharacter}
            alt="main character" /></div>
</div>
  )
}
