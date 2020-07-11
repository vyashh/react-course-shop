import React from 'react'
import './homepage.styles.scss'

const Homepage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className='content'>
                    <h1 className="title">Hats</h1>
                    <span className="title">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className='content'>
                    <h1 className="title">Jackets</h1>
                    <span className="title">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className='content'>
                    <h1 className="title">SNEAKERS</h1>
                    <span className="title">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className='content'>
                    <h1 className="title">WOMEN</h1>
                    <span className="title">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className='content'>
                    <h1 className="title">MEN</h1>
                    <span className="title">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
)

export default Homepage