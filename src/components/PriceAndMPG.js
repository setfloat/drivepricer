import React, { Component } from 'react'
import MPG from './MPG'
import GasPrice from './GasPrice'

const styles = {
    button: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        margin: '2px',
        cursor: 'pointer'
    
    },
    input: {
        boxShadow: 'inset 0 0 1px #222222',
        maxWidth: 'content',
        backgroundColor: 'rgba(255,255,255,0.1)',
        border: 'none'
    }
}

export default class PriceAndMPG extends Component {
    state = {
        cars: {
            toyota: {
                rav4: {
                    mileage: 26
                }
            },
            subaru: {
                crosstrek: {
                    mileage: 29
                }
            }
        },
        gasPrice: 2.91,
        cost100k: null,
        mileage: 25,
        carType: '',
        make: '',
        model: ''
    }

    calc100 = (mileage, gasPrice) => {

        return (100000/mileage * gasPrice)
    }

    handleInputChange(event) {

        if (this.state.cost100k) {
            this.setState({ cost100k: null })
        }
        const { type, checked, name } = event.target
        let  value = type === 'checkbox' ? checked : event.target.value;
        
        if( type === 'tel' || type === 'number' ) {
            if (value === '') {
                    value = new Number(0).valueOf();
                    this.setState({
                        [name]: value
                    })
                    
            } else if ( isNaN(Number(value)) ) {
                    value = null;
            } else {
                if (typeof value === "string") {
                    value = new Number(value).valueOf();  
                    // console.log(value)
                }
                this.setState({
                    [name]: value
                    });
            }
        } else {
            this.setState({
                [name]: value
            });
        }
      }

    handleSubmit(event) {
        event.preventDefault();
        let { mileage, gasPrice, carType } = this.state;

        const cost100k = this.calc100(mileage, gasPrice).toFixed(0)

        if(!Number.isNaN(cost100k) ) {
            this.setState({ mileage: 25, gasPrice: 3.00, carType: '' })
            this.props.addCarCost({ cost100k, mileage, gasPrice, carType })
        }
    }

    handlePlusMinus(event) {
        let { mileage } = this.state;
        let retMileage = mileage + 1;

        this.setState({
            mileage: retMileage
        })
    }

    handlePlusMinusGroup(amount, event) {
        let { mileage } = this.state;
        let retMileage = mileage + amount;
        console.log(event)

        this.setState({
            mileage: retMileage
        })

    }

    handlePlusMinusGasPrice(amount, event) {
        let { gasPrice } = this.state;
        let retGasPrice = gasPrice + amount;
        console.log(event)
        retGasPrice = new Number(retGasPrice.toFixed(2)).valueOf()
        console.log(typeof retGasPrice)

        this.setState({
            gasPrice: retGasPrice
        })
    }

    handleKeyPress(event) {
        function checkAllowDecimal(keyCode, fullNum) {
            switch(keyCode) {
                case !190: 
                    return false;

                case 190: 
                    if (fullNum.split().includes('.')) {
                        return false;
                    } else {
                        return true;
                    }
            }
            if (keyCode !== 190) {
                return false;
            } else {

            }
        }
        if(event.which === 13 || event.which === 32) {
            event.preventDefault();
        }

        let { name, value } = event.target
        if (this.state.cost100k) {
            this.setState({ cost100k: null })
        }
        console.log(event.target.value, 'eventtargetvalue')
        console.log(event.currentTarget.value, 'currenttarget')

        console.log(name, value, 'manevalue')

        if (event.which >= 48 && event.which <= 57 || checkAllowDecimal(event.which, event.target.value)) {
            console.log(event.which, 'HERE')
            this.setState({
                [name]: value
            });

        }
        // function allowedKeys(keyCode, fullNum) {}



        // console.log(typeof event.key, 'key')
        // console.log(event.which, 'which')
        // console.log(event.target.value, 'val')
    }

    render() {
        let { handleSubmit, mileage, gasPrice, carType } = this.state;
        
        return ( <form
            onSubmit={this.handleSubmit.bind(this)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flexStart',
                alignItems: 'flexStart'

            }}
            >
            <GasPrice
                handleKeyPress={this.handleKeyPress.bind(this)}
                handleInputChange={this.handleInputChange.bind(this)}
                handlePlusMinusGasPrice={ this.handlePlusMinusGasPrice.bind(this) }
                gasPrice={ gasPrice }
            >
            </GasPrice>
            <MPG
                handleInputChange={ this.handleInputChange.bind(this) }
                handlePlusMinusGroup={ this.handlePlusMinusGroup.bind(this) }
                mileage={ mileage }
            >
            </MPG>
            <label>Type of Car:<input
                name="carType"
                type="text"
                style={{boxShadow: 'inset 0 0 1px #222222'}}
                style={ styles.input }
                // style={{border: '1px solid grey', boxSizing: 'border-box'}}
                value={carType}
                onChange={this.handleInputChange.bind(this)} />
            </label>
            <button style={{minWidth: '40px', maxWidth: '200px', border: '1px solid white', backgroundColor: 'rgba(255,255,255,0)'}} type='submit'>Submit</button>
        </form>)
    }
}