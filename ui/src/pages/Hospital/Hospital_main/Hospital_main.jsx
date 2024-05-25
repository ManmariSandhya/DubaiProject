import './Hospital_main.css';
import hospital1 from '../../../assets/images/hospital1.avif';
import hospital2 from '../../../assets/images/hospital2.jpg';
import hospital3 from '../../../assets/images/hospital3.jpg';

import hospital_icon1 from '../../../assets/images/hospital_icon1.jpg';
import hospital_icon2 from '../../../assets/images/hospital_icon2.jpg';
import hospital_icon3 from '../../../assets/images/hospital_icon3.png';
import hospital_icon4 from '../../../assets/images/hospital_icon4.jpg';
import hospital_icon5 from '../../../assets/images/hospital_icon5.png';
import hospital_icon6 from '../../../assets/images/hospital_icon6.jpg';
import { Link } from 'react-router-dom';

export function HospitalMainComponent() {
    return (
        <div>
            <div className='hospital_container'>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>

                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={hospital1} className="d-block  restaurent_images  " alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={hospital2} className="d-block restaurent_images" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={hospital3} className="d-block restaurent_images" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='hospital_container_part1'>
                <div className='row hospital_container_subpart1'>
                    <div className=' col-4 '>
                        <div className='box-1 bg-white rounded '>

                            <img className='hospital_icon_image' src={hospital_icon3}></img>
                            <Link to="/hospital_list">
                                <p className='services-heading' style={{color:'GrayText'}}>Childrens Hospital</p>
                            </Link>

                        </div>
                    </div>
                    <div className='col-4 '>
                        <div className='box-1 bg-white rounded '>

                            <img className='hospital_icon_image' src={hospital_icon4} style={{width:'80px'}}></img>
                            <Link to="/hospitals-services">
                                <p className='services-heading' style={{color:'GrayText'}}>ENT Hospitals</p>
                            </Link>

                        </div>
                    </div>
                    <div className='col-4 '>
                        <div className='box-1 bg-white rounded '>

                            <img className='hospital_icon_image' src={hospital_icon5} style={{width:'50px'}}></img>
                            <Link to="/hospitals-services">
                                <p className='services-heading' style={{color:'GrayText'}}>Eyes Hospitals</p>
                            </Link>

                        </div>

                    </div>
                    
                </div>
                <div className='row hospital_container_subpart2'>
                    <div className=' col-4'>
                    <div className='box-1 bg-white rounded '>
                              
                                    <img className='hospital_icon_image' src={hospital_icon6}></img>
                                    <Link to="/hospitals-services">
                                        <p className='services-heading' style={{color:'GrayText'}}>Mental Hospitals</p>
                                    </Link>
                               
                            </div>
                    </div>
                    <div className='col-4 ' >
                    <div className='box-1 bg-white rounded ' style={{marginLeft:'26px'}}>
                                
                                    <img className='hospital_icon_image' src={hospital_icon1}></img>
                                    <Link to="/hospitals-services">
                                        <p className='services-heading' style={{color:'GrayText'}}> Multi Hospitals</p>
                                    </Link>
                              
                            </div>
                    </div>
                    <div className='col-4 '>
                    <div className='box-1 bg-white rounded '>
                                
                                    <img className='hospital_icon_image' src={hospital_icon1}></img>
                                    <Link to="/hospitals-services">
                                        <p className='services-heading' style={{color:'GrayText'}}>Private Hospital</p>
                                    </Link>
                             
                            </div>
                    </div>
                    
                </div>
            </div>
            
        </div>

    )
}