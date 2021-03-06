import React from 'react'

// const buttonStyle = {
//     backgroundColor: 'rgba(255,255,255,0.5)',
//     margin: '2px',
//     cursor: 'pointer'
// }

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
// style={{boxShadow: 'inset 0 0 1px #222222'}}
// style={{border: '1px solid grey', boxSizing: 'border-box'}}

export default ({ handleInputChange, mileage }) => (
  <label style={{ margin: '10px' }}>
    <input
      name="mileage"
      onFocus={event => event.target.select()}
      type="number"
      step="0.001"
      style={styles.input}
      value={mileage}
      onKeyPress={event => {
        ;(event.which === 13 && event.preventDefault()) ||
          (event.which === 32 && event.preventDefault())
      }}
      onChange={handleInputChange.bind(this)}
    />
    <h5 style={{ margin: '12px 0 12px 12px' }}>MPG</h5>
  </label>
)
