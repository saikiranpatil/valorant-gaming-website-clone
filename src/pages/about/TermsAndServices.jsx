import React from 'react';
// import './TermsAndServices.css'; // Importing the CSS file

const TermsAndServices = () => {
  return (
    <div className="terms-and-services">
      <h1 className="title">Terms and Services</h1>

      <h2 className="section-title">1. Introduction</h2>
      <p>
        Welcome to Valorant ID Marketplace. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our services.
      </p>

      <h2 className="section-title">2. Acceptance of Terms</h2>
      <p>
        By using our website, you affirm that you are at least 18 years of age or have the consent of a parent or guardian. If you do not agree to these terms, please do not use our services.
      </p>

      <h2 className="section-title">3. Services Offered</h2>
      <p>
        We provide a platform for buying and selling Valorant accounts. Our services include:
      </p>
      <ul className="service-list">
        <li>Account listing for sale.</li>
        <li>Account purchase options.</li>
        <li>Account verification services.</li>
      </ul>

      <h2 className="section-title">4. User Responsibilities</h2>
      <p>
        As a user of our services, you agree to:
      </p>
      <ul className="service-list">
        <li>Provide accurate information when creating an account.</li>
        <li>Respect the rights of other users and not engage in fraudulent activities.</li>
        <li>Not share your account credentials with anyone.</li>
      </ul>

      <h2 className="section-title">5. Payment and Refunds</h2>
      <p>
        All transactions are processed securely. By making a purchase, you agree to pay the listed price for the account. Refunds will be processed on a case-by-case basis and are not guaranteed.
      </p>

      <h2 className="section-title">6. Account Security</h2>
      <p>
        Some more ToS & FAQs :
        <ul className="faqs">
          <li>No returns are to be made, once the deal is done.</li>
          <li>All accounts featured on the server are legally bought from their owners on their consent and are not stolen/hacked.</li>
          <li>All the miscellaneous services we provide are all legally purchased.</li>
          <li>All accounts are subject to revoke = refund/replacement till buyer only.</li>
          <li>No Lock Liability Is Given.</li>
          <li>Dealing with us means complying with our ToS.</li>
        </ul>
        Make sure you read everything. A few minutes of yours can help us save a lot of time later.
      </p>

      <h2 className="section-title">7. Limitations of Liability</h2>
      <p>
        Return and Refund Policy:
        <ul className="faqs">
          <li>There is not an option for a refund once an account is purchased.</li>
          <li>A buyer can resale the account to the seller or the dealer at a lower or suggested price.</li>
          <li>In case of a revoke or lock case (only at the buyer's fault), the seller/dealer is liable for a refund or satisfactory replacement.</li>
          <li>Process for refund/replacement can take up to 7 days.</li>
        </ul>
        To know more feel free to contact us.
      </p>

      <h2 className="section-title">8. Changes to the Terms</h2>
      <p>
        We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of the services after changes have been made constitutes your acceptance of the new terms.
      </p>

      <h2 className="section-title">9. Governing Law</h2>
      <p>
        These terms shall be governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising from these terms will be resolved in the courts of [Your Country/State].
      </p>

      <h2 className="section-title">10. Contact Information</h2>
      <p>
        If you have any questions or concerns regarding these terms, please contact us at:
      </p>
      <p>Email: support@valorantidmarketplace.com</p>
      <p>Phone: +1 (123) 456-7890</p>
    </div>
  );
};

export default TermsAndServices;
