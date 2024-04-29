import './Schools.css';



import tut1 from '../../../assets/images/tut1.jpg';
import tut2 from '../../../assets/images/tut2.jpg';
import tut3 from '../../../assets/images/tut3.jpg';
import tut4 from '../../../assets/images/tut4.jpg';




import React from 'react';

export function SchoolPage() {
    return (
        <div>
            <div>
                <h2 className='top-hospital-main-heading'>Top Schools in Hyderabad</h2>
            </div>
           
            <div className="containerr">
                <div  >
                    <img className="image-1" src={tut1} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h3 className='roy-head1'>Iris Florets World School</h3>
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
                    <img className="image-1" src={tut2} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h3>Creamon Buds Montessori House</h3>
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
                    <img className="image-1" src={tut3} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h3>Tnr Excellence Academy </h3>
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
                    <img className="image-1" src={tut4} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h3>Rao's Innovious International School </h3>
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