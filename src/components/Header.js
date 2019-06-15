import React from 'react'
import { Link } from 'gatsby'
import scootred from './carbar/scoot-red.svg'
import Carbar from './titlecarbar/Carbar'

let siteTagLine = 'Calculate how much it will cost to drive a car 100,000 miles'

function driveThroughTitle(throughText) {
  let textArray = throughText.split()

  return (
    <div>
      {textArray.map((letter, ind) => (
        <div
          style={{
            zIndex: ind % 2 ? 10 : 1,
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  )
}

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rgba(1,200,3,0.6)',
      // background: 'rgba(120,240,120,0.2)',
      // boxShadow: '10px 10px 10px rgba(120,240,120,0.6)'
      // background: 'yellow',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        // padding: '1.45rem 1.0875rem',
        padding: '0.8rem 0',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Carbar />

      {/* <h1
        style={{
          margin: 0,
          display: 'inline',
          zIndex: 10,
          // background: b
        }}
      >
        <Link
          to="/"
          style={{
            color: 'white',
            // color: 'grey',
            textDecoration: 'none',
          }}
        >
          {driveThroughTitle('Gas100k')
          // Gas100k
          }
          // {siteTitle}
        </Link>
      </h1> */}
      {/* <span className="scooter">
        <div className="road-top">
        <img src={woowoo} className="Woowoo" alt="logo"/>
        <img src={scoot} className="Scoot-right" alt="logo"/>
        <img src={scootred} className="Scoot-right" alt="logo" />
      </span> */}
      {/* <Bloggity yaPropMate={siteTagLine}/> */}
    </div>
  </div>
)

export default Header

const Bloggity = ({ yaPropMate }) => <div>{yaPropMate}</div>
