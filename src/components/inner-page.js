import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Store } from "../context/store";


const InnerPage = () => {
  let store = useContext(Store);
  let [projects, setProjects] = store.projects;
  let [project, setProject] = useState([]);
  let [show_navl, setShow_navl] = useState('');
  let [show_navb, setShow_navb] = useState('hidden');
  let [show, setShow] = store.show;

  let id = useParams();
  console.log(projects);
  useEffect(() => {
    setProject(projects[parseInt(id.id)]);
  }, [])
  console.log(project);
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
      <main id="main">

        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <i className="bi bi-list mobile-nav-toggle d-xl-none" id='mlist' onClick={() => showNav()} style={{ visibility: show_navl }}></i>
            <i class="bi mobile-nav-toggle d-xl-none bi-x" id='mbi' onClick={() => hideNav()} style={{ visibility: show_navb }}></i>
            <div className="d-flex justify-content-between align-items-center">
              <h2>Portfoio Details</h2>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li>Portfoio Details</li>
              </ol>
            </div>

          </div>
        </section>

        <section id="portfolio-details" className="portfolio-details">
          <div className="container">

            <div className="row gy-4">

              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">

                    <div className="swiper-slide">
                      <img src={project.image} style={{objectFit:"cover"}} alt="" />
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li><strong>Name</strong>: {project.name}</li>
                    <li><strong>Category</strong>: {project.category}</li>
                    <li><strong>Project date</strong>: {project.date}</li>
                    <li><strong>Project URL</strong>: <a href={project.url}>{project.url}</a></li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>Project Description</h2>
                  <p>
                    {project.des}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>
    </>
  )
}

export default InnerPage;
