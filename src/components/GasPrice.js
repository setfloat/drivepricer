import React from 'react'

const styles = {
    button: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        margin: '2px',
        cursor: 'pointer'
    
    },
    input: {
        boxShadow: 'inset 0 0 1px #222222',
        maxWidth: 'content',
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none'
    }
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

export default ({handleInputChange, handleKeyPress, handlePlusMinusGasPrice, gasPrice }) => {
    return (<div>
            <label>
                <button
                    style={ styles.button }
                    name='addMPG'
                    type='button'
                    onClick={(event)=> handlePlusMinusGasPrice(0 - 0.5, event)}
                    // onClick={handlePlusMinus.bind(this)}
                >-50¢</button>
                <button
                    style={ styles.button }
                    name='addMPG'
                    type='button'
                    onClick={(event)=> handlePlusMinusGasPrice(0 - 0.1, event)}
                    // onClick={handlePlusMinus.bind(this)}
                >-10¢</button>
                $
                <input
                    style={ styles.input }
                    name="gasPrice"
                    type="number"
                    onKeyPress={ handleKeyPress.bind(this)}
                    // style={{border: '1px solid grey', boxSizing: 'border-box'}}
                    value={gasPrice}
                    // onChange={handleInputChange.bind(this)}
                    />Gas Price
                </label>
                <button
                    style={ styles.button }
                    name='addMPG'
                    type='button'
                    onClick={(event)=> handlePlusMinusGasPrice(.1, event)}
                    // onClick={handlePlusMinus.bind(this)}
                >+10¢</button>
                <button
                    style={ styles.button }
                    name='addMPG'
                    type='button'
                    onClick={(event)=> handlePlusMinusGasPrice(0.5, event)}
                    // onClick={handlePlusMinus.bind(this)}
                >+50¢</button>
            </div>)
}
