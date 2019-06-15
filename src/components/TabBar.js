import React from 'react'


export default ({ toggleFlipped, handleToggle }) => (
    <div>
        <button
            style={{
                borderTop: '1px solid rgba(220,220,220,1)',
                // borderLeft: '1px solid rgba(220,220,220,1)',
                borderLeft: 'none',
                borderRight: '1px solid rgba(220,220,220,1)',
                borderBottom: 'none',
                backgroundColor: toggleFlipped ? 'white' : 'rgba(200,200,220,1)',
                cursor: !toggleFlipped ? null : 'pointer',
            }}
            onClick={()=>handleToggle(false)
                // this.setState({toggleFlipped: false})}
            }
        >Calculate</button>
        <button
            style={{
                borderTop: '1px solid rgba(220,220,220,1)',
                // borderLeft: '1px solid rgba(220,220,220,1)',
                borderLeft: 'none',
                borderRight: '1px solid rgba(220,220,220,1)',
                borderBottom: 'none',
                backgroundColor: toggleFlipped ? 'rgba(220,200,200,1)' : 'white',
                cursor: toggleFlipped ? null : 'pointer',
            }}
            onClick={()=>handleToggle(true)
                // .setState({toggleFlipped: true})}
            }
        >Look up</button>
    </div>
)

