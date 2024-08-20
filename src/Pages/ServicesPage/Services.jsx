import React from "react";
import { Link } from "react-router-dom";

// All Css Files From ww
import "./cssFiles/services.css";
import "./cssFiles/mobaile.css";
import "./cssFiles/tablate.css";
import "./cssFiles/pc.css";

function Services() {
  return (
    <div className="All-dev-ServicesPage">
      <div className="para11">
        <p className="Paragraph-of-Services-page">
          <span className="Top-Titale-of-ServicesPage">
            AS A FRONT-END WEB DEVELOPER 🧑‍💻
          </span>
          I create attractive and responsive websites using React. These
          websites are designed to look good and work easily on all devices,
          including mobile phones, tablets, PCs, and laptops. 📱📲💻🖥️
          <br />
          With a strong foundation in HTML, CSS, and JavaScript,
          <br />
          <br />
          my goal is to transform innovative ideas into functional and
          user-friendly digital websites. I am committed to delivering
          high-quality work that meets client needs and exceeds expectations.
          <br />
          Whether you need a sleek landing page, a complex web application, or
          anything in between, I am here to bring your vision to life with
          professionalism and precision. <br />
          Let's work together to build a great website for you! 🤝 <br />
          <br />
          <Link
            to="/contact"
            className="heroContactBtn-ServicesPage"
            id="idHeroContactBtn"
          >
            Contact
          </Link>
        </p>
      </div>

      <div className="why-you-need-me">
        <div className="div-of-what-can-build">
          <h1 className="what-can-build">WHAT CAN I BUILD FOR YOU 🧑‍💻</h1>
        </div>

        <div className="all-services-divbox">
          <div className="Personal-Websites">
            <span className="Personal-Websites-box">Personal Websites : </span>
            <br />
            For showcasing work and projects, sharing experiences, expertise,
            and thoughts, <br />
            For Exampole: Portfolio, Online Resume,
          </div>

          <div className="Personal-Websites">
            <span className="Personal-Websites-box">
              Educational Websites :
            </span>
            <br />
            School/University Websites, Educational Blogs, E-learning Platforms,
          </div>

          <div className="Personal-Websites">
            <span className="Personal-Websites-box">Nonprofit Websites :</span>
            <br />
            <span>Charity Websites, </span>
            <span>Fundraising Platforms, </span>
            <span>Community Organization Sites.</span>
          </div>

          <div className="Personal-Websites">
            <span className="Personal-Websites-box">Portfolio Galleries :</span>
            <br />
            For artists, photographers, and designers to showcase their work.
          </div>

          <div className="Personal-Websites">
            <span className="Personal-Websites-box">Business Websites :</span>
            <br />
            For promoting businesses and services. and For marketing campaigns,
            Product Launch Pages, Marketing Campaign Pages, Event Sites: For
            promoting and managing events.
          </div>

          <div className="Personal-Websites">
            <span className="Personal-Websites-box">Blog & News Sites : </span>
            <br />
            For publishing Blogs, articles and news.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
