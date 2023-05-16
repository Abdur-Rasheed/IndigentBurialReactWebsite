import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Our mission is to address the pressing issue of indigent burials by creating a comprehensive database, analyzing data trends, and raising awareness about the impact of social isolation and extreme poverty on vulnerable populations. Through web scraping and data analysis, we strive to provide accurate insights into the prevalence, demographics, and geographic distribution of indigent burials. By presenting our findings through an interactive website, we aim to engage policymakers, organizations, and communities in developing equitable and dignified solutions for all individuals, regardless of their financial circumstances. Our ultimate goal is to improve support systems and advocate for a society where no one faces the burden of indigent burials alone. <span className="purple"> </span>
       
            <br />
            <br />
            <br />
        
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            ""Let us strive to provide dignified burials for the indigent, ensuring that even in death, they are treated with compassion and respect."!"{" "}
          </p>
          <footer className="blockquote-footer">Abdur-Rasheed Syed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
