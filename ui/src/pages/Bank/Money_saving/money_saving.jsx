

import { GeoAlt, StarFill } from 'react-bootstrap-icons';
import money_bank1 from '../../../assets/images/money_bank1.webp';
import money_bank2 from '../../../assets/images/money_bank2.avif';
import money_bank3 from '../../../assets/images/money_bank3.avif';
import money_bank4 from '../../../assets/images/money_bank4.jpg';



import React from 'react';

export function MoneySavingComponent() {
    return (
        <div>
           

            <div className="containerr mt-3">
                <div  >
                    <img className="image-1" src={money_bank3} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h1 className='roy-head1'>State Bank Of India</h1>
                    <span className='haleem_ratings mt-2'>4.4</span> <StarFill></StarFill><StarFill></StarFill><StarFill></StarFill><StarFill></StarFill><StarFill></StarFill>
                    <p className='mt-3'> <GeoAlt></GeoAlt>  Mahatma Gandhi Road , Fountain Mumbai</p>
                    {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
                    <br />
                   <span style={{fontSize:'20px',background:'gray',padding:'5px',borderRadius:'3px',color:'white'}}>Home Loans</span> &nbsp;&nbsp;&nbsp;&nbsp;
                   <span style={{fontSize:'20px',background:'gray',padding:'5px',borderRadius:'3px',color:'white'}}>Personal Loan</span>
                   <br /> <br />
                    <button className='shownumber-1' style={{ backgroundColor: 'rgb(5, 139, 5)', color: 'aliceblue', cursor: 'pointer' ,borderRadius:'3px',borderColor:'rgb(5, 139, 5)' }}>
                        <b>Show Number</b>
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='check-1' style={{ backgroundColor: 'white', color: 'black', cursor: 'pointer',borderRadius:'3px',borderColor:'white' }}>Chat</button>
                </div>
            </div>
            <br></br>
            <div className="containerr">
                <div >
                    <img className="image-1" src={money_bank2} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h1>ICICI Bank </h1>
                    <span className='haleem_ratings mt-2'>4.3</span> <StarFill></StarFill><StarFill></StarFill><StarFill></StarFill><StarFill></StarFill><StarFill></StarFill>
                    <p className='mt-3'> <GeoAlt></GeoAlt>  	Mumbai, Maharashtra</p>
                    {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
                    <br />
                   <span style={{fontSize:'20px',background:'gray',padding:'5px',borderRadius:'3px',color:'white'}}>Home Loans</span> &nbsp;&nbsp;&nbsp;&nbsp;
                   <span style={{fontSize:'20px',background:'gray',padding:'5px',borderRadius:'3px',color:'white'}}>Personal Loan</span>
                   <br /> <br />
                    <button className='shownumber-1' style={{ backgroundColor: 'rgb(5, 139, 5)', color: 'aliceblue', cursor: 'pointer' ,borderRadius:'3px' ,borderColor:'rgb(5, 139, 5)' }}>
                        <b>Show Number</b>
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='check-1' style={{ backgroundColor: 'white', color: 'black', cursor: 'pointer',borderRadius:'3px',borderColor:'white' }}>Chat</button>
                </div>
            </div>
            <br></br>
            <div className="containerr">
                <div >
                    <img className="image-1" src={money_bank3} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h1>HDFC Bank </h1>
                    <span className='haleem_ratings mt-2'>4.1</span> <StarFill></StarFill><StarFill></StarFill><StarFill></StarFill><StarFill></StarFill><StarFill></StarFill>
                    <p className='mt-3'> <GeoAlt></GeoAlt>Mumbai, Maharashtra</p>
                    {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
                    <br />
                   <span style={{fontSize:'20px',background:'gray',padding:'5px',borderRadius:'3px',color:'white'}}>Home Loans</span> &nbsp;&nbsp;&nbsp;&nbsp;
                   <span style={{fontSize:'20px',background:'gray',padding:'5px',borderRadius:'3px',color:'white'}}>Personal Loan</span>
                   <br /> <br />
                    <button className='shownumber-1' style={{ backgroundColor: 'rgb(5, 139, 5)', color: 'aliceblue', cursor: 'pointer' ,borderRadius:'3px',borderColor:'rgb(5, 139, 5)'  }}>
                        <b>Show Number</b>
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='check-1' style={{ backgroundColor: 'white', color: 'black', cursor: 'pointer',borderRadius:'3px' ,borderColor:'white'}}>Chat</button>
                </div>
            </div>
            <br></br>
            <div className="containerr">
                <div >
                    <img className="image-1" src={money_bank2} width="300px" height="200px" alt="Dubai" />
                </div>
                <div className="text">
                    <h1>Axis Bank </h1>
                    <span className='haleem_ratings mt-2'>4.0</span> <StarFill></StarFill><StarFill></StarFill><StarFill></StarFill><StarFill></StarFill><StarFill></StarFill>
                    <p className='mt-3'> <GeoAlt></GeoAlt> Mumbai, Maharashtra</p>
                    {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
                    <br />
                   <span style={{fontSize:'20px',background:'gray',padding:'5px',borderRadius:'3px',color:'white'}}>Home Loans</span> &nbsp;&nbsp;&nbsp;&nbsp;
                   <span style={{fontSize:'20px',background:'gray',padding:'5px',borderRadius:'3px',color:'white'}}>Personal Loan</span>
                   <br /> <br />
                    <button className='shownumber-1' style={{ backgroundColor: 'rgb(5, 139, 5)', color: 'aliceblue', cursor: 'pointer' ,borderRadius:'3px',borderColor:'rgb(5, 139, 5)'  }}>
                        <b>Show Number</b>
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='check-1' style={{ backgroundColor: 'white', color: 'black', cursor: 'pointer',borderRadius:'3px',borderColor:'white' }}>Chat</button>
                </div>
            </div>
        </div>
    )
}
