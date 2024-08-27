import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import DigitalMarketingAnimation from "../../assets/DigitalMarketingAnimation.json";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["I'm Abhishek Rawat", "I'm a Digital Entrepreneur"],
    loop: true,
    typeSpeed: 90,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-800 to-indigo-900 px-4 py-12 text-white overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 animate-gradient-flow opacity-20 pointer-events-none transform-gpu">
        <svg
          className="w-full h-full transform translate-y-[-5%] scale-110"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="400" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(90 0 400) scale(400)"
            >
              <stop stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#9333EA" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Text Section */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-2xl mt-2 animate-fade-in-up mb-0 mb-0">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter font-serif text-yellow-400 leading-tight shadow-lg drop-shadow-xl neon-glow">
          Hi, I'm Abhishek Rawat
        </h1>

        <h2 className="text-lg sm:text-3xl lg:text-4xl font-semibold tracking-wide font-serif text-gray-100 animate-typewriter">
          {typeEffect} <span className="animate-blink">|</span>
        </h2>

        <p className="text-sm sm:text-lg lg:text-xl leading-relaxed max-w-lg font-light text-gray-300">
          I specialize in digital marketing and crafting engaging, user-friendly
          online experiences that help businesses grow.
        </p>

        <a
          href="#contact"
          className="inline-block px-8 py-3 mt-6 bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-110 hover:shadow-xl neon-button"
        >
          Get in Touch
        </a>
      </div>

      {/* Animation Section */}
      <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg mt-8 lg:mt-12 pb-2 animate-fade-in-up hover:scale-105 transform transition-transform duration-500 ease-in-out">
        <Lottie animationData={DigitalMarketingAnimation} className="w-full h-full" />
      </div>
    </section>
  );
}

export default Hero;
