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
    paddingLeft: '10px',
    backgroundColor: 'rgba(255,255,255,0.6)',
    border: 'none',
    height: '43px',
  },
}
// style={{boxShadow: 'inset 0 0 1px #222222'}}
// style={{border: '1px solid grey', boxSizing: 'border-box'}}

export default ({ handleInputChange, mileage }) => (
  <label style={{ margin: '10px' }}>
    <h5>MPG</h5>
    <input
      name="mileage"
      onFocus={event => event.target.select()}
      type="number"
      style={styles.input}
      value={mileage}
      onKeyPress={event => {
        ;(event.which === 13 && event.preventDefault()) ||
          (event.which === 32 && event.preventDefault())
      }}
      onChange={handleInputChange.bind(this)}
    />
  </label>
)
