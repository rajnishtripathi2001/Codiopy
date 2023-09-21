import React from "react";
import "./Rating.css";

export default function Rating() {
  return (
    <figure class="fig">
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <blockquote>
        <p class="review">
          "Codiopy has been a game-changer for us. Their expertise in web
          development and commitment to excellence transformed our vision into a
          stunning website. They're not just a service provider but a true
          partner in our success. Highly recommended!"
        </p>
      </blockquote>
      <figcaption class="fig-cap">
        <img
          class="w-6 h-6 rounded-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
          alt="profile"
        />
        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <cite class="pr-3 font-medium text-white dark:text-white">
            Raghuveer Singh
          </cite>
          <cite class="pl-3 text-sm text-white dark:text-gray-400">
            CEO at SEL
          </cite>
        </div>
      </figcaption>
    </figure>
  );
}
