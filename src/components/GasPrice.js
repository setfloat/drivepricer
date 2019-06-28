import React from 'react'

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

export default ({ handleGasPriceChange, gasPrice }) => {
  return (
    <label style={{ margin: '10px' }}>
      <input
        style={styles.input}
        name="gasPrice"
        type="number"
        step="0.001"
        onFocus={event => event.target.select()}
        onChange={event => handleGasPriceChange(event, gasPrice)}
        onKeyPress={event => {
          ;(event.which === 13 && event.preventDefault()) ||
            (event.which === 32 && event.preventDefault())
        }}
        // style={{border: '1px solid grey', boxSizing: 'border-box'}}
        value={gasPrice}
      />
      <h5 style={{ margin: '12px 0 12px 12px' }}>Gas Price $</h5>
    </label>
  )
}

// const buttonStyle = {
//     backgroundColor: 'rgba(255,255,255,0.5)',
//     margin: '2px',
//     cursor: 'pointer'
// }

// const inputStyle = {
//     boxShadow: 'inset 0 0 1px #222222',
//     maxWidth: 'content',
//     backgroundColor: 'rgba(0,0,0,0)',
//     border: 'none'
// }
