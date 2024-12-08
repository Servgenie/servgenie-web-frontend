import { EFFECTIVE_DATE } from '@/app/legal/common/constants'
import React from 'react'
import H2 from '../H2Legal'

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl bg-white p-6 text-gray-800">
      <h1 className="ps-bulky mb-4 text-center text-2xl font-bold text-blue-700">
        Servgenie Terms of Service
      </h1>
      <p className="mb-8 text-center text-gray-600">Effective Date: {EFFECTIVE_DATE}</p>

      <section className="mb-6">
        <p>
          Welcome to Servgenie (the “Site”), operated by Servgenie LLC (“Servgenie,”
          “we,” or “us”). By accessing or using the Site, you agree to be bound by these Terms of
          Service (the “Terms”). If you do not agree to these Terms, do not proceed.
        </p>
      </section>

      <section className="mb-6">
        <H2>1. Use of the Service</H2>
        <p>
          You may use the Site and associated services (“Service”) only in compliance with these
          Terms and all applicable laws, rules, and regulations. You must be at least 13 years old
          to use the Service. The Site serves as a newsletter subscription platform that keeps users
          updated on the latest news and developments related to the Servgenie app.
        </p>
      </section>

      <section className="mb-6">
        <H2>2. User Information</H2>
        <p>
          To access our Service, you will be required to provide your email address or phone number.
          You agree to provide accurate, current, and complete information during the registration
          process and to update this information as necessary.
        </p>
      </section>

      <section className="mb-6">
        <H2>3. Electronic Communications</H2>
        <p>
          By visiting the Site or sending emails to Servgenie, you consent to receive electronic
          communications. You agree that all notices, disclosures, and other communications provided
          electronically satisfy any legal requirement for written communication.
        </p>
      </section>

      <section className="mb-6">
        <H2>4. Prohibited Activities</H2>
        <ul className="ml-4 list-inside list-disc">
          <li>
            Copying, distributing, or disclosing any part of the Service without authorization.
          </li>
          <li>Using automated systems (e.g., “robots,” “spiders”) to access the Service.</li>
          <li>Transmitting spam or unsolicited communications.</li>
          <li>Attempting to compromise the security or integrity of the Service.</li>
        </ul>
      </section>

      <section className="mb-6">
        <H2>5. Intellectual Property</H2>
        <p>
          All content on the Site, including text, graphics, and logos, is the property of Servgenie
          or its content suppliers and protected by copyright and other intellectual property laws.
          You may not modify, publish, or exploit any content without prior written permission from
          Servgenie.
        </p>
      </section>

      <section className="mb-6">
        <H2>6. Limitation of Liability</H2>
        <p>
          To the maximum extent permitted by law, Servgenie and its affiliates will not be liable
          for any indirect, incidental, special, consequential, or punitive damages, including loss
          of profits, data, or goodwill, arising from:
        </p>
        <ul className="ml-4 list-inside list-disc">
          <li>Your use or inability to use the Service.</li>
          <li>Unauthorized access to our servers or any stored personal data.</li>
          <li>Any interruption of transmission to or from the Service.</li>
          <li>Bugs, viruses, or malicious code transmitted by third parties.</li>
        </ul>
      </section>

      <section className="mb-6">
        <H2>7. Termination</H2>
        <p>
          We reserve the right to suspend or terminate your access to the Service, at our
          discretion, without prior notice, for any violation of these Terms.
        </p>
      </section>

      <section className="mb-6">
        <H2>8. Governing Law</H2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the State of
          New York, without regard to conflict of law principles. You consent to the exclusive
          jurisdiction of courts located in New York.
        </p>
      </section>

      <section className="mb-6">
        <H2>
          9. Arbitration and Class Action Waiver
        </H2>
        <p>
          All disputes arising under these Terms will be resolved by binding arbitration pursuant to
          the Federal Arbitration Act. Arbitration will be conducted by a neutral arbitrator and
          administered by the American Arbitration Association. Class actions are not permitted, and
          you may only bring claims on an individual basis.
        </p>
      </section>

      <section className="mb-6">
        <H2>10. Changes to Terms</H2>
        <p>
          Servgenie reserves the right to modify these Terms at any time. If we make material
          changes, we will provide at least 30 days' notice. Your continued use of the Service after
          changes have been made constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section className="mb-6">
        <H2>11. Contact Us</H2>
        <p>If you have any questions or comments regarding these Terms, please contact us at:</p>
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

      <section className="mb-6">
        <H2>Privacy</H2>
        <p>
          Your use of the Site is also governed by our Privacy Policy, which details how we collect
          and use your data.
        </p>
      </section>

      <section className="mb-6">
        <H2>Children Under Thirteen</H2>
        <p>
          We do not knowingly collect personal information from individuals under 13. If you are
          under 18, you may only use the Service with parental consent.
        </p>
      </section>

      <section className="mb-6">
        <H2>Links to Third-Party Sites</H2>
        <p>
          Our Site may contain links to third-party websites. We do not endorse and are not
          responsible for the content or practices of linked sites.
        </p>
      </section>

      <p className="mt-12 mb-16 text-center">Thank you for using Servgenie.</p>
    </section>
  )
}
