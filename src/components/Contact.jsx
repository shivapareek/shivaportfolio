import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { FaArrowRight, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [communicationMethod, setCommunicationMethod] = useState("Phone");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_am4efql", "template_w41ajzo", e.target, "mFSfC7DMYzE-g0li_")
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[rgb(0,5,23)] text-white font-inter px-4 py-20 flex flex-col items-center justify-center"
    >
      {/* Section Heading */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text mb-2">
  Contact Me
</h2>

        <p className="italic text-gray-300 mt-2 ">Let’s connect and collaborate</p>
      </div>

     {/* Top Info Section */}
<div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-12 text-center">

  {/* Address */}
  <div>
    <div className="bg-[#1a1a40] w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg">

      <FaLocationDot className="text-orange-400 text-2xl sm:text-3xl md:text-4xl" />
    </div>
    <a
  href="#contact"
  className="text-white font-bold uppercase text-sm mb-1 hover:text-orange-400 transition-colors duration-300 cursor-pointer block"
>
  Address
</a>

    <p className="text-gray-400 text-xs sm:text-sm">Jaipur, Rajasthan, India (Bharat)</p>
  </div>

  {/* Contact Number */}
  <div>
    <div className="bg-[#1a1a40] w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg">

      <FaPhoneAlt className="text-orange-400 text-2xl sm:text-3xl md:text-3xl" />
    </div>
    <a
  href="#contact"
  className="text-white font-bold uppercase text-sm mb-1 hover:text-orange-400 transition-colors duration-300 cursor-pointer block"
>
  Contact Number
</a>

    <p className="text-gray-400 text-xs sm:text-sm">+91 9950394696</p>
  </div>

  {/* Email */}
  <div>
    <div className="bg-[#1a1a40] w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg">

      <FaEnvelope className="text-orange-400 text-2xl sm:text-3xl md:text-4xl" />
    </div>
    <a
  href="#contact"
  className="text-white font-bold uppercase text-sm mb-1 hover:text-orange-400 transition-colors duration-300 cursor-pointer block"
>
  Email Address
</a>

    <p className="text-gray-400 text-xs sm:text-sm">pareekshiva2004@gmail.com</p>
  </div>

  {/* Website */}
  <div>
    <div className="bg-[#1a1a40] w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg">

      <FaGlobe className="text-orange-400 text-2xl sm:text-3xl md:text-4xl" />
    </div>
    <a
  href="#contact"
  className="text-white font-bold uppercase text-sm mb-1 hover:text-orange-400 transition-colors duration-300 cursor-pointer block"
>
  Website
</a>

    <p className="text-gray-400 text-xs sm:text-sm">shivapareek.com</p>
  </div>
</div>


      {/* Contact Form Section */}
     <div className="w-full max-w-6xl mx-auto bg-[rgb(8,13,30)] rounded-3xl overflow-hidden shadow-lg flex flex-col-reverse md:flex-row">


        {/* Left Form Side */}
        <div className="p-10 md:w-1/2">
          <h2 className="text-orange-400 mb-6 text-lg flex items-center gap-2">
            🧡 Hello, Let's get in touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-gray-600 focus:border-orange-400 outline-none text-white py-2"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-gray-600 focus:border-orange-400 outline-none text-white py-2"
            />
            <input
              type="text"
              name="reason"
              required
              placeholder="Reason for contact"
              className="w-full bg-transparent border-b border-gray-600 focus:border-orange-400 outline-none text-white py-2"
            />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone no"
              className="w-full bg-transparent border-b border-gray-600 focus:border-orange-400 outline-none text-white py-2"
            />
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Message"
              className="w-full bg-transparent border-b border-gray-600 focus:border-orange-400 outline-none text-white py-2"
            ></textarea>
            <input
  type="hidden"
  name="communication"
  value={communicationMethod}
/>


            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3 rounded-full w-full transition-all"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right Info Side */}
        <div className="bg-[#10162b] p-10 md:w-1/2 text-center md:text-left flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">
              We’d love to<br />
              <span className="text-orange-400">Hear from you</span>
            </h2>
            <p className="text-orange-300 text-md mb-10">info@jamesw.in</p>
          </div>

          <div>
            <h4 className="text-gray-400 mb-2">Prefer method of communication</h4>
            <div className="flex items-center gap-6 mb-8">
              {["Phone", "Email"].map((method) => (
                <label key={method} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="communication"
                    value={method}
                    checked={communicationMethod === method}
                    onChange={() => setCommunicationMethod(method)}
                    className="accent-orange-400"
                  />
                  <span
                    className={`${
                      communicationMethod === method
                        ? "text-orange-400 font-semibold"
                        : "text-white"
                    }`}
                  >
                    {method}
                  </span>
                </label>
              ))}
            </div>
            <div className="text-orange-400 text-xl">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
