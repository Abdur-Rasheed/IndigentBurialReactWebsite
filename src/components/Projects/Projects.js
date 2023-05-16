import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/agehisto.png";
import emotion from "../../Assets/Projects/deathperyear.png";
import editor from "../../Assets/Projects/agegroup.png";
import chatify from "../../Assets/Projects/malefemale.png";
import suicide from "../../Assets/Projects/jurisdiction.png";
import bitsOfCode from "../../Assets/Projects/map.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         Data <strong className="purple">Analysis </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the findings.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Male vs Female"
              description="The pie chart represents the distribution of indigent burials between males and females. It visually demonstrates that males account for a significant majority, constituting 77.8% of all indigent burials. This data sheds light on the gender disparity in indigent burials and emphasizes the need to address the underlying factors contributing to this disproportionate representation."
              ghLink="https://github.com/larakaracasu/Indigent-Burial-Analysis/tree/main/notebooks"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Geospatial Map"
              description="This is a map showcasing the geographical distribution of indigent burials across the United States. It offers a visual representation of the locations where our sources have identified cases of indigent burials. By displaying this information on a map, it provides insights into the widespread nature of indigent burials and highlights areas where such occurrences are more prevalent. This visual representation aids in understanding the geographic scope of the issue and can guide further research and interventions aimed at addressing the challenges associated with indigent burials in specific regions or states."
              ghLink="https://github.com/larakaracasu/Indigent-Burial-Analysis/tree/main/notebooks"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Age"
              description="The pie chart illustrates the distribution of indigent burials based on age groups. It provides a visual representation of the proportion of indigent burials within different age categories. By analyzing the pie chart, we can gain insights into the age demographics most affected by indigent burials. This information is crucial for understanding the social and economic factors that contribute to the vulnerability of certain age groups. It can assist policymakers, organizations, and communities in identifying target areas for intervention and support, such as providing resources for elderly populations or implementing preventive measures for younger individuals at risk of indigent burials."
              ghLink="https://github.com/larakaracasu/Indigent-Burial-Analysis/tree/main/notebooks"
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Age Frequency"
              description="The histogram displays the distribution of available data based on age. It provides a visual representation of the frequency or count of individuals within different age intervals. By examining the histogram, we can identify the age groups for which we have a higher concentration of data points. This information is valuable for understanding the completeness and representativeness of the dataset, as well as potential biases or gaps in the available information. Analyzing the histogram can help researchers and analysts determine if further data collection efforts are needed to ensure a more comprehensive understanding of age-related patterns and trends. Additionally, it aids in identifying age groups with a robust data presence, enabling more accurate statistical analyses and insights in those specific age ranges."
              ghLink="https://github.com/larakaracasu/Indigent-Burial-Analysis/tree/main/notebooks"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Jurisdiction Scatterplot"
              description="The scatterplot displays the concentration of indigent burials across different jurisdictions over time. It helps identify patterns and trends in the distribution of indigent burials, highlighting jurisdictions with higher or lower concentrations. This information enables targeted interventions and resource allocation to address the needs of specific areas."
              ghLink="https://github.com/larakaracasu/Indigent-Burial-Analysis/tree/main/notebooks"
      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Indigent Deaths Per Year"
              description="The bar graph illustrates the number of deaths per year in relation to indigent burials. It provides a visual representation of the correlation between the overall number of deaths and the occurrence of indigent burials over time. By comparing the data, it becomes possible to identify any significant fluctuations or patterns in the relationship between these two factors, which can inform decision-making and resource allocation in addressing the needs of indigent burials."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
       
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
