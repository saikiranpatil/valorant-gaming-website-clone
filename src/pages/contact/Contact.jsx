import React from 'react';
import { socialMedia } from "../../constants";

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center items-center min-h-screen bg-gray-900 text-white p-4">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="mb-6 text-center">You can also contact us through the Social media:</p>
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
    );
};

export default Contact;
