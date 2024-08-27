import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaLocationArrow, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      contact_number: formData.contactNumber,
      message: formData.message,
    };

    emailjs
      .send(
        'service_r934sgh', // Replace with your EmailJS service ID
        'template_uyq7xdf', // Replace with your EmailJS template ID
        templateParams,
        'SERmU7fFG3uJTIeix' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 3000);
          setFormData({ name: '', email: '', contactNumber: '', message: '' });
        },
        (error) => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section className="w-full py-12 px-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white" id="contact">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Contact Me</h2>
          <p className="text-lg text-gray-300">
            Feel free to reach out through any of the methods below or send me a message directly.
          </p>
        </div>

        {/* Contact Information and Form */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="flex flex-col md:w-1/3 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <FaPhone className="text-blue-400 text-4xl mb-2" />
              <h3 className="text-lg font-semibold text-white">Phone</h3>
              <p className="text-gray-300 mt-1">+91 6284567439</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <FaEnvelope className="text-blue-400 text-4xl mb-2" />
              <h3 className="text-lg font-semibold text-white">Email</h3>
              <p className="text-gray-300 mt-1">rawatavii437@gmail.com</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <FaLocationArrow className="text-blue-400 text-4xl mb-2" />
              <h3 className="text-lg font-semibold text-white">Location</h3>
              <p className="text-gray-300 mt-1">Rishikesh, India</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">Contact Number</label>
                    <input
                      type="text"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Contact Number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="4"
                      placeholder="Your Message (optional)"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-transform transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              {/* Submission Animation */}
              {isSubmitted && (
                <div className="mt-4 text-center text-green-400 text-lg animate-pulse">
                  Message Sent Successfully!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center  mt-10">
          <p className="text-gray-300 text-sm mb-4 ">
            Made by Ayush Rawat © {new Date().getFullYear()}
          </p>
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="mailto:rawatayush1718@gmail.com" className="hover:text-blue-500">
              <FaEnvelope className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/ayush_rawat5" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/ayush-rawat-a73aa822a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://wa.link/21ddmg" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
