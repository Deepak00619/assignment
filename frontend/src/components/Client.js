import React from 'react'
import client1 from '../images/client1.png'
import client2 from '../images/client2.png'
import client3 from '../images/client3.png'
import elips from '../images/ellips.png'

const client = () => {
    return (
        <div className='wrapper'>
        <div className='ellips'>
        <img src={elips} alt='elips' />
        </div>
            <div className='client-section'>
            <h4>What makes us unique?</h4>
            
            <div className='client-container'>
            <img src={client1} alt='client1' />
            <img src={client2} alt='client1' />
            
            <img src={client3} alt='client1' />
            </div>
            </div>
        </div>
    )
}

export default client
