import React from 'react'
import './Carbar.css'
import scoot from './scoot.svg'
import scootRed from './scoot-red.svg'
import woowoo from './woowoo.svg'
import boxtruck from './boxtruck.svg'

export default ({ delay }) => (
  <div className="Carbar">
    <div className="road-bottom">
      <img src={scoot} className={`Scoot${delay ? ' delay' : ''}`} alt="logo" />
      <img
        src={boxtruck}
        className={`Boxtruck${delay ? ' delay' : ''}`}
        alt="logo"
      />
    </div>
    <div className="road-top">
      <img
        src={woowoo}
        className={`Woowoo${delay ? ' delay' : ''}`}
        alt="logo"
      />
      <img
        src={scootRed}
        className={`Scoot-right${delay ? ' delay' : ''}`}
        alt="logo"
      />
    </div>
  </div>
)
