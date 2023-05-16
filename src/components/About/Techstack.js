import React, { useState } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNumpy,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");

  const handleIconClick = (iconName) => {
    // Set the description based on the clicked icon
    setDescription(getIconDescription(iconName));
    // Show the modal
    setShowModal(true);
  };

  const getIconDescription = (iconName) => {
    // Return the description based on the clicked icon
    switch (iconName) {
      case "SiNumpy":
        return "NumPy is a library for the Python programming language, adding support for large, multi-dimensional arrays and matrices, along with a large collection of mathematical functions to operate on these arrays.";
      case "DiJavascript1":
        return "JavaScript is a high-level, interpreted programming language that enables you to create interactive web pages and perform dynamic actions within a web application.";
      case "DiNodejs":
        return "Node.js is an open-source, cross-platform runtime environment that allows you to execute JavaScript code server-side, enabling you to build scalable and fast network applications.";
      case "DiReact":
        return "React is a popular JavaScript library for building user interfaces. It allows you to create reusable UI components and efficiently update and render them in response to changes in application state.";
      case "DiMongodb":
        return "MongoDB is a NoSQL database that provides high performance, scalability, and flexibility. It stores data in a flexible, JSON-like document format, making it suitable for a wide range of applications.";
      case "FaAws":
        return "AWS (Amazon Web Services) is a comprehensive cloud computing platform provided by Amazon. It offers a wide range of services such as computing power, storage, and databases, allowing you to build and deploy scalable and reliable applications.";
      case "DiGit":
        return "Git is a distributed version control system that enables you to track changes in your codebase, collaborate with others, and manage different versions of your project.";
      case "SiFirebase":
        return "Firebase is a mobile and web development platform provided by Google. It offers a suite of cloud-based services, including hosting, real-time database, authentication, and more, simplifying the development process.";
      case "DiPython":
        return "Python is a versatile, high-level programming language known for its simplicity and readability. It is widely used in various domains, including web development, data analysis, machine learning, and more.";
      case "SiPytorch":
        return "PyTorch is an open-source deep learning framework built on Python. It provides a flexible and efficient way to build and train neural networks, making it popular among researchers and practitioners in the field of machine learning.";
      default:
        return "";
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleIconClick("SiNumpy")}>
          <SiNumpy />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleIconClick("DiJavascript1")}>
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleIconClick("DiNodejs")}>
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleIconClick("DiReact")}>
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleIconClick("DiMongodb")}>
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleIconClick("FaAws")}>
          <FaAws />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleIconClick("DiGit")}>
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleIconClick("SiFirebase")}>
          <SiFirebase />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleIconClick("DiPython")}>
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleIconClick("SiPytorch")}>
          <SiPytorch />
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Icon Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Techstack;
