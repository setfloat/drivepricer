import React, { Component } from 'react';
import './Carbar.css';
import scoot from './scoot.svg'
import scootRed from './scoot-red.svg'
import woowoo from './woowoo.svg'
import boxtruck from './boxtruck.svg'


class Carbar extends Component {

  render() {
    return (
      <div className="Carbar">
        <div className="road-bottom">
          <img src={scoot} className="Scoot" alt="logo"/>
          <img src={boxtruck} className="Boxtruck" alt="logo"/>
        </div>
        <div className="road-top">
          <img src={woowoo} className="Woowoo" alt="logo"/>
          {/* <img src={scoot} className="Scoot-right" alt="logo"/> */}
          <img src={scootRed} className="Scoot-right" alt="logo"/>
        </div>
        {/* <Headleft/>
        <Headcenter/>
        <Headleft/>
        <Headcenter/>
        <Headleft/>
        <Headcenter/> */}
      </div>
    );
  }
}

export default Carbar;
