import React from 'react'

export default ({make, makesAndModels, model, handleSubmit, mileage, gasPrice, handleInputChange, carType }) =>  (<div>
    <form onSubmit={ handleSubmit }>
     {/* <label>
             Miles per gallon:
            <input
                name="mileage"
                type="number"
                style={{boxShadow: 'inset 0 0 1px #222222'}}
                // style={{border: '1px solid grey', boxSizing: 'border-box'}}
                value={ mileage }
                onChange={handleInputChange} />
            </label>
            <br/>
            <label>
            Price of Gas:
            <input
                name="gasPrice"
                type="number"
                style={{boxShadow: 'inset 0 0 1px #222222'}}
                // style={{border: '1px solid grey', boxSizing: 'border-box'}}
                value={ gasPrice }
                onChange={handleInputChange} />
            </label>
            <br/>
            <label>
            Type of Car:
            <input
                name="carType"
                type="text"
                style={{boxShadow: 'inset 0 0 1px #222222'}}
                // style={{border: '1px solid grey', boxSizing: 'border-box'}}
                value={ carType }
                onChange={handleInputChange} />
            </label> */}
            <br/>
            <select
                style={{
                    border: '1px solid rgba(3, 1, 200, 0.6)',
                    backgroundColor: 'rgba(200,3,200,0.2)',
                    borderRadius: '5% / 50%',
                    appearance: 'buttonArrowDown'}}
                onChange={handleInputChange}
                name='make'
                value={ make } 
                >
                {
                    makesAndModels.map(car=>(<option value={car.make} key={car.make}>{car.make}</option>))
                }
            </select>
            <br/>
            {
                make && <select
                    style={{
                        border: '1px solid rgba(3, 1, 200, 0.6)',
                        backgroundColor: 'rgba(200,3,200,0.2)',
                        borderRadius: '5% / 50%',
                        appearance: 'buttonArrowDown'}}
                    onChange={handleInputChange}
                    name='model'
                    value={ model } 
                    >
                    {
                        makesAndModels.reduce((make, brand)=>{
                            if (brand.make === make.make) {
                                return brand;
                            }
                            return make
                        }, {make}).models.map(({model, year, bodyStyles })=>(<option value={model} key={model}>{model} | {bodyStyles.join(' / ')}, {year}</option>))
                    }
                </select>
            }
            <br/>
            <button type='submit'>Submit</button>
            </form>

</div>)
                        
