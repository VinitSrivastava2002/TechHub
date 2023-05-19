import React, { useEffect, useState } from 'react';
import "./Project.Module.css";
import projectDetails from './projectDetails.json';

import AOS from "aos";
import "aos/dist/aos.css";
import Project from '../projectdetails';

function Android() {
  const [webProjects, setWebProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    const filteredProjects = projectDetails["Session 2023"].filter(
      (project) => project.category === "Machine Learning"
    );
    setWebProjects(filteredProjects);
  }, []);

  const openProjectDetails = (project) => {
    const selectedProjectDetails = {
      title: project.name,
      images: project.images,
      description: project.description,
      category: project.category,
      session: project.date,
      url: project.projectUrl,
      author: project.client,
      liveUrl: project?.liveUrl,
    };
    setShowProjectDetails(true)
    setSelectedProject(selectedProjectDetails);
  };
  useEffect(() => {
    const handleBrowserBackButton = () => {
      setShowProjectDetails(false);
    };

    window.addEventListener("popstate", handleBrowserBackButton);

    return () => {
      window.removeEventListener("popstate", handleBrowserBackButton);
    };
  }, []);
  
  return (
    <>
    {showProjectDetails ? (<Project project={selectedProject}/>):(
      <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>Machine Learning </h1>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="100">
            <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fmachine%2Fmachinelogo.png?alt=media&token=fee52044-d44c-434a-b587-3545927bf39d" className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="projects" className="projects">
          <div className="container" data-aos="fade-up">
            <div
              className="row gy-4 portfolio-container"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {webProjects.map((project) => (
                <div
                  className="col-lg-4 col-md-6 portfolio-item filter-remodeling"
                  key={project.id}
                >
                  <div className="portfolio-content h-100">
                    <img
                      src={project.images[0]}
                      className="img-fluid"
                      alt=""
                      style={{
                        objectFit: 'contain',
                        aspectRatio: '16/9'
                      }}
                    />
                    <div className="portfolio-info">
                      <h4>{project.name}</h4>
                      <button
                        onClick={() => openProjectDetails(project)}
                        title="More Details"
                        className="details-link"
                        style={{
                          backgroundColor: 'transparent',
                          boxShadow: 'none',
                          border: 'none'
                        }}
                      >
                        <i className="bi bi-link-45deg" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      </>
      )
    }

    </>
  );
}

export default Android;
