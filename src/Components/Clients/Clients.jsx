import React from "react";
import "./Clients.css";

export default function Clients() {
  
  const clients = [
    {
      alt: "Tesla",
      imgUrl:
        "https://wdikc.wpenginepowered.com/wp-content/uploads/2018/03/cerner-copy-3.png",
    },
    {
      alt: "Sprint",
      imgUrl:
        "https://wdikc.wpenginepowered.com/wp-content/uploads/2018/03/cerner.png",
    },
    {
      alt: "Cerner",
      imgUrl:
        "https://wdikc.wpenginepowered.com/wp-content/uploads/2018/03/cerner-copy.png",
    },
    {
      alt: "H&R Block",
      imgUrl:
        "https://wdikc.wpenginepowered.com/wp-content/uploads/2018/03/cerner-copy-5.png",
    },
    {
      alt: "Musium at Prairiefire",
      imgUrl:
        "https://wdikc.wpenginepowered.com/wp-content/uploads/2018/03/cerner-copy-14.png",
    },
    {
      alt: "Lego",
      imgUrl:
        "https://wdikc.wpenginepowered.com/wp-content/uploads/2018/03/cerner-copy-12.png",
    },
  ];

  return (
    <div id="clients">
      <h1>
        <span>02.</span> Who We Work With
      </h1>
      <div className="client-logo-row">
        {clients.map((client) => (
          <div className="client-logo">
            <div className="client-logo">
              <img width="326" height="162" src={client.imgUrl} alt={client.alt} />
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
}
