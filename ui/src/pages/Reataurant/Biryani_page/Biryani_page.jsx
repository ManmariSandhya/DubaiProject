import './Biryani_page.css';

import biryani4 from '../../../assets/images/biryani4.jpg';
import biryani1 from '../../../assets/images/biryani1.jpg';
import biryani2 from '../../../assets/images/biryani2.jpg';
import biryani3 from '../../../assets/images/biryani3.jpg';



import React from 'react';
import { Chat, GeoAlt, Heart, Phone, Star, StarFill, Table, Telephone } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export function BiryaniComponent() {
    return (
        <div>
            <div>
                <h2 className='top-hospital-main-heading mt-3' style={{textAlign:'center'}}>Best Biryani Restaurents in Hyderabad - Order Food Online</h2>
            </div>

            <div className="containerr mt-3">
                <div  >
                    <img className="image-1" src={biryani4} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h1 className='roy-head1'>Bawarchi<Heart style={{marginLeft:'620px'}}></Heart></h1>
                    <span className='haleem_ratings mt-2'>4.0</span>&nbsp;&nbsp;<Star></Star>   <Star></Star>   <Star></Star>   <Star></Star>   <Star></Star>
                    <p className='mt-3'> <GeoAlt></GeoAlt>  Plot No. 44, RTC X Rd, Beside Sandhya Theatre, Chikkadpally, New Nallakunta, Hyderabad, Telangana 500020</p>
                    {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
                    <br />
                    <button className='shownumber-1' style={{ backgroundColor: '#6ad4cf', color: 'white', cursor: 'pointer' ,border:'none',padding:'5px',borderRadius:'5px' }}>
                        <b> <Telephone></Telephone> Show Number</b>
                    </button>&nbsp;
                    <button className='bookappointment-1' style={{ backgroundColor: '#d4be6a', color: 'white', cursor: 'pointer',border:'none' ,padding:'5px',borderRadius:'5px' }}>
                     <Link to="/bawarchi_biryani" style={{textDecoration:'none',color:'white'}}>  <b><Table></Table> Book Table</b> </Link> 
                    </button>&nbsp;
                    <button className='check-1' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer',border:'none',padding:'5px',borderRadius:'5px' }}><Chat></Chat> Chat</button>
                </div>
            </div>
            <br></br>
            <div className="containerr">
                <div >
                    <img className="image-1" src={biryani1} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h1>Paradise <Heart style={{marginLeft:'620px'}}></Heart></h1>
                    <span className='haleem_ratings mt-2'>4.0</span>&nbsp;&nbsp;<Star></Star>   <Star></Star>   <Star></Star>    <Star></Star>    <Star></Star>
                    <p className='mt-3'> <GeoAlt></GeoAlt> 7-1-399/A, S.R Nagar Main Road, Ameerpet, beside PS, Sanjeeva Reddy Nagar, Hyderabad, Telangana 500038</p>
                    {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
                    <br />
                    <button className='shownumber-1' style={{ backgroundColor: '#6ad4cf', color: 'white', cursor: 'pointer' ,border:'none',padding:'5px',borderRadius:'5px' }}>
                        <b> <Telephone></Telephone> Show Number</b>
                    </button>&nbsp;
                    <button className='bookappointment-1' style={{ backgroundColor: '#d4be6a', color: 'white', cursor: 'pointer',border:'none' ,padding:'5px',borderRadius:'5px' }}>
                        <b><Table></Table> Book Table</b>
                    </button>&nbsp;
                    <button className='check-1' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer',border:'none',padding:'5px',borderRadius:'5px' }}><Chat></Chat> Chat</button>
                </div>
            </div>
            <br></br>
            <div className="containerr">
                <div >
                    <img className="image-1" src={biryani2} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h1>Grand Hotel <Heart style={{marginLeft:'550px'}}></Heart></h1><span className='haleem_ratings mt-2'>4.0</span>&nbsp;&nbsp;<Star></Star>   <Star></Star>   <Star></Star>   <Star></Star>   <Star></Star>
                    <p className='mt-3'> <GeoAlt></GeoAlt> 4-1-395, Bank St, Troop Bazaar, Koti, Hyderabad, Telangana 500001</p>
                    {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
                    <br />
                    <button className='shownumber-1' style={{ backgroundColor: '#6ad4cf', color: 'white', cursor: 'pointer' ,border:'none',padding:'5px',borderRadius:'5px' }}>
                        <b> <Telephone></Telephone> Show Number</b>
                    </button>&nbsp;
                    <button className='bookappointment-1' style={{ backgroundColor: '#d4be6a', color: 'white', cursor: 'pointer',border:'none' ,padding:'5px',borderRadius:'5px' }}>
                        <b><Table></Table> Book Table</b>
                    </button>&nbsp;
                    <button className='check-1' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer',border:'none',padding:'5px',borderRadius:'5px' }}><Chat></Chat> Chat</button>
                </div>
            </div>
            <br></br>
            <div className="containerr">
                <div >
                    <img className="image-1" src={biryani3} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h1>Hotel Shadab <Heart style={{marginLeft:'530px'}}></Heart></h1> 
                    <span className='haleem_ratings mt-2'>4.0</span>&nbsp;&nbsp;<Star></Star>   <Star></Star>   <Star></Star>   <Star></Star>   <Star></Star>
                    <p className='mt-3'> <GeoAlt></GeoAlt> Madina Circle, 21-1-140-144, Near High Court, High Court Rd, Charminar, Ghansi Bazaar, Hyderabad, Telangana 500012</p>
                    {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
                    <br />
                    <button className='shownumber-1' style={{ backgroundColor: '#6ad4cf', color: 'white', cursor: 'pointer' ,border:'none',padding:'5px',borderRadius:'5px' }}>
                        <b> <Telephone></Telephone> Show Number</b>
                    </button>&nbsp;
                    <button className='bookappointment-1' style={{ backgroundColor: '#d4be6a', color: 'white', cursor: 'pointer',border:'none' ,padding:'5px',borderRadius:'5px' }}>
                        <b><Table></Table> Book Table</b>
                    </button>&nbsp;
                    <button className='check-1' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer',border:'none',padding:'5px',borderRadius:'5px' }}><Chat></Chat> Chat</button>
                </div>
            </div>
        </div>
    )
}
