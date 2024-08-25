import React from 'react';
import { useSpring, animated } from '@react-spring/web'; // Ensure this is installed

function About() {
  // Fade-in and slide-up animation for the whole section
  const fadeInSection = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50%)' },
    config: { duration: 1000 },
  });

  // Slide-in animation for the profile image
  const slideInImage = useSpring({
    transform: 'translateX(0)',
    from: { transform: 'translateX(-30%)' },
    config: { duration: 1000 },
  });

  // Fade-in animation for the text content
  const fadeInText = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
    config: { duration: 1000 },
  });

  return (
    <section className="w-full py-16 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
      <animated.div style={fadeInSection} className="container mx-auto flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-blue-400 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300">
            Discover my journey as a digital entrepreneur and the passion behind my work.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          {/* Profile Image */}
          <animated.div style={slideInImage} className="flex justify-center w-full md:w-1/2">
            <img
              src="src/assets/Abhishekimg.jpg"
              alt="Profile"
              className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-blue-500 transition-transform duration-500 transform hover:scale-110"
            />
          </animated.div>

          {/* About Text */}
          <animated.div style={fadeInText} className="flex flex-col w-full md:w-1/2 space-y-6">
            <p className="text-lg leading-relaxed mb-4">
              Hello, I’m Abhishek Rawat, a dedicated digital entrepreneur with a focus on transforming digital experiences. I specialize in crafting compelling digital marketing strategies and creating user-centric websites that drive results. My work blends innovation with strategy to build impactful online presences.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              My expertise lies in developing strategic marketing plans and designing responsive websites that stand out in today’s digital landscape. I am passionate about leveraging the latest technologies and trends to deliver solutions that not only meet but exceed client expectations.
            </p>
            <p className="text-lg leading-relaxed">
              Outside of my professional endeavors, I am keen on exploring new trends in digital marketing and technology, as well as enjoying the outdoors. Let’s connect and explore how we can collaborate to achieve your business goals.
            </p>
           
          </animated.div>
        </div>
      </animated.div>
    </section>
  );
}

export default About;
