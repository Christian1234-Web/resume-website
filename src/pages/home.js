import React, { useState, useEffect ,useContext} from "react";
// import {  } from "react";
import About from "../components/about";
import Banner from "../components/banner";
import Contact from "../components/contact";
import Fact from "../components/fact";
import Portfolio from "../components/portfolio";
import Profile from "../components/profile";
import Resume from "../components/resume";
import Skill from "../components/skill";
import { Store } from "../context/store";


const Home = () => {
    let store = useContext(Store);
    let [show, setShow] = store.show;
    let [sstatic, setSstatic] = store.static;


    return <>
        <div className="hanga d-flex" >
            <div id="prof" className="d-xl-block" style={{display:show,transition:"all 0.3s",overflow:"hidden"}}>
                <Profile />
            </div>
            <div id="spaceBoard" className=""></div>
            <div className="sec-2" style={{position:sstatic}}>
                <Banner />
                <About />
                <Fact />
                <Skill />
                <Resume />
                <Portfolio/>
                <Contact />
            </div>
        </div>
    </>
}
export default Home;