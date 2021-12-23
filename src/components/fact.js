import React from 'react'

const Fact = () => {
    return (
        <>
            <section id="facts" className="facts my-5 m-3">
                <div className="container my-5">

                    <div className="section-title my-5 lh-lg">
                        <h2>Facts</h2>
                        <p>
                            Full Stack Developer with 2+ years of hands-on experience designing, developing, and implementing applications and solutions using a range of technologies and programming languages.
                            Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full-stack Developer.                             </p>
                    </div>

                    <div className="row no-gutters lh-lg my-5">

                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                            <div className="count-box">
                                <p className="bi bi-emoji-smile fs-1 fw-bolder"><img src="/image/img55.png" className="img-fluid w-25" alt="" />005</p>

                                <p className="text-wrap fs-5"><strong>Happy Clients</strong> </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="count-box">
                                <p className="bi bi-journal-richtext fs-1 fw-bolder"><img src="/image/img55.png" className="img-fluid w-25" alt="" />010</p>
                                <p className="text-wrap fs-5"><strong>Projects</strong> </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div className="count-box">
                                <p className="bi bi-headset fs-1 fw-bolder"><img src="/image/img55.png" className="img-fluid w-25" alt="" />1250</p>
                                <p className="text-wrap fs-5"><strong>Hours Of Support</strong></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
                            <div className="count-box">
                                <p className="bi bi-people fs-1 fw-bolder"><img src="/image/img55.png" className="img-fluid w-25" alt="" />004</p>
                                <p className="text-wrap fs-5"><strong>Hard Workers</strong> </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Fact;
