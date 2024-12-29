import { EFFECTIVE_DATE } from '@/app/legal/common/constants';
import Link from 'next/link';
import React from 'react';
import H2 from '../H2Legal';

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-6 text-gray-800">
      <h1 className="ps-bulky mb-4 text-center text-2xl font-bold text-blue-700">
        Servgenie Privacy Policy
      </h1>
      <p className="mb-8 text-center text-gray-600">Effective Date: {EFFECTIVE_DATE}</p>

      <section className="mb-6">
        <p className="mt-4">
          Servgenie LLC ("Company," "we," or "us") is committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, disclose, and safeguard your information when
          you visit our website,{' '}
          <Link className="text-blue-500 hover:underline" href="/">
            servgenie.co
          </Link>
          , or use our services. By using our website, you consent to the data practices described
          in this policy. If you do not agree with the terms, please do not access the website.
        </p>
      </section>

      <section className="mb-6">
        <H2>1. Information We Collect</H2>
        <p className="mt-4">
          We may collect the following types of information:
          <ul className="ml-4 list-inside list-disc">
            <li>
              <strong>Contact Information:</strong> When you sign up for our newsletter or create an
              account, we collect your email address or phone number.
            </li>
            <li>
              <strong>Other Information:</strong> We may also collect data about how you interact
              with our website and services, including trends and usage patterns, to improve the
              user experience.
            </li>
          </ul>
        </p>
        <p className="mt-4">
          We do not collect personal information unless you voluntarily provide it. You may need to
          provide personal information when you use certain services, such as registering for an
          account, signing up for promotions, or making purchases.
        </p>
      </section>

      <section className="mb-6">
        <H2>2. Use of Your Information</H2>
        <p className="mt-4">We use the information we collect to:</p>
        <ul className="ml-4 list-inside list-disc">
          <li>Send you newsletters, updates, and promotional materials about Servgenie.</li>
          <li>Provide you with information, products, or services you request from us.</li>
          <li>Analyze trends and usage to improve our website and app.</li>
          <li>Fulfill customer service requests and provide support.</li>
          <li>Comply with applicable laws and for other legitimate business purposes.</li>
        </ul>
      </section>

      <section className="mb-6">
        <H2>3. Sharing Information with Third Parties</H2>
        <p className="mt-4">
          We do not sell, rent, or lease your personal information to third parties.
        </p>
        <p className="mt-4">
          We may share your information with trusted partners like Brevo, which helps us manage our
          email and SMS marketing campaigns. They are obligated to keep your information
          confidential and only use it to provide the services we request.
        </p>
        <p className="mt-4">
          We may also disclose your personal information as required by law or to protect the
          rights, property, or safety of the Company, its users, or the public.
        </p>
      </section>

      <section className="mb-6">
        <H2>4. Your Rights and Choices</H2>
        <p className="mt-4">
          You have the following choices regarding the collection and use of your information:
        </p>
        <ul className="ml-4 list-inside list-disc">
          <li>
            <strong>Unsubscribe:</strong> You can unsubscribe from our newsletter by clicking the
            "Unsubscribe" link in our emails or replying STOP to our SMS messages.
          </li>
          <li>
            <strong>Access and Updates:</strong> You have the right to access or update your
            information. Contact us at socials@servgenie.co to make such requests.
          </li>
          <li>
            <strong>Data Deletion:</strong> You may request the deletion of your personal
            information. We will comply unless the data is needed for legal purposes or to fulfill a
            contractual obligation.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <H2>5. Security of Your Information</H2>
        <p className="mt-4">
          We take reasonable measures to secure your personal information. However, please be aware
          that no security system can guarantee 100% protection against unauthorized access.
        </p>
      </section>

      <section className="mb-6">
        <H2>6. Children’s Privacy</H2>
        <p className="mt-4">
          We do not knowingly collect information from children under 13. If you believe your child
          has provided us with personal information, please contact us, and we will delete the
          information promptly.
        </p>
      </section>

      <section className="mb-6">
        <H2>7. Changes to This Privacy Policy</H2>
        <p className="mt-4">
          We may update this Privacy Policy to reflect changes in our practices or relevant laws. We
          will notify you of significant changes by updating the "Effective Date" at the top of this
          page or through other appropriate means.
        </p>
      </section>

      <section className="mb-6">
        <H2>8. Contact Us</H2>
        <p className="mt-4">
          If you have any questions, requests, or concerns regarding this Privacy Policy, please
          contact us at:
        </p>
        <address className="mt-4 not-italic">
          Servgenie LLC
          <br />
          New York 11354
          <br />
          <span>Email:</span>{' '}
          <a href="mailto:socials@servgenie.co" className="text-blue-600 underline">
            socials@servgenie.co
          </a>
          <br />
          <span>Phone:</span> 347-977-3525
        </address>
      </section>
    </div>
  );
}
