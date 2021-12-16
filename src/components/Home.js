import React from 'react'
import CoinsList from './CoinsList'
import './Home.css'
function Home() {
    return (
        <div className='main-con'> 
            <CoinsList className="coins-list" />
        </div>
    )
}

export default Home
