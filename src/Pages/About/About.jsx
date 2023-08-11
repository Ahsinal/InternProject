import React from "react";
import "./About.css";
import "./About.css";
import BreadcrumbComponent from "../../Components/BreadcrumbComponent";
const About = () => {
  //Breadcrumbs paths
  const paths = [{ name: "About", link: "/about" }];
  return (
    <section className="about__page">
      <BreadcrumbComponent paths={paths} />
      <div className="about__content">
        <div className="about__content__division about__desc">
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
          <p>
            Exclusive boasts an extensive and ever-expanding catalog, surpassing
            the remarkable milestone of over one million diverse products. With
            a remarkable growth trajectory, Exclusive stands as a dynamic and
            vibrant marketplace that continually enriches its offerings at an
            impressive pace. Catering to a wide spectrum of preferences and
            needs, Exclusive presents a comprehensive assortment that spans
            across various categories.
          </p>
        </div>
        <div className="about__content__division about__pic">
          <img
            src="https://img.freepik.com/free-photo/planner-calendar-schedule-date-concept_53876-121073.jpg?size=626&ext=jpg"
            alt="about pic"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
