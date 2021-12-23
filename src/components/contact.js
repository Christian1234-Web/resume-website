import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    init("user_PwCC7wyEbuXhKVo31yXrr");

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_m8vr2c5', 'template_t3gz1dj', form.current)
            .then((result) => {
                console.log(result.text);
                alert("mail successfully sent!!!");
                window.location.reload();
            }, (error) => {
                console.log(error.text);
                alert("failed to send mail please try again later!!!");
                window.location.reload();
            });
    };

    return (
        <>
            <section id="contactpage" className="contact mx-lg-5">
                <div className="container ">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Below are the possible way to contact me at yur own convenient time</p>
                    </div>
                    <div className="row" data-aos="fade-in">
                        <div className="col-lg-5 d-flex align-items-stretch shadow p-3 mb-5 bg-body rounded">
                            <div className="info">
                                <div className="address d-flex">
                                    <i className="bi bi-geo-alt  h-25"
                                        style={{ fontSize: "2rem", color: "blue", borderRadius: "50%", background: "lightblue", padding: "5px" }}></i>
                                    <div className='px-3'>
                                        <h4>Location:</h4>
                                        <p>Karshi Abuja Nigeria</p>
                                    </div>
                                </div>
                                <div className="email d-flex">
                                    <i className="bi bi-envelope h-25"
                                        style={{ fontSize: "2rem", color: "blue", borderRadius: "50%", background: "lightblue", padding: "5px" }}></i>
                                    <div className='px-3'>
                                        <h4>Email:</h4>
                                        <p>devchris100@gmail.com</p>
                                    </div>
                                </div>
                                <div className="phone d-flex">
                                    <i className="bi bi-phone h-25"
                                        style={{ fontSize: "2rem", color: "blue", borderRadius: "50%", background: "lightblue", padding: "5px" }}></i>
                                    <div className='px-3'>
                                        <h4>Call:</h4>
                                        <p>+234 8068 055 438</p>
                                    </div>
                                </div>
                                <img src="https://www.google.com/maps/vt/data=mITH76_h-fIsgsMP95mhUsxQCRyRd5viYB8pbakEomyF2qCZif42eQKX8bFojWoM
                                H0hzpu8nwCI6TM84_8t1ywANv1m2gMR3chBnx_VD2EFqDDeLEffnJbKXhnlqY5lyEkCV8a_5zu8Rcq56lODvpVjFtTFAxl9CR1M7e-i438yC-4fI
                                OkLNAQCRuBbJDWQPXihTjlAZpYCv16yz_nD9uTaLZLdprQVIPfFlTO7Re0FJubk_9vM3Soue"className='img-fluid' alt='map' />
                            </div>

                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch shadow p-3 mb-5 bg-body rounded">
                            <form action="required" ref={form} onSubmit={sendEmail} role="form" className="">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label for="name">Your Name</label>
                                        <input type="text" name="name" className="form-control" id="name" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="name">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="name">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" required />
                                </div>
                                <div className="form-group">
                                    <label for="name">Message</label>
                                    <textarea className="form-control" name="message" rows="10" required />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary p-3 m-3">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
