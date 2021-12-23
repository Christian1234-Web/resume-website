import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../asset/profile-pics.jpg";
import WatPic from "../asset/wats.png";
import TelePic from "../asset/telege.png";
import TwiPic from "../asset/twi.png";
import LinkImg from "../asset/img1111.jpg";


const Profile = (props) => {
        return <>
                <header id="header" className="d-xl-block">
                        <div className="dashbord text-white ">
                                <div className="img-group d-flex flex-column  align-items-center justify-content-center">
                                        <img src={ProfilePic} className="rounded-circle  border border-5 w-50" alt="" />
                                        <span id="spanh2">
                                                <h2 className="text-white mt-4 fw-bold">CHRISTIAN UGWU</h2>
                                        </span>
                                        <span id="imgspan">

                                                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                                <a href="https://www.facebook.com/christian.ugwu.5268" className="facebook"><i className="bx bxl-facebook"></i></a>
                                                <a href="https://github.com/Christian1234-Web/" className="instagram"><i className="bi bi-github"></i></a>
                                                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                                <a href="https://www.linkedin.com/in/christian-ugwu-798644211/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                        </span>
                                </div>
                                <div className="link-group px-4 display-6 fs-6 mt-4 mymenu dnavigator">
                                        <a href="#homepage" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a>
                                        <a href="#aboutPage" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a>
                                        <a href="#skillpage" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Skill</span></a>
                                        <a href="#resumepage" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Resume</span></a>
                                        <a href="#portfoliopage" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Portfolio</span></a>
                                        <a href="#contactpage" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a>


                                        <br />
                                </div>

                        </div>
                        <div className="copyright">
                                <p className="display-6 fs-6 text-white fw-bold text-center pt-4"> &copyCopyright 2021</p>
                        </div>
                </header>
                
        </>

}

export default Profile;