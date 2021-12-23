import React from 'react'

const Skill =() => {
    return (
        <>
            <section id="skillpage" className="skills  pt-5 lh-lg m-1 p-4"
                // style="height: 550px;background-color: azure;"
            >
                    <div className="container">
                        <div className="section-title">
                            <u>
                        <h2 className="text-$purple">Skills</h2></u>
                            <p className="text-$purple pt-3">Below are the strength of my skill and coding languages rated by percent</p>
                        </div>

                        <div className="row skills-content lh-lg  pt-4">

                            <div className="col-lg-6 lh-lg" data-aos="fade-up">

                                <div className="">
                                    <b> <span className="skill text-danger">HTML <i className="val">90%</i></span></b>
                                    <div className="progress-bar-wrap">
                                        <input type="range" name="html" id="html" disabled="false" className="primary w-100"/>

                                    </div>
                                </div>

                                <div className="">
                                    <b><span className="skill text-danger">JavaScript <i className="val">90%</i></span></b>
                                    <div className="progress-bar-wrap">
                                        <input type="range" name="css" id="css" disabled="false" className="primary w-100"/>

                                    </div>
                                </div>

                                <div className="">
                                    <b> <span className="skill text-danger">MONGODB <i className="val">90%</i></span></b>
                                    <div className="progress-bar-wrap">
                                        <input type="range" name="JavaScript" id="JavaScript" disabled="false" className="primary w-100"/>

                                    </div>
                            </div>
                            <div className="">
                                    <b> <span className="skill text-danger">REACT <i className="val">85%</i></span></b>
                                    <div className="progress-bar-wrap">
                                        <input type="range" name="JavaScript" id="JavaScript" disabled="false" className="primary w-100"/>

                                    </div>
                            </div>
                            
                        </div>
                       

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="">
                                    <span className="skill text-danger fw-bolder">CSS <i className="val">82%</i></span>
                                    <div className="progress-bar-wrap">
                                        <input type="range" name="node" id="node" disabled="false" className="primary bg-secondary w-100"/>

                                    </div>
                                </div>
                                <div className="">
                                    <span className="skill text-danger fw-bolder">JQUERY <i className="val">80%</i></span>
                                    <div className="progress-bar-wrap">
                                        <input type="range" name="corel" id="corel" disabled="false" className="primary w-100"/>
                                    </div>
                            </div>
                            <div className="">
                                    <b> <span className="skill text-danger">MYSQL <i className="val">80%</i></span></b>
                                    <div className="progress-bar-wrap">
                                        <input type="range" name="JavaScript" id="JavaScript" disabled="false" className="primary w-100"/>

                                    </div>
                            </div>
                            <div className="">
                                    <b> <span className="skill text-danger">NODE <i className="val">83%</i></span></b>
                                    <div className="progress-bar-wrap">
                                        <input type="range" name="JavaScript" id="JavaScript" disabled="false" className="primary w-100"/>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>   
        </>
    )
}

export default Skill;