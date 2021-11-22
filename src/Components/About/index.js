import AboutImage from "./img.png";
import "./about.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-cover">
        <img src={AboutImage} alt="about image 1" />
        <img src={AboutImage} alt="about image 2" />
        <img src={AboutImage} alt="about image 3" />
      </div>
      <div className="about-details">
        <h1 className="title">About Us</h1>
        <p className="about-content">
          Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder
          text used in design when creating content. It helps designers plan out
          where the content will sit
        </p>
      </div>
    </div>
  );
};

export default About;
