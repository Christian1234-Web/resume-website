import React from 'react'

const Resume = () => {
    return (
        <>
            <section id="resumepage" className="resume p-4 lh-lg">
                <div className="container">
                    <div className="section-title">
                        <h2>My Biography</h2>
                        {/* <p></p> */}
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h3 className="resume-title">Summary</h3>
                            <div className="resume-item pb-0">
                                <h4>Christian Ugwu</h4>
                                <p><em>Coding and Computer Science user-centered digital/print marketing material from initial concept
                                    to final, polished deliverable with 3+ years of experience Computer Engineering  .</em></p>
                                <ul>
                                    <li>Nigeria Abuja Cashew Street 1,Karshi</li>
                                    <li>(+243) 8068-055438</li>
                                    <li>devchris100@gmail.com</li>
                                </ul>
                            </div>
                            <hr />
                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Computer Science &amp; Computer Basics</h4>
                                <h5>2015 - 2016</h5>
                                <p><em>Pilot Science</em></p>
                                <p>Awarded a computer as the best student in school and graduated as the student with the highest grade </p>
                            </div>
                            <hr />
                            <div className="resume-item">
                                <h4>Government Secondary School Karshi Abuja / High School</h4>
                                <h5>2010 - 2014</h5>
                                <p><em>Kings and Queens Institute of Technology, Abuja, Nigeria</em></p>
                                <p> Graduated as upper class due to my grade and also participated at  the
                                    africa  computer knowledge competition</p>
                            </div>
                            <hr />
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Web Developer</h4>
                                <h5>2020 - 2021</h5>
                                <p><em>Area 1 Nigeria Abuja</em></p>
                                <ul>
                                    <li>Verifying the work done by external third party contractors.</li>
                                    <li>Making sure visual styles are kept within brand guidelines.</li>
                                    <li>Performed duties in accordance with applicable standards,
                                        policies and regulatory guidelines to promote safe working
                                        environment</li>
                                    <li>Developed and maintained courteous and effective working
                                        relationships</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="resume-item">
                                <h4>Software Programmer</h4>
                                <h5>2021 - present</h5>
                                <p><em>Rework Coding International, Nigeria, Abuja</em></p>
                                <ul>
                                    <li>Developed numerous Website programs (abuja).</li>
                                    <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                                    <li>Recommended and consulted with clients on the most appropriate Web Design</li>
                                    <li>Created 4+ Website presentations </li>
                                </ul>
                            </div>
                            <hr />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Resume;
