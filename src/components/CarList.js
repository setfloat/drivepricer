import React from 'react'
import iconGasBlack from '../images/gas_black_24px.svg'

const GasIcon = () => {
  return (
    <img
      alt="Gas Price"
      style={{
        padding: 0,
        margin: 0,
      }}
      src={iconGasBlack}
    />
  )
}

export default ({ cars100k }) => {
  return (
    <section
      style={{
        backgroundColor: 'rgba(250,250,210,1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem 1.0875rem 1.45rem',
      }}
    >
      {cars100k.map(car => (
        <div
          style={{
            marginBottom: '1rem',
            width: '100%',
            maxWidth: '500px',
            border: '1px solid rgba(200,200,10, 0.8)',
            padding: '0.7rem',
          }}
          key={car.carType + Math.random(car.cost100k)}
        >
          <h4>{car.carType}</h4>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'flex-start',
            }}
          >
            <h3>${car.cost100k.toLocaleString()}</h3>
            <h6
              style={{
                paddingLeft: '10px',
              }}
            >
              gas cost / 100k miles
            </h6>
          </div>
          <h5>
            <GasIcon />
            {car.gasPrice}
          </h5>
          <h5>MPG {car.mileage}</h5>
        </div>
      ))}
    </section>
  )
}
