import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src="SHIVAMP.jpeg" alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I'm Shivam, a dedicated and curious Computer Science Student with a strong 
                foundation in Java, Data Structures and Algorithms (DSA), and backend development.
                I have a deep interest in solving real-world problems through code and continuously 
                strive to write clean, efficient solutions. Currently, I’m actively learning Data Science
                to broaden my skill set and explore the potential of data-driven technologies. 
                With a passion for continuous learning and logical thinking, I’m always looking for 
                opportunities to grow, build meaningful tech solutions, and contribute to impactful
                projects. I enjoy solving algorithmic challenges and have solved over 250 problems on LeetCode.
              </p>

              {/* LeetCode Button */}
              <a
                href="https://leetcode.com/u/Shiv1048516/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="leetcode-button">LeetCode</button>
              </a>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
