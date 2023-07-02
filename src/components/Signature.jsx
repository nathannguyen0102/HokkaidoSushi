import React from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Signature = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1611519685019-46269a13fe91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      url: "https://media.istockphoto.com/id/1320922361/photo/woman-taking-tasty-sushi-roll-with-salmon-from-set-at-table-closeup.webp?b=1&s=170667a&w=0&k=20&c=0c_1yejNq9Y1_hgl3fu4ygspGhf_8yUelIgyctEapEA=",
    },
    {
      url: "  https://media.istockphoto.com/id/109836388/photo/sushi.webp?b=1&s=170667a&w=0&k=20&c=gvSUdNKnoCRQS17jMEr39ILzsesLyIHnz6KPh7au0qI=",
    },
    {
      url: "  https://images.unsplash.com/photo-1590987337605-84f3ed4dc29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative max-w-[1140px] h-[450px] w-full m-auto py-16 px-4  group">
      {/* images */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        {/* button */}
        <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={40} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={40} />
        </div>
      </div>
    </div>
  );
};

export default Signature;
