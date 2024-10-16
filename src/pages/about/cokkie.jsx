import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const CookiePreference = () => {

    const navigate = useNavigate();

  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the preferences, e.g., save to cookies or state
    console.log('Cookie Preferences:', preferences);
  };

  return (
    <div className="cookie-preference bg-dark-gradient text-white py-10 px-5 lg:px-20">
      <h1 className="text-center text-4xl text-red-500 font-bold mb-10">Cookie Preferences</h1>
      <p className="text-lg mb-5">
        We use cookies to enhance your experience on our site. Please select your preferences below:
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="essential"
              checked={preferences.essential}
              onChange={handleChange}
              className="mr-2"
              disabled
            />
            <span className="text-lg">Essential Cookies (Required)</span>
          </label>
          <p className="text-sm text-gray-400">These cookies are necessary for the website to function.</p>
        </div>

        <div className="mb-5">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="analytics"
              checked={preferences.analytics}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-lg">Analytics Cookies</span>
          </label>
          <p className="text-sm text-gray-400">Help us analyze user behavior to improve our service.</p>
        </div>

        <div className="mb-5">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="marketing"
              checked={preferences.marketing}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-lg">Marketing Cookies</span>
          </label>
          <p className="text-sm text-gray-400">Cookies used for delivering personalized ads.</p>
        </div>

        <button
          type="submit"
          className="mt-5 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/")}
        >
          Save Preferences
        </button>
      </form>
    </div>
  );
};

export default CookiePreference;
