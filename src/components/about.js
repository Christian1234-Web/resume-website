import React from 'react'
import ProfilePic from "../asset/profile-pics.jpg";

const About = () => {
    return (
        <>
            <div className="sec-3-contains m-4 about" id="aboutPage">
                <div className="about">
                    <h1 className="$purple my-4">About</h1>
                    <p className="text-wrap my-4">
                        A technically savvy web developer, who has multiple years of website development expertise behind him. Christian can be a
                        strong driving force for improving the performance, scalability and reliability of development projects. He has a long track
                        record of creating dynamic, rich and interesting web portals, and of providing long term solutions to front -end and Backend problems. He has experience of working in leading global internet technology companies and of completing challenging
                        client projects.
                    </p>
                </div>
                <div className="row my-5">
                    <div className="col-lg-3 m-1 " data-aos="fade-right">
                        <img src={ProfilePic} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3 className="$purple">Full Stack Developer &amp; Computer Engineer.</h3>
                        <p className="fst-italic text-center fw-bold fs-3">
                            Below are details about my self.
                        </p>
                        <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Photographe</span>
                        <div className="row lh-lg">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>15th March 2003</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>https://github.com/Christian1234-Web/</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+234 8068055438</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Abuja, Nigeria</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>18</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>SSCE</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>devchris100@gmail.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-wrap my-4">
                            Those are information about myself
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
