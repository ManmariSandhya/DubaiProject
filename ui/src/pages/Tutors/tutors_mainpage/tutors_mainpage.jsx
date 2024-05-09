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
        <div >
            <div className='tutuor_container'></div>
            <img src={tutor1} className='tutuor_img' ></img>

            <div className='tutuor_container1'>
                
                <div className=' mt-2'>
                    <span>
                        <img src={tutor2}></img>
                    </span>  &nbsp; &nbsp; &nbsp;
                   <Link to="/school" style={{textDecoration:'none',color:'black'}}><span>School</span></Link> 
                </div>
                <div className=' mt-2'>
                    <span>
                        <img src={tutor3}></img>
                    </span>  &nbsp; &nbsp; &nbsp;
                    <span> College</span>
                </div>
                <div className=' mt-2'>
                    <span>
                        <img src={tutor6}></img>
                    </span>  &nbsp; &nbsp; &nbsp;
                    <span>Hobbies</span>
                </div>
                <div className=' mt-2'>
                    <span>
                        <img src={tutor4}></img>
                    </span>  &nbsp; &nbsp; &nbsp;
                    <span>Caoching</span>
                </div>
                <div className=' mt-2'>
                    <span>
                        <img src={tutor5}></img>
                    </span>  &nbsp; &nbsp; &nbsp;
                    <span>Vocational Training</span>
                </div>
            </div>
        </div>
    )
}



