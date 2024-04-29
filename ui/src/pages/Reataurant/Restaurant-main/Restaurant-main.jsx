import './Restaurant-main.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

import restaurent_main_carousel_image1 from '../../../assets/images/restaurent_main_carousel_image1.jpg';
import restaurent_main_carousel_image2 from '../../../assets/images/restaurent_main_carousel_image2.jpg';
import restaurent_main_carousel_image3 from '../../../assets/images/restaurent_main_carousel_image3.jpg';

import biryani from '../../../assets/images/biryani.jpg';
import phirni from '../../../assets/images/phirni.jpg';
import haleem from '../../../assets/images/haleem.jpg';
import chai from '../../../assets/images/chai.jpg';
import kabab from '../../../assets/images/kabab.jpg';
import biscuit from '../../../assets/images/biscuit.webp';
import khubani_meetha from '../../../assets/images/khubani_meetha.jpg';
import nihari from '../../../assets/images/nihari.webp';
import Double_ka_Meetha from '../../../assets/images/Double_ka_Meetha.webp';
import samosa from '../../../assets/images/samosa.jpg';


export function RestaurantMainComponent() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
    };
    return (
        <div>
            <div className='restaurent_container'>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>

                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={restaurent_main_carousel_image1} className="d-block  restaurent_images  " alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={restaurent_main_carousel_image2} className="d-block restaurent_images" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={restaurent_main_carousel_image3} className="d-block restaurent_images" alt="..." />
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
            <div >
                <h2 className='hyd_title'>Restaurents In Hyderabad</h2>
                <div className='hyderabad_restaurent'>
                    <h4 style={{ marginLeft: '50px' }}>Browse Hyderabad Famous Food</h4>
                    <br></br>
                    <Slider {...settings} style={{ marginLeft: '40px' }}>
                        <div>
                            <Link to="/biryani_restaurents" style={{ textDecoration: 'none' }}>
                                <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                    <div className="card mx-3 card-1" style={{ height: '200px', width: '200px' }}> 
                                        <img className="card-img-top" src={biryani} alt="tutor" />
                                        <div className="card-body">
                                            <h5 className="card-titles" style={{ textAlign: "center" }}>Hyderabad Biryani</h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                <div className="card mx-3 card-1" style={{ height: '200px', width: '200px' }}> 
                                    <img className="card-img-top" src={phirni} alt="tutor" />
                                    <div className="card-body">
                                        <h5 className="card-titles" style={{ textAlign: "center" }}>Phirni</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to="/haleem_restaurents" style={{ textDecoration: 'none' }}>
                                <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                    <div className="card mx-3 card-1" style={{ height: '200px', width: '200px' }}> 
                                        <img className="card-img-top" src={haleem} alt="tutor" />
                                        <div className="card-body">
                                            <h5 className="card-titles" style={{ textAlign: "center" }}>Haleem</h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                <div className="card mx-3 card-1" style={{ height: '200px', width: '200px' }}> 
                                    <img className="card-img-top" src={kabab} alt="tutor" style={{ height: '500px' }} />
                                    <div className="card-body">
                                        <h5 className="card-titles" style={{ textAlign: "center" }}>Boti Kebab</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                <div className="card mx-3 card-1" style={{ height: '200px', width: '200px' }}> 
                                    <img className="card-img-top" src={chai} alt="tutor" />
                                    <div className="card-body">
                                        <h5 className="card-titles" style={{ textAlign: "center" }}>Iranian Chai</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                <div className="card mx-3 card-1" style={{ height: '200px', width: '200px' }}>
                                    <img className="card-img-top" src={biscuit} alt="tutor" />
                                    <div className="card-body">
                                        <h5 className="card-titles" style={{ textAlign: "center" }}>Osmania Biscuit</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                <div className="card mx-3 card-1" style={{ height: '200px', width: '200px' }}>
                                    <img className="card-img-top" src={khubani_meetha} alt="tutor" style={{ height: '138px' }} />
                                    <div className="card-body">
                                        <h5 className="card-titles" style={{ textAlign: "center" }}>Qubani ka Meetha</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                <div className="card mx-3 card-1" style={{ height: '200px', width: '200px' }}>
                                    <img className="card-img-top" src={nihari} alt="tutor" />
                                    <div className="card-body">
                                        <h5 className="card-titles" style={{ textAlign: "center" }}>Nihari</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                <div className="card mx-3 card-1" style={{ height: '200px', width: '200px' }}>
                                    <img className="card-img-top" src={Double_ka_Meetha} alt="tutor" />
                                    <div className="card-body">
                                        <h5 className="card-titles" style={{ textAlign: "center" }}>Double ka Meetha</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                <div className="card mx-3 card-1" style={{ height: '200px', width: '200px' }}> 
                                    <img className="card-img-top" src={samosa} alt="tutor" />
                                    <div className="card-body">
                                        <h5 className="card-titles" style={{ textAlign: "center" }}>Keema Samosa</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Slider>

                </div>
            </div>
        </div>
    )
}