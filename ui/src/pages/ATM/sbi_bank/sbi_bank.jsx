import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";

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

function SBIResponsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings} style={{ marginLeft: '40px' , marginTop:'20px'}}>
                        <div>
                            <Link to="" style={{ textDecoration: 'none' }}>
                                <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                    <div className="card mx-3 card-1" style={{ height: '200px', width: '200px' }}>
                                        <img className="card-img-top" src={biryani} alt="tutor" />
                                        <div className="card-body">
                                            <h5 className="card-titles" style={{ textAlign: "center" }}>SBI</h5>
                                            <h6 className="card-titles" style={{ textAlign: "center" }}>Hyderabad</h6>
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
  );
}

export default SBIResponsive;
