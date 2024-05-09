import './atm_mainpage.css';
import sbi from "../../../assets/images/sbi.webp";
import hdfc from "../../../assets/images/hdfc.avif";
import icici from "../../../assets/images/icici.jpg";
import cbi from "../../../assets/images/cbi.jpg";
import andrabank from "../../../assets/images/andrabank.jpg";
import axis from "../../../assets/images/axis.png";
import { Link } from 'react-router-dom';
export function AtmMainPage() {
    return (
        <div>
            <div className='atm_background_image'>
                <h1 className='atm'>ATM</h1>
                <h2 className='near_me'>Near Me</h2>
            </div>
            <div className='hospital_container_part1'>
                <div className='row atm_container_subpart1'>
                    <div className='col-4'>
                        <div className='box-1 bg-white rounded '>

                            <img className='hospital_icon_image' src={sbi}></img>
                            <Link to="/sbi_atm">
                                <p className='services-heading' style={{color:'GrayText'}}>State Bank Of India</p>
                            </Link>

                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='box-1 bg-white rounded '>

                            <img className='hospital_icon_image' src={hdfc}></img>
                            <Link to="/hospitals-services">
                                <p className='services-heading' style={{color:'GrayText'}}>HDFC Bank</p>
                            </Link>

                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='box-1 bg-white rounded '>

                            <img className='hospital_icon_image' src={icici}></img>
                            <Link to="/hospitals-services">
                                <p className='services-heading' style={{color:'GrayText'}}>ICICI Bank</p>
                            </Link>

                        </div>

                    </div>

                </div>
                <div className='row atm_container_subpart2'>
                    <div className='col-4'>
                        <div className='box-1 bg-white rounded '>

                            <img className='hospital_icon_image' src={cbi}></img>
                            <Link to="/hospitals-services">
                                <p className='services-heading' style={{color:'GrayText'}}>Central Bank of India</p>
                            </Link>

                        </div>
                    </div>
                    <div className='col-4' >
                        <div className='box-1 bg-white rounded' >

                            <img className='hospital_icon_image' src={andrabank}></img>
                            <Link to="/hospitals-services">
                                <p className='services-heading' style={{color:'GrayText'}}> Andra Bank </p>
                            </Link>

                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='box-1 bg-white rounded '>

                            <img className='hospital_icon_image' src={axis}></img>
                            <Link to="/hospitals-services">
                                <p className='services-heading'style={{color:'GrayText'}}>Axis Bank</p>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}