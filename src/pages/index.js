import React, { Component } from 'react'
import Layout from '../components/layout'
import PriceAndMPG from '../components/PriceAndMPG'
import CarList from '../components/CarList'
import Footer from '../components/Footer'

const CoolContainer = ({ children }) => (
  <div
    style={{
      width: '100%',
      minHeight: '50px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: 'rgba( 250,180, 230,1)',
      padding: '10px 1.0875rem 1.45rem',
    }}
  >
    {children}
  </div>
)

class DrivePricer extends Component {
  state = {
    cars100k: [],
  }

  addCarCost(car) {
    this.setState({ cars100k: [car].concat(this.state.cars100k) })
  }

  render() {
    let { cars100k } = this.state

    return (
      <Layout>
        <section
          style={{
            background:
              'radial-gradient(circle farthest-corner at center center, rgb(240,240,240), rgba(180, 230, 250, 1)) no-repeat',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0',
            margin: '0',
            minHeight: '30rem',
          }}
        >
          <h1
            style={{
              fontSize: '80px',
              textAlign: 'center',
              margin: '50px 0',
              color: 'rgb(55, 171, 249)', // blue car color
              fontFamily: 'Audiowide',
              fontStyle: 'italic',
            }}
          >
            Drive Pricer
          </h1>

          <h3
            style={{
              textAlign: 'center',
              padding: '30px',
              margin: '0',
              maxWidth: '460px',
              color: 'rgb(210, 40, 188)',
              fontFamily: 'Kalam',
              fontWeight: '300',
            }}
          >
            The cost to drive 100,000 miles can vary wildly. Estimate the cost
            of gas before purchasing a car.
          </h3>
        </section>
        <CoolContainer>
          <PriceAndMPG
            addCarCost={this.addCarCost.bind(this)}
            handleReset={this.state.handleReset}
          />
        </CoolContainer>
        {cars100k.length > 0 && <CarList cars100k={cars100k} />}
        <Footer />
      </Layout>
    )
  }
}

export default DrivePricer
