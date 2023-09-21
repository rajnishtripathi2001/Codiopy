import React from "react";
import "./Services.css";

export default function Services() {
  const card = [
    {
      title: "Web Design",
      icon: "fa-solid fa-code",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      title: "UI/UX Design",
      icon: "fa-sharp fa-solid fa-crop-simple",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      title: "App Design",
      icon: "fa-brands fa-app-store-ios",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      title: "SEO",
      icon: "fa-brands fa-searchengin",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      title: "Deployment",
      icon: "fa-solid fa-server", 
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      title: "Responsive UI",
      icon: "fa-regular fa-window-maximize", 
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ];

  return (
    <div id="services">
      <h1>
        <span>03.</span> What We Do
      </h1>
      <div className="service-container">
        {card.map((item, index) => {
          return (
            <div className="service">
              <i className={item.icon}></i>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href="#more">Learn More</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
