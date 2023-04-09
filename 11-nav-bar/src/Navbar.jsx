import React, { useRef, useState } from 'react'
import { links } from './data'
import './Navbar.css'

function Navbar() {
  const [showLinks, setShowLinks] = useState(false)
  const navListRef = useRef(null)

  const navListStyle = {
    height: showLinks
      ? `${navListRef.current.getBoundingClientRect().height}px`
      : '0px',
  }

  const toggleList = () => {
    console.log(navListRef.current.getBoundingClientRect())
    setShowLinks(!showLinks)
  }

  return (
    <header className="gnb">
      <div className="gnb-center">
        <div className="gnb-header">
          <button onClick={toggleList}>OPEN</button>
        </div>

        <nav className="gnb-nav" style={navListStyle}>
          <ul className="nav-list" ref={navListRef}>
            {links.map((link) => {
              const { id, url, text } = link

              return (
                <li className="nav-item" key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
