import React, { useState } from 'react';
import { socialMedia } from "../../constants";
import logo from "../../assets/logo.png";

const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex sm:flex-row flex-col items-center justify-around items-center min-h-screen bg-gray-900 text-white p-4">
      <div className='flex flex-col justify-center items-center'>
        <div>
          <img src={logo} className='w-[170px] mb-5 rounded-2xl' alt="" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="mb-6 text-center">You can also contact us through Social media:</p>
        <div className="flex flex-row justify-center items-center">
          {socialMedia.map((social) => (
            <li key={social.id} className="m-2 p-4 cursor-pointer bg-[#292929] list-none rounded-lg shadow-md transition-transform transform hover:bg-[#FF4655] hover:scale-105">
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.name} className="w-8 h-8 mx-auto" />
              </a>
            </li>
          ))}
        </div>
      </div>
      <div>
        <form action="https://formsubmit.co/mrfsociety1010@gmail.com" method="POST" className="max-w-lg mx-auto p-6 bg-gray-900 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold mb-2">Name *</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:border-teal-400 outline-none"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:border-teal-400 outline-none"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:border-teal-400 outline-none"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Address</label>
              <input
                type="text"
                name="address"
                className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:border-teal-400 outline-none"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:border-teal-400 outline-none"
              placeholder="Type the subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Message</label>
            <textarea
              name="message"
              className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:border-teal-400 outline-none"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Optional hidden fields */}
          <input type="hidden" name="_next" value="https://thanku.com/" />
          <input type="hidden" name="_captcha" value="false" />

          <button
            type="submit"
            className="w-full py-3 bg-teal-400 hover:bg-teal-500 text-gray-900 font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
