import React from "react";
import aboutImg from "../images/aboutimg.jpg"; // import the image

const AboutPage = () => {
  return (
    <div className="bg-cream min-h-screen px-4 md:px-20 py-10">
      <h1 className="text-5xl font-serif text-maroon mb-8 text-center">
        About Ameena Nihar
      </h1>

      <div className="max-w-3xl mx-auto text-darkText text-lg md:text-xl leading-relaxed space-y-6">
        <p>
          Hello everyone, I'm <span className="font-semibold">Ameena Nihar</span>. I lived in
          Kolkata until 2022, after which I moved to Manchester, UK. From a young age,
          I was always inquisitive about food and cuisines, which sparked my journey
          into cooking and exploring recipes from around the world.
        </p>

        <p>
          My roots are from Chennai, so there was always a place in my heart for
          every flavor, every dish. Over time, cooking became my way to express
          creativity, curiosity, and culture.
        </p>

        <p>
          In my page <span className="font-semibold">Everyday Cravings </span>, I
          capture a piece of my soul in every recipe. Every day is a new search within,
          a new flavor to explore, and a story to share.
        </p>

        <p className="text-maroon font-semibold">
          Join me on this journey of flavors, curiosity, and everyday cravings!
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <img
          src={aboutImg}
          alt="Ameena Nihar"
          className="w-64 h-64 object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutPage;
