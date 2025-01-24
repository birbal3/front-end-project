import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Nav1 = () => {

  const contactInfo = {
    phone: "+918447746183",
    email: "www.registerkaro.in",
    instagram: "https://www.linkedin.com/in/birbal3/",
    facebook: "https://github.com/birbal3",
    twitter: "https://birbal3.github.io/portfolio/",
    pintrest: "https://linkedin.com/in/Username",
  };

  const contactLinks = [
    {
      href: `mailto:${contactInfo.email}`,
      label: contactInfo.email,
      icon: <FaEnvelope />,
      ariaLabel: "email",
    },
    {
      href: `tel:${contactInfo.phone}`,
      label: contactInfo.phone,
      icon: <FaPhone />,
      ariaLabel: "phone",
    },
  ];

  const socialLinks = [
    { href: `${contactInfo.instagram}`, icon: <FaInstagram />, ariaLabel: "Instagram" },
    { href: `${contactInfo.facebook}`, icon: <FaFacebook />, ariaLabel: "Facebook" },
    { href: `${contactInfo.twitter}`, icon: <FaTwitter />, ariaLabel: "Twitter" },
    { href: `${contactInfo.pintrest}`, icon: <FaPinterest />, ariaLabel: "Pinterest" },
  ];

  return (
    <div className="bg-top_strip_blue text-white text-sm px-4 flex flex-wrap justify-center md:justify-end items-center md:pr-10 pt-3 pb-3">
      {/* Contact Info */}
      <div className="flex flex-wrap justify-center items-center mx-3">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:underline border-slate-400 md:border-r-2 px-2 flex items-center space-x-1"
            aria-label={link.ariaLabel}
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </a>
        ))}
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-2 md:mt-0">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
            className="hover:text-gray-300 flex items-center"
          >
            <span>{link.icon}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nav1;
