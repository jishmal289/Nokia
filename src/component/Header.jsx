import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <Navbar  expand="lg" className="bg-white">
            <Container>
                <Navbar className='me-auto' href="#"><div style={{ color: 'darkblue', marginLeft: '50px',fontSize:'30px' }}> <b>NOKIA </b><span style={{fontSize:'30px'}}>|Phones</span> </div></Navbar>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto"
                        style={{ maxHeight: '100px', color: 'black' }}
                        navbarScroll>

                        <Nav.Link href="#action1">Smartphones</Nav.Link>
                        <Nav.Link href="#action2">Features phones</Nav.Link>
                        <Nav.Link href="#action3">Tablets</Nav.Link>
                        <Nav.Link href="#action4">Accessories</Nav.Link>
                        <Nav.Link href="#action5">Deals and Offers</Nav.Link>
                        <Nav className="ms-auto">
                            <Nav.Link className='btn  ms-3 mt-2'><i class="fa-solid fa-user" style={{ color: 'blue' }}></i></Nav.Link>
                            <Nav.Link className='btn  ms-3 mt-2'><i class="fa-sharp fa-solid fa-bag-shopping" style={{ color: 'blue' }}></i></Nav.Link>
                        </Nav>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        

    )
}

export default Header