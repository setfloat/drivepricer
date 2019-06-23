import React from 'react'
import Carbar from '../components/carbar/Carbar'

const currentYear = new Date().getFullYear()

export default () => (
  <div
    style={{
      background: 'rgba(1, 200, 3, 0.6)',
      padding: '0.8rem 0 0.2rem 0',
    }}
  >
    <Carbar delay />
    <h5
      style={{
        margin: '30px',
        textAlign: 'center',
      }}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.twitter.com/setfloat"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        @setfloat
      </a>{' '}
      |{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.github.com/setfloat/drivepricer"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        Github
      </a>{' '}
      | © {currentYear} Neighbor Labs LLC
    </h5>
    <h6
      style={{
        margin: '0',
        fontSize: '9px',
        textAlign: 'center',
      }}
    >
      Icons by{' '}
      <a
        href="https://www.freepik.com/"
        target="_blank"
        rel="noopener noreferrer"
        title="Freepik"
        style={{ textDecoration: 'none', color: 'navy' }}
      >
        Freepik
      </a>{' '}
      from{' '}
      <a
        href="https://www.flaticon.com/"
        target="_blank"
        rel="noopener noreferrer"
        title="Flaticon"
        style={{ textDecoration: 'none', color: 'navy' }}
      >
        flaticon.com
      </a>
      . Licensed by{' '}
      <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        CC 3.0 BY
      </a>
    </h6>
  </div>
)
