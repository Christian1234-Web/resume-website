import React, { useContext, useState } from 'react'
import { Store } from '../context/store';
const Banner = () => {
    let store = useContext(Store);
    let [show_navl, setShow_navl] = useState('');
    let [show_navb, setShow_navb] = useState('hidden');
    let [show, setShow] = store.show;
    let [sstatic, setSstatic] = store.static;

    
    const showNav = () => {
        setShow_navl("hidden");
        setShow_navb("visible");
        setShow("block");
    }
    const hideNav = () => {
        setShow_navb("hidden");
        setShow_navl("visible");
        setShow("none");
    }

    return (
        <>
            <div className="banner text-white d-flex flex-column pt-5  text-center justify-content-center align-items-center" id="homepage">
                <i className="bi bi-list mobile-nav-toggle d-xl-none" id='mlist' onClick={()=>showNav()} style={{visibility:show_navl}}></i>
                <i class="bi mobile-nav-toggle d-xl-none bi-x" id='mbi'  onClick={()=>hideNav()}   style={{visibility:show_navb}}></i>
                    <h1 className="text-uppercase display-2 fw-bold ">Christian Ugwu</h1>            
                    <p id="first_p" className="display-6 fw-bolder text-danger">I'm a Full Stack Web Developer</p>
                    <p id="second_p" className="display-6 fw-bolder text-primary">I'm a Software Engineer</p>
                    <button className="btn btn-outline-light px-5">About Me</button>
                </div>
        </>
    )
}

export default Banner;
