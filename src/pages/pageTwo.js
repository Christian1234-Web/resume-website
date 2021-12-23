import React, { useState, useContext } from "react";
import InnerPage from '../components/inner-page';
import Profile from "../components/profile";
import { Store } from "../context/store";

const PageTwo = () => {
    let store = useContext(Store);
    let [show, setShow] = store.show;
    let [sstatic, setSstatic] = store.static;
    let [projects, setProjects] = store.projects;

    return (
        <>
            <div className="hanga d-flex" >
                <div id="prof"
                    className="d-xl-block" style={{ display: show, transition: "all 0.3s", overflow: "hidden" }} >
                    <Profile />
                </div>
                <div id="spaceBoard" className=""></div>
                <div className="sec-2">
                            <InnerPage />
                </div>
            </div>
        </>
    )
}

export default PageTwo;
