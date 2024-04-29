
import { Facebook, Google, Twitter, Youtube } from 'react-bootstrap-icons';
import './footer.component.css';
export function Footer() {
    return (
        <div>
            <footer id="footer" className="footer mt-5">
                <div className="footer-top">
                    <div className="container">
                        <div className="row cols-xs-space cols-sm-space cols-md-space">
                            <div className="col-md-6 col-lg-4">
                                <div className="col text-center">
                                    <img
                                        src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
                                        alt="logo"
                                        className="header-logo-image"
                                    />
                                    &nbsp; <p className="mt-3 header-website-name">Find Dubai</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="col" style={{ textAlign: 'center' }}>
                                    <h4 className="heading heading-xs strong-600 text-uppercase mb-1">
                                        Main Menu                        </h4>
                                    <br></br>
                                    <ul className="footer-links">
                                        <li>
                                            <a href="/home" style={{ color: '#FFFFFFB3', textDecoration: 'none' }}>
                                                Home                                </a>
                                        </li>
                                        <li>
                                            <a href="/doctors" style={{ color: '#FFFFFFB3', textDecoration: 'none' }}>
                                                Categories                               </a>
                                        </li>
                                        <li>
                                            <a href="/appointments" style={{ color: '#FFFFFFB3', textDecoration: 'none' }}>
                                                Service Listing                             </a>
                                        </li>
                                        <li>
                                            <a href="/login" target="_blank" style={{ color: '#FFFFFFB3', textDecoration: 'none' }}>
                                                Whislist                              </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className="col" style={{ textAlign: 'center' }}>
                                    <h4 className="heading heading-xs strong-600 text-uppercase mb-1">
                                        Help And Support                        </h4>
                                    <br></br>
                                    <ul className="footer-links">
                                        <li>
                                            <a href="contactus" style={{ color: '#FFFFFFB3', textDecoration: 'none' }}>
                                                Contact Us                                </a>
                                        </li>
                                        <li>
                                            <a href="/aboutus" style={{ color: '#FFFFFFB3', textDecoration: 'none' }}>
                                                About Us                                </a>
                                        </li>
                                        <li>
                                            <a href="/blog" style={{ color: '#FFFFFFB3', textDecoration: 'none' }}>
                                                Login                               </a>
                                        </li>
                                    </ul>
                                    <br></br>
                                    <span>
                                        <Facebook></Facebook>
                                    </span>&nbsp;&nbsp;
                                    <span>
                                        <Twitter></Twitter>
                                    </span>&nbsp;&nbsp;
                                    <span>
                                        <Google></Google>
                                    </span>&nbsp;&nbsp;
                                    <span>
                                        <Youtube></Youtube>
                                    </span>&nbsp;&nbsp;
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
            </footer>
        </div>
    )
}