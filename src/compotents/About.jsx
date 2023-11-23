import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function About() {
    return (
        <>
            <div>
                <div style={{ backgroundColor: 'darkblue', color: 'white', marginTop: '100px' }} className='d-flex justify-content-evenly'>
                    <h2 style={{ marginRight: '310px', marginTop: '100px',fontSize:'27px' }} className='mb-5'>Don't miss out. Sign up and <br /> be the first to get Nokia <br /> phone news and offers.</h2>

                    <Form >
                        <Form.Group style={{ marginTop: '60px', width: '450px' }} className="mb-3 " controlId="formBasicEmail">
                            <Form.Control style={{ backgroundColor: 'transparent', borderColor: 'white', color: 'white' }} className='' type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="By sigining up,I agree to the HMD Gbobal Privacy Policy" />
                        </Form.Group>
                        <Button className='w-25' style={{ borderRadius: '5px' }} variant="primary" type="submit">
                            Sign me up
                        </Button>
                    </Form>
                </div>
                <div className='d-flex justify-content-center align-items-center p-5'>
                    <p style={{fontSize:'12px',justifyItems:'center'}}> These are global average estimated retail prices and local prices will vary depending on duties, taxes and currency exchange rates. Android is a trademark of Google LLC. Variations on offering may apply, check local availability. All specifications, features and other product information provided are subject to change without notice. All images used are for illustrative purposes only.

                        5G might not be supported by your network service provider or by the service provider you are using when travelling. Actual speed depends on network and other factors.
                    </p>

                </div>
                <div>
                    <button style={{ backgroundColor: 'blue', width: '50px', height: '45px', border: 'none', borderRadius: '5px' }} className='ms-5' type="submit"><i class="fa-solid fa-arrow-up" style={{ color: 'white' }}></i></button>
                </div>
                <Row>
                    <Col className='ms-5 mt-5'> <a style={{textDecoration:'none'}} href="Smartphones">Smartphones</a>
                        <p><a style={{textDecoration:'none'}} href="Feature phones">Feature phones</a></p>
                        <p> <a style={{textDecoration:'none'}} href="Feature phones">Tablets</a></p>
                        <p><a style={{textDecoration:'none'}} href="Feature phones">Accessories</a></p>
                        <p><a style={{textDecoration:'none'}} href="Feature phones"> Deals and Offers</a>
                        </p><a style={{textDecoration:'none'}} href="Feature phones">Corporate Inquiry</a></Col>
                    <Col className='mt-5'>
                        <h5>Nokia Phones and Android</h5>
                        <p><a style={{textDecoration:'none'}} href="Feature phones">Android™ 13</a></p>
                        <h5>Support</h5>
                        <p>Customer support
                            User guides
                            FAQs
                            Service and repairs
                            Warranty and protection</p>
                    </Col>
                    <Col className='mt-5'>
                        <h5>For enterprises</h5>
                        <p>Nokia phones for business
                        </p>
                        <h5 className='mt-3'> <a style={{textDecoration:'none'}} href="Feature phones">Visit Nokia.Com</a> </h5>
                    </Col>
                </Row>
                <hr />
            </div>
            <div className='ms-5 mt-5 d-flex'>
                <a className='me-3'>                <i class="fa-brands fa-instagram fa-lg"></i>
                </a>
                <a className='me-3'><i class="fa-brands fa-facebook fa-lg"></i></a>
                <a className='me-3'>                <i class="fa-brands fa-x-twitter fa-lg"></i>
                </a>
                <a className='me-3'> <i class="fa-brands fa-youtube fa-lg"></i></a>
            </div>
            <hr />
        </>
    )
}

export default About