import './tutors_mainpage.css';

import tutor1 from '../../../assets/images/tutor1.jpg';
import tutor2 from '../../../assets/images/tutor2.webp';
import tutor3 from '../../../assets/images/tutor3.webp';
import tutor4 from '../../../assets/images/tutor4.webp';
import tutor5 from '../../../assets/images/tutor5.webp';
import tutor6 from '../../../assets/images/tutor6.webp';
import { Link } from 'react-router-dom';
export function TutorsMainPage() {
    return (
        <div>
            <div className='tutuor_container'>
                <img src={tutor1} style={{ textAlign: 'center', marginTop: '30px', }}></img>
            </div>
            <div className='tutuor_container1'>
                <div style={{ backgroundColor: 'gainsboro', width: '1000px' }} className='row'>
                    <div className='col-1'>
                        <img src={tutor2} ></img>
                    </div>

                    <div className='col-10 mt-3 ' >
                        <Link to="/school" style={{ textDecoration: 'none', color: 'black' }}>
                            Schools
                        </Link>
                    </div>

                </div>
                <div className='row mt-3'>
                    <div className='col-1'>
                        <img src={tutor3}></img>
                    </div>
                    <div className='col-10 mt-3'>
                        Colleges
                    </div>
                </div>
                <div style={{ backgroundColor: 'gainsboro', width: '1000px' }} className='row mt-2'>
                    <div className='col-1'>
                        <img src={tutor6}></img>
                    </div>
                    <div className='col-10 mt-3'>
                        Hobbies
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-1'>
                        <img src={tutor4}></img>
                    </div>
                    <div className='col-10 mt-3'>
                        Coaching
                    </div>
                </div>
                <div style={{ backgroundColor: 'gainsboro', width: '1000px' }} className='row mt-2'>
                    <div className='col-1'>
                        <img src={tutor5} ></img>
                    </div>
                    <div className='col-10 mt-3'>
                        Vocational Training
                    </div>
                </div>

            </div>
        </div>
    )
}