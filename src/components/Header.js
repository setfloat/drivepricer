import React from 'react'
import Carbar from './carbar/Carbar'

export default () => (
  <div
    style={{
      background: 'rgba(1,200,3,0.6)',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0.8rem 0',
        display: 'flex',
        flexDirection: 'row',
        minWidth: '100%',
      }}
    >
      <Carbar />
    </div>
  </div>
)
