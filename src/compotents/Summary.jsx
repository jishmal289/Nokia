import React from 'react'
import Card from 'react-bootstrap/Card';


function Summary() {
    return (
        <>
            <div style={{ justifyContent: 'evenly', backgroundColor: 'gainsboro' }} className=' d-flex'>
                <div style={{ marginTop: '90px' }} className='ms-5'>
                    <h5>Pure Android</h5>
                    <h1>Sometimes, less <br /> is more. Much,  much more.</h1>
                </div>

                <div><p style={{ marginTop: '6rem' }} className='me-5'><b>There are little things in our everyday that hold us back: <br /> the traffic; the weather; the store you forgot to visit. <br /> So when you turn to your phone for answers, the last thing you need is<br></br> something slowing you down. <br />

                    We don’t add bloatware that wastes your battery.br<br></br> We don’t add clutter that hogs
                    processing power. Nokia smartphones <br /> come with Android. Purely, wholly,<br /> Android.
                    Nothing you don’t want, nothing to get in your way.</b></p>
                </div>
            </div>
            <div style={{ backgroundColor: 'gainsboro' }} className=''>
                <img style={{ marginLeft: '400px', marginRight: '200px' }} className='h-25 w-25' src="https://images.ctfassets.net/wcfotm6rrl7u/4RYFcut5iCU4d5jRmMyABt/203ac5a746d8256b12cf0348c81193bf/nokia-3-4-pure-android.png?w=1593&h=2294&fm=avif&q=88" alt="" />
            </div>

            <div className='section-5'>
                <h2 className='ms-5 mt-5'>You might also like</h2>
                <p><a style={{ marginLeft: '65rem',textDecoration:'none' }} href="">See all Smartphones</a></p>
            </div>
            <div className='d-flex justify-content-evenly '>
                <Card style={{ width: '18rem', height: '600px', border: 'none' }}>
                    <Card.Img style={{}} variant="top" src="https://images.ctfassets.net/wcfotm6rrl7u/5zKLpwuegMfQPHT03fYRwV/9efd826fffd576b073b6a30696d5f56c/nokia-103-Purple-back-int.png?w=1593&h=1593&fm=avif&f=center&fit=pad&q=88" />
                    <Card.Img variant="top" style={{marginTop:'-288px', marginLeft:'50px'}} src="https://images.ctfassets.net/wcfotm6rrl7u/6YGmL5F4W1HqDEkK7T9y3q/3fede365aa43268b83a4eec58e637589/nokia-103-Purple-front-int.png?w=1593&h=1593&fm=avif&f=center&fit=pad&q=88" />
                    <Card.Body className='ms-5'>
                        <p className='text-success '>Lower Price</p>
                        <Card.Title>Nokia 150(2023)</Card.Title>
                        <Card.Text>
                            The premium-design features phone
                        </Card.Text>
                    </Card.Body>
                    <h3 className='ms-5 mb-5'>₹2,699</h3>
                    <Card.Body>
                        <div className='d-flex justify-content-evenly'>
                            <button style={{ borderRadius: '5px' }} className='btn btn-primary'>Shop</button>
                            <p><a style={{textDecoration:'none'}} href="">Learn more</a></p>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height: '600px', border: 'none' }}>
                    <Card.Img variant="top" src="https://images.ctfassets.net/wcfotm6rrl7u/1gSpOpkTiE0eSZrC7BszSQ/e55348bfa79aab73529d1bd945e14805/nokia-150-Cyan-back-int.png?w=1593&h=1593&fm=avif&f=center&fit=pad&q=88" />
                    <Card.Img variant="top" style={{marginTop:'-288px', marginLeft:'50px'}} src="https://images.ctfassets.net/wcfotm6rrl7u/2rWMN3Qu3tiVdfxnRmePiK/fa8bf5456bdc73226ce113cab4646c7e/nokia-150-Cyan-front-int.png?w=1593&h=1593&fm=avif&f=center&fit=pad&q=88" />
                    <Card.Body className='ms-5'>
                        <p className='text-success '>Lower Price</p>
                        <Card.Title>Nokia 130M(2023)</Card.Title>
                        <Card.Text>
                            For longs calls and loud music
                        </Card.Text>
                    </Card.Body>
                    <h3 className='ms-5 mb-5'>₹1849</h3>
                    <Card.Body>
                        <div className='d-flex justify-content-evenly'>
                            <button style={{ borderRadius: '5px' }} className='btn btn-primary'>Shop</button>
                            <p><a style={{textDecoration:'none'}} href="">Learn more</a></p>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height: '600px', border: 'none' }}>
                <Card.Img variant="top" src="https://images.ctfassets.net/wcfotm6rrl7u/6bzzEhSzjhwtjgDc5OSLfD/24d2c3f6656ce206ac84d6f53ff87943/nokia-110-charcoal-back-int.png?w=1593&h=1593&fm=avif&f=center&fit=pad&q=88" />
                    <Card.Img variant="top" style={{marginTop:'-288px', marginLeft:'50px'}} src="https://images.ctfassets.net/wcfotm6rrl7u/1qoTqYxWFvhChvzn2Pk3uu/5c83c91bc4a84821dc82893102cb7f7a/nokia-110-charcoal-front-int.png?w=1593&h=1593&fm=avif&f=center&fit=pad&q=88" />
                    <Card.Body className='ms-5'>
                        <p className='text-success '>Lower Price</p>
                        <Card.Title>Nokia 110(2023)</Card.Title>
                        <Card.Text>
                            Make the most of every moment
                        </Card.Text>
                    </Card.Body>
                    <h3 className='ms-5 mb-5'>₹1699</h3>
                    <Card.Body>
                        <div className='d-flex justify-content-evenly'>
                            <button style={{ borderRadius: '5px' }} className='btn btn-primary'>Shop</button>
                            <p><a style={{textDecoration:'none'}} href="">Learn more</a></p>
                        </div>
                    </Card.Body>
                </Card>
                <div>
                
                </div>
            </div>
        
                    
        </>
    )
}

export default Summary