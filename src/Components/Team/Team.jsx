import React from "react";
import "./Team.css";


export default function Team() {

  const people = [
    {
      name: "Rajnish Tripathi",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Athrva Bhatnagar",
      role: "Co-Founder / CTO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Viabhav Singh",
      role: "Chaprashi",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    // More people...
  ];

  return (
    <div className="team">
      <div className="team-container">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="text-[#FF5A5F]">04. </span> Meet our leadership
          </h2>
          <p className="team-info">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <ul className="team-list">
          {people.map((person) => (
            <li key={person.name}>
              <div className="team-member">
                <img
                  className="member-img"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <div>
                  <h3 className="member-name">
                    {person.name}
                  </h3>
                  <p className="member-role">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
