import './Biryani_page.css';

import biryani4 from '../../../assets/images/biryani4.jpg';
import biryani1 from '../../../assets/images/biryani1.jpg';
import biryani2 from '../../../assets/images/biryani2.jpg';
import biryani3 from '../../../assets/images/biryani3.jpg';



import React from 'react';

export function BiryaniComponent() {
    return (
        <div>
            <div>
                <h2 className='top-hospital-main-heading'>Best Biryani Restaurents in Hyderabad - Order Food Online</h2>
            </div>
            
            <div className="containerr">
                <div  >
                    <img className="image-1" src={biryani4} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h1 className='roy-head1'>Bawarchi</h1>
                    <p style={{ cursor: 'pointer' }}>
                        <b>Trust</b> <a href="#">Verified</a> <button className='top-search' style={{ cursor: 'pointer' }}>Top Search</button>
                    </p>
                    <p>village Navi Dubai Vashi, Navi Dubai.<b>"Immediate availability"</b> 10 suggestions</p>
                    {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
                    <br />
                    <button className='shownumber-1' style={{ backgroundColor: 'green', color: 'aliceblue', cursor: 'pointer' }}>
                        <b>Show Number</b>
                    </button>
                    <button className='bookappointment-1' style={{ backgroundColor: 'blue', color: 'white', cursor: 'pointer' }}>
                        <b>Book Appointment</b>
                    </button>
                    <button className='check-1' style={{ backgroundColor: 'white', color: 'black', cursor: 'pointer' }}>Chat</button>
                </div>
            </div>
            <br></br>
            <div className="containerr">
                <div >
                    <img className="image-1" src={biryani1} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h1>Paradise </h1>
                    <p style={{ cursor: 'pointer' }}>
                        <b>Trust</b> <a href="#">Verified</a> <button className='top-search' style={{ cursor: 'pointer' }}>Top Search</button>
                    </p>
                    <p>village Navi Dubai Vashi, Navi Dubai.<b>"Immediate availability"</b> 10 suggestions</p>
                    {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
                    <br />
                    <button className='shownumber-1' style={{ backgroundColor: 'green', color: 'aliceblue', cursor: 'pointer' }}>
                        <b>Show Number</b>
                    </button>
                    <button className='bookappointment-1' style={{ backgroundColor: 'blue', color: 'white', cursor: 'pointer' }}>
                        <b>Book Appointment</b>
                    </button>
                    <button className='check-1' style={{ backgroundColor: 'white', color: 'black', cursor: 'pointer' }}>Chat</button>
                </div>
            </div>
            <br></br>
            <div className="containerr">
                <div >
                    <img className="image-1" src={biryani2} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h1>Grand Hotel </h1>
                    <p style={{ cursor: 'pointer' }}>
                        <b>Trust</b> <a href="#">Verified</a> <button className='top-search' style={{ cursor: 'pointer' }}>Top Search</button>
                    </p>
                    <p>village Navi duabi Vashi, Navi dubai.<b>"Immediate availability"</b> 10 suggestions</p>
                    {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
                    <br />
                    <button className='shownumber-1' style={{ backgroundColor: 'green', color: 'aliceblue', cursor: 'pointer' }}>
                        <b>Show Number</b>
                    </button>
                    <button className='bookappointment-1' style={{ backgroundColor: 'blue', color: 'white', cursor: 'pointer' }}>
                        <b>Book Appointment</b>
                    </button>
                    <button className='check-1' style={{ backgroundColor: 'white', color: 'black', cursor: 'pointer' }}>Chat</button>
                </div>
            </div>
            <br></br>
            <div className="containerr">
                <div >
                    <img className="image-1" src={biryani3} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h1>Hotel Shadab </h1>
                    <p style={{ cursor: 'pointer' }}>
                        <b>Trust</b> <a href="#">Verified</a> <button className='top-search' style={{ cursor: 'pointer' }}>Top Search</button>
                    </p>
                    <p>village Navi dubai Vashi, Navi duabi.<b>"Immediate availability"</b> 10 suggestions</p>
                    {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
                    <br />
                    <button className='shownumber-1' style={{ backgroundColor: 'green', color: 'aliceblue', cursor: 'pointer' }}>
                        <b>Show Number</b>
                    </button>
                    <button className='bookappointment-1' style={{ backgroundColor: 'blue', color: 'white', cursor: 'pointer' }}>
                        <b>Book Appointment</b>
                    </button>
                    <button className='check-1' style={{ backgroundColor: 'white', color: 'black', cursor: 'pointer' }}>Chat</button>
                </div>
            </div>
        </div>
    )
}
