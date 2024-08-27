import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import DigitalMarketingAnimation from "../../assets/DigitalMarketingAnimation.json";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["I'm Abhishek Rawat", "I'm a Digital Entrepreneur"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl from-gray-900 via-purple-800 to-indigo-900 px-6 py-6 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg
          className="w-full h-full"
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
              <stop stopColor="#6366F1" />
              <stop offset="1" stopColor="#9333EA" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Text Section */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4 max-w-xl mt-4">
        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-semibold tracking-tight font-sans text-amber-400">
          Hi,
        </h1>

        <h2 className="text-lg sm:text-2xl lg:text-3xl font-medium tracking-normal font-serif">
          {typeEffect} <span className="animate-blink">|</span>
        </h2>

        <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg font-light">
          I specialize in digital marketing and crafting user-friendly online
          experiences that help businesses thrive in the digital world.
        </p>

        <a
          href="#contact"
          className="inline-block px-6 py-3 mt-4 bg-yellow-500 text-gray-900 font-semibold rounded-full hover:bg-yellow-600 transition duration-300"
        >
          Get in Touch
        </a>
      </div>

      {/* Animation Section */}
      <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md mt-4 lg:mt-6 pb-4">
        <Lottie
          animationData={DigitalMarketingAnimation}
          className="w-full h-full"
        />
      </div>
    </section>
  );
}

export default Hero;
