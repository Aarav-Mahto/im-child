import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBell, FaFeatherAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const BottomBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed z-30 bottom-0 left-0 w-full bg-black border-t border-gray-700 text-white flex justify-around items-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      } md:hidden h-14`}
    >
      {/* Home */}
      <Link
        to="/"
        className="flex flex-col items-center text-gray-200 hover:text-blue-500"
      >
        <FaHome size={22} />
        <span className="text-[10px]">Home</span>
      </Link>

      {/* Message */}
      <Link
        to="/message"
        className="flex flex-col items-center text-gray-200 hover:text-blue-500"
      >
        <IoChatbubbleEllipsesSharp size={22} />
        <span className="text-[10px]">Message</span>
      </Link>

      {/* Grok Center Icon */}
      <a
        href="https://grok.x.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-1 bg-black -mt-8 border-4 border-black"
      >
        <img
          src="https://images.seeklogo.com/logo-png/61/2/grok-logo-png_seeklogo-613403.png"
          alt="Grok"
          className="w-10 h-10 object-cover invert"
        />
      </a>

      {/* Notification */}
      <Link
        to="/notification"
        className="flex flex-col items-center text-gray-200 hover:text-blue-500"
      >
        <FaBell size={22} />
        <span className="text-[10px]">Notify</span>
      </Link>

      {/* Post */}
      <Link
        to="/post"
        className="flex flex-col items-center text-gray-200 hover:text-blue-500"
      >
        <FaFeatherAlt size={22} />
        <span className="text-[10px]">Post</span>
      </Link>
    </div>
  );
};

export default BottomBar;
