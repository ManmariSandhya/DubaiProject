
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

import Rainbow_hospital from '../../../assets/images/Rainbow_hospital.jpg';
import udbhava_hospital from '../../../assets/images/udbhava_hospitals.webp';
import ankura_hospital from '../../../assets/images/ankura_hospital.avif';
import vasavi_hospital from '../../../assets/images/vasavi_hospital.png';
import Medicover_hospital from '../../../assets/images/Medicover_hospital.webp';
import swathi_hospital from '../../../assets/images/swathi_hospital.jpg';
export function HospitalListComponent() {
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
        <div style={{marginTop:'50px',width:'98%'}}>
            <Slider {...settings} style={{ marginLeft: '100px' }}>
                <div>
                    <Link to="/rainbow_hospital" style={{ textDecoration: 'none' }}>
                        <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                            <div className="card mx-3 card-1" style={{ height: '200px', width: '200px' }}>
                                <img className="card-img-top" src={Rainbow_hospital} alt="tutor"  style={{height:'150px'}}/>
                                <div className="card-body">
                                    <h5 className="card-titles" style={{ textAlign: "center" }}>Rainbow Hospital </h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mx-3 card-1" style={{ height: '200px', width: '200px' }}>
                            <img className="card-img-top" src={udbhava_hospital} alt="tutor" style={{height:'150px'}}/>
                            <div className="card-body">
                                <h5 className="card-titles" style={{ textAlign: "center" }}>Udbhava Hospital</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/haleem_restaurents" style={{ textDecoration: 'none' }}>
                        <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                            <div className="card mx-3 card-1" style={{ height: '200px', width: '200px' }}>
                                <img className="card-img-top" src={ankura_hospital} alt="tutor"  style={{height:'150px'}}/>
                                <div className="card-body">
                                    <h5 className="card-titles" style={{ textAlign: "center" }}>Ankura Hospital</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mx-3 card-1" style={{ height: '200px', width: '200px' }}>
                            <img className="card-img-top" src={vasavi_hospital} alt="tutor" style={{ height: '150px' }} />
                            <div className="card-body">
                                <h5 className="card-titles" style={{ textAlign: "center" }}>Vasavi Hospital</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mx-3 card-1" style={{ height: '200px', width: '200px' }}>
                            <img className="card-img-top" src={Medicover_hospital} alt="tutor" style={{height:'140px'}} />
                            <div className="card-body">
                                <h5 className="card-titles" style={{ textAlign: "center" }}>Medicover Hospital</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mx-3 card-1" style={{ height: '200px', width: '200px' }}>
                            <img className="card-img-top" src={swathi_hospital} alt="tutor" style={{height:'150px'}} />
                            <div className="card-body">
                                <h5 className="card-titles" style={{ textAlign: "center" }}>Swathi Hospital</h5>
                            </div>
                        </div>
                    </div>
                </div>
                

            </Slider>

        </div>
    )
}