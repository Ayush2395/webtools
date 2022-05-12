import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { IoIosSchool } from "react-icons/io";

function Footer(props) {
  return (
    <>
      <div className="footer_section">
        <footer className="grid footer">
          <div className="students_name">
            <h3>Developers:</h3>
            <div className="footer_link">
              <a href="https://github.com/Ayush2395" target="_blank">
                <AiOutlineGithub /> Ayush
              </a>
            </div>
            <div className="footer_link">
              <a href="https://github.com/Barsha03" target="_blank">
                <AiOutlineGithub /> Barsha Kumari
              </a>
            </div>
            <div className="footer_link">
              <a href="https://github.com/Ayush2395" target="_blank">
                <AiOutlineGithub /> Habiba Fatima
              </a>
            </div>
            <div className="footer_link">
              <a href="https://github.com/Ayush2395" target="_blank">
                <AiOutlineGithub /> Dhiraj Kumar
              </a>
            </div>
          </div>
          <div className="clg_name">
            <h3>Students of:</h3>
            <div className="footer_link">
              <a href="#" target="_blank">
                <GoLocation /> Gulzar Group Of Intitutes
                <p>Khanna</p>
              </a>
            </div>
            <div className="footer_link">
              <GoLocation color="#d6d6d6" />
              <span style={{ color: "#d6d6d6" }}>G.T. Road, Punjab</span>
            </div>
          </div>
          <div className="guide_name">
            <div className="footer_link">
              <h3>Guide:</h3>
              <a href="#" target="_blank">
                <IoIosSchool /> Harjeet Kaur
              </a>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2022 Web Tools, All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
