import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white text-gray-800">
      <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">Servgenie Website Privacy Policy</h1>
      <p className="text-center text-gray-600 mb-8">Effective Date: October 20, 2024</p>

      <section className="mb-6">
        <p>
          Servgenie LLC ("Company," "we," or "us") is committed to protecting your privacy. This Privacy Policy outlines how we
          collect, use, disclose, and safeguard your information when you visit our website, <Link className="hover:underline text-blue-500" href='/'>servgenie.co</Link>, or use our
          services. By using our website, you consent to the data practices described in this policy. If you do not agree with
          the terms, please do not access the website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">1. Information We Collect</h2>
        <p>
          We may collect the following types of information:
          <ul className="list-disc list-inside ml-4">
            <li><strong>Contact Information:</strong> When you sign up for our newsletter or create an account, we collect your email address or phone number.</li>
            <li><strong>Other Information:</strong> We may also collect data about how you interact with our website and services, including trends and usage patterns, to improve the user experience.</li>
          </ul>
        </p>
        <p>
          We do not collect personal information unless you voluntarily provide it. You may need to provide personal information
          when you use certain services, such as registering for an account, signing up for promotions, or making purchases.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">2. Use of Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Send you newsletters, updates, and promotional materials about Servgenie.</li>
          <li>Provide you with information, products, or services you request from us.</li>
          <li>Analyze trends and usage to improve our website and app.</li>
          <li>Fulfill customer service requests and provide support.</li>
          <li>Comply with applicable laws and for other legitimate business purposes.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">3. Sharing Information with Third Parties</h2>
        <p>We do not sell, rent, or lease your personal information to third parties.</p>
        <p>We may share your information with trusted partners like Brevo, which helps us manage our email and SMS marketing campaigns. They are obligated to keep your information confidential and only use it to provide the services we request.</p>
        <p>We may also disclose your personal information as required by law or to protect the rights, property, or safety of the Company, its users, or the public.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">4. Your Rights and Choices</h2>
        <p>You have the following choices regarding the collection and use of your information:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Unsubscribe:</strong> You can unsubscribe from our newsletter by clicking the "Unsubscribe" link in our emails or replying STOP to our SMS messages.</li>
          <li><strong>Access and Updates:</strong> You have the right to access or update your information. Contact us at socials@servgenie.co to make such requests.</li>
          <li><strong>Data Deletion:</strong> You may request the deletion of your personal information. We will comply unless the data is needed for legal purposes or to fulfill a contractual obligation.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">5. Security of Your Information</h2>
        <p>We take reasonable measures to secure your personal information. However, please be aware that no security system can guarantee 100% protection against unauthorized access.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">6. Children’s Privacy</h2>
        <p>We do not knowingly collect information from children under 13. If you believe your child has provided us with personal information, please contact us, and we will delete the information promptly.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">7. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy to reflect changes in our practices or relevant laws. We will notify you of significant changes by updating the "Effective Date" at the top of this page or through other appropriate means.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">8. Contact Us</h2>
        <p>If you have any questions, requests, or concerns regarding this Privacy Policy, please contact us at:</p>
        <address className="not-italic">
          Servgenie LLC<br />
          New York 11354<br />
          <span>Email:</span> <a href="mailto:socials@servgenie.co" className="text-blue-600 underline">socials@servgenie.co</a><br />
          <span>Phone:</span> 347-977-3525
        </address>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
