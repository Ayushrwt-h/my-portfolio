import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import DigitalMarketingAnimation from "../../assets/DigitalMarketingAnimation.json";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["I am Abhishek Rawat", "I am a digital entrepreneur"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <main className="relative min-h-[70vh] w-full flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-8 overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute -top-32 -left-32 opacity-30 text-white"
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="150" r="150" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 opacity-30 text-white"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="200" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      {/* Text Section */}
      <div className="relative flex flex-col gap-4 justify-center text-center md:text-left md:w-1/2 z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight shadow-md">
          Hi There!
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight shadow-md">
          {typeEffect}
          <span className="animate-ping">|</span>
        </h2>
        <p className="text-base md:text-lg text-white leading-relaxed mt-4">
          Hi there! I'm a passionate digital marketing expert with a <br />
          mission to share my knowledge with the world.
        </p>
      </div>

      {/* Animation Section */}
      <div className="relative flex items-center justify-center w-full md:w-1/2 mt-8 md:mt-0 z-10">
        <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
          <Lottie
            animationData={DigitalMarketingAnimation}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </main>
  );
}

export default Hero;
