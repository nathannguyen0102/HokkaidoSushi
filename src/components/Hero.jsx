import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1562436260-8c9216eeb703?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1041&q=80"
        alt="sushi img"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex md:text-2xl  flex-col text-xl text-black    p-4">
          <h1 className="font-bold text-4xl">Hokkaido sushi bar</h1>
          <h2 className="text-4xl py-4 italic">
            Serving Fresh Sushi in Santa ana
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
            est voluptate nobis saepe cum fuga! Nesciunt nulla quod sed quo
            pariatur hic ratione illo ut enim, quas reiciendis. Molestias saepe
            sint dolorem nesciunt debitis consequatur neque maxime quia libero
            quod.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
