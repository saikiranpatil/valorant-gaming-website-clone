import React from 'react';

const PrivacyNotes = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-16 px-6 lg:px-20 min-h-screen">
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-red-600 tracking-wider uppercase">
          Privacy Notes
        </h1>
      </div>

      {/* Content Section */}
      <div className="space-y-12 max-w-4xl mx-auto">

        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4 border-b-2 border-red-600 pb-2">
            1. Data Collection
          </h2>
          <p className="text-lg leading-relaxed">
            We collect personal information such as your name, email address, and payment details to facilitate transactions on the <span className="text-red-500 font-semibold">Valorant ID Marketplace</span>. By using our services, you consent to the collection and use of this information as outlined in this privacy policy.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-4 border-b-2 border-gray-700 pb-2">
            2. How We Use Your Information
          </h2>
          <p className="text-lg leading-relaxed">
            Your personal information is used solely for the purpose of providing our services, processing transactions, and improving your user experience. We may also use your contact information to send important updates regarding your account or services.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4 border-b-2 border-red-600 pb-2">
            3. Data Protection
          </h2>
          <p className="text-lg leading-relaxed">
            We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. While we strive to keep your data secure, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-4 border-b-2 border-gray-700 pb-2">
            4. Sharing Your Information
          </h2>
          <p className="text-lg leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted partners solely for the purpose of operating our services, such as payment processing.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4 border-b-2 border-red-600 pb-2">
            5. Cookies and Tracking
          </h2>
          <p className="text-lg leading-relaxed">
            Our website uses cookies to enhance your experience, track analytics, and improve functionality. You can choose to disable cookies in your browser settings, but this may affect your ability to use some features of our site.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-4 border-b-2 border-gray-700 pb-2">
            6. Changes to this Policy
          </h2>
          <p className="text-lg leading-relaxed">
            We reserve the right to modify this privacy policy at any time. Any changes will be posted on this page, and we encourage you to review the policy periodically.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4 border-b-2 border-red-600 pb-2">
            7. Contact Us
          </h2>
          <p className="text-lg leading-relaxed">
            If you have any questions or concerns about our privacy practices, please reach out to us at:
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

export default PrivacyNotes;
