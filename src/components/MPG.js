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
        cursor: 'pointer'
    
    },
    input: {
        boxShadow: 'inset 0 0 1px #222222',
        maxWidth: 'content',
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none'
    }
}


export default ({handlePlusMinusGroup, handleInputChange, mileage, }) =>(
    <div>
        <label>
        <button
            style={ styles.button }
            name='addMPG'
            type='button'
            onClick={(event)=> handlePlusMinusGroup(0 - 5, event)}
            // onClick={handlePlusMinus.bind(this)}
        >-5</button>
        <button
            style={ styles.button }
            name='addMPG'
            type='button'
            onClick={(event)=> handlePlusMinusGroup(0 - 1, event)}
            // onClick={handlePlusMinus.bind(this)}
        >-</button>
            <input
                name="mileage"
                onFocus={(event)=>event.target.select()}
                type="tel"
                // style={{boxShadow: 'inset 0 0 1px #222222'}}
                style={ styles.input }
                // style={{border: '1px solid grey', boxSizing: 'border-box'}}
                value={mileage}
                onKeyPress={(event) =>{
                    event.which === 13 && event.preventDefault() || event.which === 32 &&
                        event.preventDefault();
                      }
                }
                onChange={handleInputChange.bind(this)} />
        <button
            style={ styles.button }
            name='addMPG'
            type='button'
            onClick={(event)=> handlePlusMinusGroup(1, event)}
            // onClick={handlePlusMinus.bind(this)}
        >+</button>
        <button
            style={ styles.button }
            name='addMPG'
            type='button'
            onClick={(event)=> handlePlusMinusGroup(5, event)}
            // onClick={handlePlusMinus.bind(this)}
        >+5</button>
                Miles per gallon
        </label>
    </div>
)