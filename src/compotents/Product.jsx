import React from 'react'
import Card from 'react-bootstrap/Card';

function Product() {
    return (
        <div>
            <div className='section-4'>
                <h2 className='ms-5 mt-5'>You might also like</h2>
                <p><a style={{ marginLeft: '65rem',textDecoration:'none'}} href="">See all Smartphones</a></p>
            </div>
        <div className='d-flex justify-content-evenly '>
        <Card style={{ width: '18rem',height:'600px',border:'none' }}>
                <Card.Img style={{}} variant="top" src="https://images.ctfassets.net/wcfotm6rrl7u/3WD8FE2nANudFTBrnoTL6u/ea3074746f7c7c15b8aedc81efdf6b97/nokia-C22-charcoal-back-in.png?w=1593&h=1593&fm=avif&f=center&fit=pad&q=88" />
                <Card.Img style={{marginTop:'-288px', marginLeft:'50px'}} variant="top" src="https://images.ctfassets.net/wcfotm6rrl7u/7Lw73MwpDRmglBnV2DgcFp/f5667724fbfde55072d38bb4633264a7/nokia-C22-charcoal-front-int.png?w=1593&h=1593&fm=avif&f=center&fit=pad&q=88" />
                <Card.Body className='ms-5'>
                    <p className='text-success '>Lower Price</p>
                    <Card.Title>Nokia G42 5G</Card.Title>
                    <Card.Text>
                        So fast .So much battery
                    </Card.Text>
                </Card.Body>
                <h3 className='ms-5 mb-3'>₹12,999</h3>
                <Card.Body>
                <div className='d-flex justify-content-evenly'>
                <button style={{borderRadius:'5px'}} className='btn btn-primary'>Shop</button>
                <p><a style={{textDecoration:'none'}} href="">Learn more</a></p>
                </div>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem',height:'600px',border:'none' }}>
                <Card.Img variant="top" src="https://images.ctfassets.net/wcfotm6rrl7u/2k0kORXEbfJNTwsb5FCARl/31966ee6ccb7fcb796f30f897a00a22b/nokia-G42_5G-so_pink-back-in.png?w=1004&h=1004&fm=avif&f=center&fit=pad&q=88"/>
                <Card.Img variant="top" style={{marginTop:'-288px', marginLeft:'50px'}} src="https://images.ctfassets.net/wcfotm6rrl7u/2Ab9Bc2Wls8BNeLX50hqeW/eb10443b27be2066b49b33d8ca3f30a0/nokia-G42_5G-so_pink-front-in.png?w=1004&h=1004&fm=avif&f=center&fit=pad&q=88" />
                <Card.Body className='ms-5'>
                    <p className='text-success '>Lower Price</p>
                    <Card.Title>Nokia C32</Card.Title>
                    <Card.Text>
                        Make the night shine
                    </Card.Text>
                </Card.Body>
                <h3 className='ms-5 mb-3'>₹12,999</h3>
                <Card.Body>
                <div className='d-flex justify-content-evenly'>
                <button style={{borderRadius:'5px'}} className='btn btn-primary'>Shop</button>
                <p><a style={{textDecoration:'none'}} href="">Learn more</a></p>
                </div>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem',height:'600px',border:'none' }}>
                <Card.Img variant="top" src="https://images.ctfassets.net/wcfotm6rrl7u/4p1Tuvc1QGquOO0NjkRiwP/3d769dd993700077a52ced737fa4adc4/nokia-C32-Mint-back-in.png?w=753&h=753&fm=avif&f=center&fit=pad&q=88" />
                <Card.Img variant="top" style={{marginTop:'-288px', marginLeft:'50px'}} src="https://images.ctfassets.net/wcfotm6rrl7u/5DvmMWfduBdWYGiMmo9u26/6d8bb78887ffb37e03912bb5f6b97a23/nokia-C32-Mint-front-in.png?w=1004&h=1004&fm=avif&f=center&fit=pad&q=88" />
                <Card.Body className='ms-5'>
                    <p className='text-success '>Lower Price</p>
                    <Card.Title>Nokia C22</Card.Title>
                    <Card.Text>
                        A battery that lasts and a body that endures
                    </Card.Text>
                </Card.Body>
                <h3 className='ms-5 mb-3'>₹12,999</h3>
                <Card.Body>
                <div className='d-flex justify-content-evenly'>
                <button style={{borderRadius:'5px'}} className='btn btn-primary'>Shop</button>
                <p><a style={{textDecoration:'none'}} href="">Learn more</a></p>
                </div>
                </Card.Body>
            </Card>
        
        </div>
        </div>
    )
}

export default Product