import React from "react";
import "./Work.css";

export default function Work() {
  const work = [
    {
      title: "title1",
      description: "description",
      image: "https://liftedlogic.com/wp-content/uploads/2018/03/tilewebsite.png",
    },
    {
      title: "title2",
      description: "description",
      image: "https://liftedlogic.com/wp-content/uploads/2018/03/tilewebsite.png",
    },
    {
      title: "title3",
      description: "description",
      image: "https://liftedlogic.com/wp-content/uploads/2018/03/tilewebsite.png",
    },
    {
      title: "title3",
      description: "description",
      image: "https://liftedlogic.com/wp-content/uploads/2018/03/tilewebsite.png",
    },
    {
      title: "title3",
      description: "description",
      image: "https://liftedlogic.com/wp-content/uploads/2018/03/tilewebsite.png",
    },
  ];

  return (
    <div id="work">
      <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
        <span className="text-[#FF5A5F]">05. </span> What We Make
      </h2>
      <div className="work-list">
        {work.map((item) => (
          <div class="work">
            <img src={item.image} alt="w1" />
            <div class="layer">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#q">
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
