import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img src="BytePage.jpg" alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Streamlit</span>
                  <span className="card-detail-badge">Langchain</span>
                  <span className="card-detail-badge">Faiss</span>
                  <span className="card-detail-badge">PyPDF</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">BytePages</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://bytepages-bmr7cmyqjblbucyd6fq6kf.streamlit.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img src="CollabDrawing.jpg" alt="project2" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">Sockets</span>
                  <span className="card-detail-badge">Canvas API</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">DrawingBoard</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://collaborative-drawing-app-frontend-qqka.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img src="FruitsSlotMachine.jpg" alt="project3" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">FruitsSlotMachine</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://shivamj1828.github.io/Fruit-Slot-Machine/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-4">
  <a
    href="https://github.com/shivamj1828"
    className="github-btn"
    target="_blank"
    rel="noreferrer"
  >
    SEE MORE ON GITHUB
  </a>
</div>
      </div>
    </>
  );
};

export default Projects;
