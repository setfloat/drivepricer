import React from 'react'
import iconGasBlack from '../icons/gas_black_24px.svg'

// const Icon = ({ children }) => {

//     return (<div>{ children }</div>)
// }

const Icon = ({ children }) => {

    return (<img style={{
        padding: 0,
        margin: 0
    }} src={iconGasBlack} />)
}


export default ({ cars100k }) => {
    return (<div
        style={{
            backgroundColor: 'rgba(250,250,210,1)',
            // backgroundColor: 'rgba(250,110,200,1)',
            padding: '1rem 1.0875rem 1.45rem'
        }}
    >
        {
              cars100k.map(car => (
                <div
                    style={{
                        marginBottom: '1rem',
                        width: '100%',
                        // width: '240px',
                        maxWidth: '500px',
                        border: '1px solid rgba(200,200,10, 0.8)',
                        padding: '0.7rem'
                    }}
                key={ car.carType + Math.random(car.cost100k) }>
                {/* <h5>Cost to drive 100,000 miles</h5> */}
                <h4>{ car.carType }</h4>
                <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'flex-start'}}>
                    <h3>${ car.cost100k }</h3>
                    <h6 style={{
                        paddingLeft: '10px'
                    }}>gas cost / 100k miles</h6>
                </div>
                <h5><Icon/>{ car.gasPrice }</h5>
                <h5>MPG { car.mileage }</h5>
                
                {/* , <Icon>local_gas_station</Icon>  */}
                {/* ${ car.cost100k } to drive 100,000 miles in a { car.carType } @ ${ car.gasPrice } per gallon */}
                </div>
            ))
        }
        </div>)
}


