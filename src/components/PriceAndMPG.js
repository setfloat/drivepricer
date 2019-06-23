import React, { Component } from 'react'
import MPG from './MPG'
import GasPrice from './GasPrice'

const styles = {
  button: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    margin: '2px',
    cursor: 'pointer',
  },
  input: {
    boxShadow: 'inset 0 0 1px #222222',
    paddingLeft: '12px',
    backgroundColor: 'rgba(255,255,255,0.6)',
    border: 'none',
    height: '43px',
  },
}

export default class PriceAndMPG extends Component {
  state = {
    gasPrice: 3.01,
    cost100k: null,
    mileage: 25,
    carType: '',
  }

  calc100 = (mileage, gasPrice) => {
    return (100000 / mileage) * gasPrice
  }

  handleInputChange(event) {
    if (this.state.cost100k) {
      this.setState({ cost100k: null })
    }
    const { type, checked, name } = event.target
    let value = type === 'checkbox' ? checked : event.target.value

    if (type === 'number') {
      if (value === '') {
        this.setState({
          [name]: 0,
        })
      } else if (isNaN(Number(value))) {
        value = null
      } else {
        if (typeof value === 'string') {
          value = parseFloat(value)
        }
        this.setState({
          [name]: value,
        })
      }
    } else {
      this.setState({
        [name]: value,
      })
    }
  }

  async handleSubmit(event) {
    event.preventDefault()
    let { mileage, gasPrice, carType } = this.state
    if (mileage === 0 || gasPrice === 0) {
      return
    }

    if (carType.length === 0) {
      carType = `${mileage} MPG car`
    }

    const cost100k = Math.round(this.calc100(mileage, gasPrice))

    if (!Number.isNaN(cost100k)) {
      this.setState({ carType: '' })
      this.props.addCarCost({
        cost100k,
        mileage,
        gasPrice: gasPrice.toFixed(2),
        carType: carType.trim(),
      })
    }
  }

  render() {
    let { mileage, gasPrice, carType } = this.state

    return (
      <form
        onSubmit={event => this.handleSubmit(event)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flexStart',
          alignItems: 'flexStart',
          margin: '2rem',
        }}
      >
        <GasPrice
          handleGasPriceChange={this.handleInputChange.bind(this)}
          gasPrice={gasPrice}
        ></GasPrice>
        <MPG
          handleInputChange={this.handleInputChange.bind(this)}
          mileage={mileage}
        ></MPG>
        <label style={{ margin: '10px' }}>
          <input
            name="carType"
            type="text"
            style={styles.input}
            value={carType}
            onChange={this.handleInputChange.bind(this)}
            onKeyPress={event => event.which === 13 && event.preventDefault()}
          />
          <h5 style={{ margin: '12px 0 12px 12px' }}>Type of Car</h5>
        </label>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            style={{
              minWidth: '40px',
              maxWidth: '200px',
              margin: '10px',
              padding: '10px',
              border: '1px solid white',
              backgroundColor: 'rgba(255,255,255,0)',
              cursor: 'pointer',
            }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    )
  }
}
