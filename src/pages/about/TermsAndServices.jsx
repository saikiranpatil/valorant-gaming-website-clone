import React from 'react';

const TermsAndServices = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-16 px-6 lg:px-20 min-h-screen">
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-red-600 tracking-wider uppercase">
          Terms and Services
        </h1>
      </div>

      {/* Content Section */}
      <div className="space-y-12 max-w-4xl mx-auto">

        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4 border-b-2 border-red-600 pb-2">
            1. Introduction
          </h2>
          <p className="text-lg leading-relaxed">
            Welcome to the <span className="text-red-500 font-semibold">Valorant ID Marketplace</span>. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our services.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-4 border-b-2 border-gray-700 pb-2">
            2. Acceptance of Terms
          </h2>
          <p className="text-lg leading-relaxed">
            By using our website, you affirm that you are at least 18 years of age or have the consent of a parent or guardian. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4 border-b-2 border-red-600 pb-2">
            3. Services Offered
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
            <li>Account listing for sale.</li>
            <li>Account purchase options.</li>
            <li>Account verification services.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-4 border-b-2 border-gray-700 pb-2">
            4. User Responsibilities
          </h2>
          <p className="text-lg leading-relaxed">
            As a user of our services, you agree to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
            <li>Provide accurate information when creating an account.</li>
            <li>Respect the rights of other users and not engage in fraudulent activities.</li>
            <li>Not share your account credentials with anyone.</li>
          </ul>
        </section>

        {/* Section 5 - 10 */}
        {/* Repeat similar pattern for the remaining sections */}

        {/* Final Section */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4 border-b-2 border-red-600 pb-2">
            10. Contact Information
          </h2>
          <p className="text-lg leading-relaxed">
            If you have any questions or concerns regarding these terms, please contact us at:
          </p>
          <p className="text-lg leading-relaxed mt-2">
            <span className="text-red-500 font-semibold">Email:</span> support@valorantidmarketplace.com
          </p>
          <p className="text-lg leading-relaxed">
            <span className="text-red-500 font-semibold">Phone:</span> +1 (123) 456-7890
          </p>
        </section>

      </div>
    </div>
  );
};

export default TermsAndServices;
