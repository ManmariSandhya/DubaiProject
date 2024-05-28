import './Schools.css';



import tut1 from '../../../assets/images/tut1.jpg';
import tut2 from '../../../assets/images/tut2.jpg';
import tut3 from '../../../assets/images/tut3.jpg';
import tut4 from '../../../assets/images/tut4.jpg';




import React from 'react';
import { Chat, GeoAlt, Star, Table, Telephone } from 'react-bootstrap-icons';

export function SchoolPage() {
    return (
        <div>
            <div>
                <h2 className='top-hospital-main-heading' style={{textAlign:'center',marginTop:'30px'}}>Top Schools in Hyderabad</h2>
            </div>
           
            <div className="containerr mt-5">
                <div  >
                    <img className="image-1" src={tut1} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h3 className='roy-head1'>Iris Florets World School</h3>
                    <span className='haleem_ratings mt-2'>4.4</span>&nbsp;&nbsp;<Star></Star>   <Star></Star>   <Star></Star>   <Star></Star>   <Star></Star>
                    <p className='mt-3'> <GeoAlt></GeoAlt> Mumbai, Maharashtra</p>
                    {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
                    <br />
                    <button className='shownumber-1' style={{ backgroundColor: '#6ad4cf', color: 'white', cursor: 'pointer' ,border:'none',padding:'5px',borderRadius:'5px' }}>
                        <b> <Telephone></Telephone> Show Number</b>
                    </button>&nbsp;
                    <button className='bookappointment-1' style={{ backgroundColor: '#d4be6a', color: 'white', cursor: 'pointer',border:'none' ,padding:'5px',borderRadius:'5px' }}>
                        <b><Table></Table> Book An Appointment</b>
                    </button>&nbsp;
                    <button className='check-1' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer',border:'none',padding:'5px',borderRadius:'5px' }}><Chat></Chat> Chat</button>
                </div>
            </div>
            <br></br>
            <div className="containerr">
                <div >
                    <img className="image-1" src={tut2} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h3>Creamon Buds Montessori House</h3>
                    <span className='haleem_ratings mt-2'>4.0</span>&nbsp;&nbsp;<Star></Star>   <Star></Star>   <Star></Star>   <Star></Star>   <Star></Star>
                    <p className='mt-3'> <GeoAlt></GeoAlt> Mumbai, Maharashtra</p>
                    {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
                    <br />
                    <button className='shownumber-1' style={{ backgroundColor: '#6ad4cf', color: 'white', cursor: 'pointer' ,border:'none',padding:'5px',borderRadius:'5px' }}>
                        <b> <Telephone></Telephone> Show Number</b>
                    </button>&nbsp;
                    <button className='bookappointment-1' style={{ backgroundColor: '#d4be6a', color: 'white', cursor: 'pointer',border:'none' ,padding:'5px',borderRadius:'5px' }}>
                        <b><Table></Table> Book An Appointment</b>
                    </button>&nbsp;
                    <button className='check-1' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer',border:'none',padding:'5px',borderRadius:'5px' }}><Chat></Chat> Chat</button>
                </div>
            </div>
            <br></br>
            <div className="containerr">
                <div >
                    <img className="image-1" src={tut3} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h3>Tnr Excellence Academy </h3>
                    <span className='haleem_ratings mt-2'>4.2</span>&nbsp;&nbsp;<Star></Star>   <Star></Star>   <Star></Star>   <Star></Star>   <Star></Star>
                    <p className='mt-3'> <GeoAlt></GeoAlt> Mumbai, Maharashtra</p>
                    {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
                    <br />
                    <button className='shownumber-1' style={{ backgroundColor: '#6ad4cf', color: 'white', cursor: 'pointer' ,border:'none',padding:'5px',borderRadius:'5px' }}>
                        <b> <Telephone></Telephone> Show Number</b>
                    </button>&nbsp;
                    <button className='bookappointment-1' style={{ backgroundColor: '#d4be6a', color: 'white', cursor: 'pointer',border:'none' ,padding:'5px',borderRadius:'5px' }}>
                        <b><Table></Table> Book An Appointment</b>
                    </button>&nbsp;
                    <button className='check-1' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer',border:'none',padding:'5px',borderRadius:'5px' }}><Chat></Chat> Chat</button>
                </div>
            </div>
            <br></br>
            <div className="containerr">
                <div >
                    <img className="image-1" src={tut4} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h3>Rao's Innovious International School </h3>
                    <span className='haleem_ratings mt-2'>4.3</span>&nbsp;&nbsp;<Star></Star>   <Star></Star>   <Star></Star>   <Star></Star>   <Star></Star>
                    <p className='mt-3'> <GeoAlt></GeoAlt> Mumbai, Maharashtra</p>
                    {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
                    <br />
                    <button className='shownumber-1' style={{ backgroundColor: '#6ad4cf', color: 'white', cursor: 'pointer' ,border:'none',padding:'5px',borderRadius:'5px' }}>
                        <b> <Telephone></Telephone> Show Number</b>
                    </button>&nbsp;
                    <button className='bookappointment-1' style={{ backgroundColor: '#d4be6a', color: 'white', cursor: 'pointer',border:'none' ,padding:'5px',borderRadius:'5px' }}>
                        <b><Table></Table> Book An Appointment</b>
                    </button>&nbsp;
                    <button className='check-1' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer',border:'none',padding:'5px',borderRadius:'5px' }}><Chat></Chat> Chat</button>
                
                </div>
            </div>
        </div>
    )
}
