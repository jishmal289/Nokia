import React from 'react'
import './Home.css';

function Home() {
    return (
        <div style={{marginBottom:'10rem'}} className="section">
            <div style={{ alignItems: 'center' }} className=" main d-flex p-0">
                <div style={{ marginBottom: '200px', marginLeft: '100px' }} className="product-details d-flex">
                    <h2 style={{ color: 'white', marginTop: '200px' }} className='head-1'>Nokia G42 5G</h2>
                    <p className='fs-5 mb-3'>#MoveFast</p>
                    <p className='fs-5'>Snapdragon 480+5G</p>
                    <p className='fs-5 mb-3'>50MP triple AI camara</p>
                    <p className='fs-5'>Festive discount up to ₹1000.Limited period offer!</p>
                    <button><b>Buy Now</b></button>
                </div>
                <div style={{ marginBottom: '0px',marginBottom:'50px', marginRight:'70px',marginTop:'80px' }} className="product-image">
                    <img src="https://images.ctfassets.net/wcfotm6rrl7u/2JCmAxK7jyL3skazCH2AKO/40b8a371768fd2d01c8de4633f89e25e/nokia_G42_5G-DTC-Hero-device-desktop-IN.png?w=1593&h=1365&fm=avif&q=88" alt="" />
                </div>
            </div>
            <div className="section-2 d-flex justify-content-center">
                <div style={{ marginTop: '200px', color: 'white' }} className="mobile">
                    <h2>Nokia C32</h2>
                    <h1>See Mee Shine</h1>
                    <p>7GB RAM 50MP Dual AI Camera</p>
                    <button className='btn-2'><b>Buy Now</b></button>
                </div>
                <div className="pro-2 ">
                    <img src="https://images.ctfassets.net/wcfotm6rrl7u/2UMzA3xHuHOlsW8qPAsYWF/eff50f3bc790c0d7792c6a9e6bd3cab9/nokia_C22-IN-DTC-Hero.png?w=881&h=881&fm=avif&q=88" alt="" />
                </div>
            </div>
            <div className="sec-3  d-flex justify-content-center">
                <div className='mobile'>
                    <div className="section-3 d-flex justify-content-center">
                        <div style={{ marginTop: '10px', color: 'black', marginLeft: '100px', width: '350px' }} className="phone">
                            <h2>Nokia 2660 Flip</h2>
                            <h1>Welcome to the flip side</h1>
                            <p style={{ width: '500px' }}>Hot deal ! Get 15% off on all select featurephones. Place your order today. Coupon code DETOX</p>
                            <button style={{ height: '50px', width: '130px', borderRadius: '10px' }} className='btn-btn-border'><b>Buy Now</b></button>
                        </div>
                        <div className="pro-3">
                            <img style={{ marginBottom: '300px', width: '500px,' }} src="https://images.ctfassets.net/wcfotm6rrl7u/72oed46TjESJzpOU95sQuX/d33ba386cda5586f8fbb8135f864e94c/nokia_2660_Flip-DTC-HERO-desktop__RTL_localised_.png?w=1593&h=796&fm=avif&q=88" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Home