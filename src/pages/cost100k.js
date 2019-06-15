// available name ideas
// cost100k
// gas100k
// drivepricer
// milepricer
// cheapmile

import React, { Component } from 'react'
// import { Link } from 'gatsby'
import makesAndModels from '../cardata'

import Layout from '../components/layout'
import PriceAndMPG from '../components/PriceAndMPG'
import CarList from '../components/CarList'
import Carbar from '../components/carbar/Carbar'
import TabBar from '../components/TabBar'
import LookupCar from '../components/LookupCar'

const FormContainer = ({ children, toggleFlipped }) => (
  <div
    style={{
      width: '100%',
      minHeight: '50px',
      display: 'flex',
      flexDirection: 'column',
      // backgroundColor: toggleFlipped ? 'rgba(220,200,200,1)' : 'rgba(200,200,220,1)',
      backgroundColor: toggleFlipped
        ? 'rgba(180,250,230,1)'
        : 'rgba(180,230,250,1)',
      padding: '10px 1.0875rem 1.45rem',
    }}
  >
    {children}
  </div>
)

class Cost100k extends Component {
  state = {
    cars: {
      toyota: {
        rav4: {
          mileage: 26,
        },
      },
      subaru: {
        crosstrek: {
          mileage: 29,
        },
      },
    },
    gasPrice: 2.91,
    cost100k: null,
    mileage: 25,
    carType: '',
    make: '',
    model: '',
    cars100k: [
      {
        carType: 'Ford',
        gasPrice: 4.25,
        cost100k: 12006,
        mileage: 30,
      },
      {
        carType: 'Prius',
        gasPrice: 4.25,
        cost100k: 12006,
        mileage: 48,
      },
    ],
    toggleFlipped: false,
  }

  calc100 = (mileage, gasPrice) => {
    return (100000 / mileage) * gasPrice
  }

  handleInputChange(event) {
    if (this.state.cost100k) {
      this.setState({ cost100k: null })
    }

    const { type, checked, name } = event.target
    const value = type === 'checkbox' ? checked : event.target.value

    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let { mileage, gasPrice } = this.state

    const cost100k = this.calc100(mileage, gasPrice).toFixed(0)

    if (!Number.isNaN(cost100k)) {
      this.setState({ cost100k, mileage: 25, gasPrice: 2.91, carType: '' })
    }
  }

  handleReset() {
    this.setState({
      cost100k: null,
    })
  }

  handleToggle(bool) {
    this.setState({ toggleFlipped: bool })
  }

  costFormatter(cost100k) {
    if (cost100k) {
      return (
        <div>
          <h4>{this.state.carType}</h4>
          <h4>${cost100k}</h4>
          <button onClick={this.handleReset.bind(this)}>Reset</button>
        </div>
      )
    }
    return null
  }
  addCarCost(car) {
    this.setState({ cars100k: [car].concat(this.state.cars100k) })
  }

  render() {
    let {
      cost100k,
      make,
      model,
      cars100k,
      toggleFlipped,
      mileage,
      gasPrice,
      carType,
    } = this.state

    return (
      <Layout>
        <h3 style={{ padding: '0px 1.0875rem 1.45rem' }}>
          How does it cost to drive a car 100,000 miles?
        </h3>
        <h2 style={{ padding: '0px 1.0875rem 1.45rem' }}>
          100,000 mile gas cost
        </h2>
        {/* <FormContainer>
                    <PriceAndMPG
                        handleSubmit={this.handleSubmit.bind(this)}
                        addCarCost={this.addCarCost.bind(this)}
                        handleReset={this.state.handleReset}
                    />
                    </FormContainer> */}

        <TabBar
          toggleFlipped={toggleFlipped}
          handleToggle={this.handleToggle.bind(this)}
        />
        <FormContainer toggleFlipped={toggleFlipped}>
          {/* <PriceAndMPG
            handleSubmit={this.handleSubmit.bind(this)}
            addCarCost={this.addCarCost.bind(this)}
            handleReset={this.state.handleReset}
          /> */}

          {!toggleFlipped ? (
            <PriceAndMPG
              handleSubmit={this.handleSubmit.bind(this)}
              addCarCost={this.addCarCost.bind(this)}
              handleReset={this.state.handleReset}
            />
          ) : (
            <LookupCar
              make={make}
              makesAndModels={makesAndModels}
              model={model}
              handleSubmit={this.handleSubmit.bind(this)}
              mileage={mileage}
              gasPrice={gasPrice}
              handleInputChange={this.handleInputChange.bind(this)}
              carType={carType}
            />
          )}
        </FormContainer>

        {/* <CalcCarForm/> */}
        {/* </FormContainer> */}
        {this.costFormatter(cost100k)}
        {cars100k.length > 0 && <CarList cars100k={cars100k} />}
        <Carbar />
      </Layout>
    )
  }
}

export default Cost100k
