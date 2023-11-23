import React from 'react'

function Footer() {
    return (
        <>
            <div style={{ marginLeft: '130px' }} className=''>                <h5><i class="fa-solid fa-location-dot"></i> India</h5>
            </div>
            <div className='justify-content-evenly d-flex'>
                <div>
                    <p style={{ fontSize: '13px', marginRight: '100px' }}>HMD© 2023 HMD Global. All rights reserved. HMD Global Oy is a licensee of the <br /> Nokia brand for phones & tablets. Nokia is a registered trademark of Nokia <br /> Corporation. Nokia Corporation is not a manufacturer, importer, distributor or <br /> retailer of the Nokia-branded products offered by HMD Global Oy.Bertel Jungin <br /> aukio 9, 02600 Espoo, Finland. Business ID 2724044-2</p>
                </div>
                <div className='row'>
                    <p> <a style={{ textDecoration: 'none', fontSize: '15px' }} href="">Site terms </a>
                    <a style={{ textDecoration: 'none', fontSize: '15px' }} href=''> Seller terms   </a>
                    <a style={{ textDecoration: 'none', fontSize: '15px' }} href=''> Privacy   </a>
                    <a style={{ textDecoration: 'none', fontSize: '15px' }} href=''> Cookie settings  </a>
                    <div>
                        <p>
                            <a style={{ textDecoration: 'none', fontSize: '15px' }} href="">E-waste  </a>
                            <a style={{ textDecoration: 'none', fontSize: '15px' }} href="">  Press</a>
                        </p>
                    </div>
                    </p>
                
                </div>
            </div>
        </>
    )
}

export default Footer