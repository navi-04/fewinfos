import React from 'react';
import './taskrelay.css';

const TaskRelayPrivacy = () => {
  return (
    <div className="taskrelay-page">
      <section className="taskrelay-hero">
        <div className="taskrelay-hero-content">
          <h1>Privacy Policy for TaskRelay</h1>
          <p>Last Updated: February 21, 2026</p>
        </div>
      </section>

      <section className="taskrelay-content">
        <div className="taskrelay-container">
          <div className="taskrelay-text">
            <h2>1. Introduction</h2>
            <p>
              TaskRelay ("we", "our", or "the app") respects your privacy. This Privacy Policy explains how TaskRelay handles user information.
            </p>
            <p>
              TaskRelay is designed to function completely offline and does not collect, store, or share any personal data.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We do NOT collect any personal information.</p>
            <p>TaskRelay:</p>
            <ul>
              <li>Does not collect your name, email, phone number, or location.</li>
              <li>Does not track usage analytics.</li>
              <li>Does not collect device information.</li>
              <li>Does not use cookies.</li>
              <li>Does not access the internet.</li>
            </ul>

            <h2>3. Local Storage</h2>
            <p>
              TaskRelay stores task-related data only on your device using local storage.
            </p>
            <ul>
              <li>All data remains on your device.</li>
              <li>We do not have access to your data.</li>
              <li>Data is not transmitted to any server.</li>
              <li>If you uninstall the app, all stored data will be permanently deleted from your device.</li>
            </ul>

            <h2>4. Permissions</h2>
            <p>
              TaskRelay may request basic storage access solely to save and manage tasks locally on your device.
            </p>
            <p>The app does not access:</p>
            <ul>
              <li>Camera</li>
              <li>Microphone</li>
              <li>Contacts</li>
              <li>Location</li>
              <li>Internet</li>
            </ul>

            <h2>5. Third-Party Services</h2>
            <p>TaskRelay does not use:</p>
            <ul>
              <li>Third-party analytics tools</li>
              <li>Advertising networks</li>
              <li>Cloud storage services</li>
              <li>External APIs</li>
            </ul>

            <h2>6. Children's Privacy</h2>
            <p>
              TaskRelay does not knowingly collect personal information from children or any users. Since no data collection occurs, the app is safe for general audiences.
            </p>

            <h2>7. Data Security</h2>
            <p>
              Because TaskRelay operates fully offline and does not transmit data, your information remains under your control on your device.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy if the app's functionality changes. Any updates will be reflected with a revised "Last Updated" date.
            </p>

            <h2>9. Contact Information</h2>
            <p>
              If you have any questions regarding this Privacy Policy, you may contact:
            </p>
            <ul>
              <li>App Name: TaskRelay</li>
              <li>Developer: Naveenraj Thiyagarajan</li>
              <li>Email: naveenrajthiyagarajan6@gmail.com</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskRelayPrivacy;
