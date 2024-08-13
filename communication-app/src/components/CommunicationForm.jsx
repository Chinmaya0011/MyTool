import React, { useState } from 'react';
import styles from './CommunicationForm.module.css';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const CommunicationForm = () => {
  const [activeSection, setActiveSection] = useState('');

  const showSection = (section) => {
    setActiveSection(section);
  };

  const handleSendWhatsApp = () => {
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Remove non-digit characters and validate the phone number
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
    if (formattedPhoneNumber.length === 10) {
      const whatsappURL = `https://wa.me/91${formattedPhoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
    } else {
      alert('Please enter a valid 10-digit phone number.');
    }
  };

  const handleSendEmail = () => {
    const emailId = document.getElementById('emailId').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const body = document.getElementById('body').value.trim();
    
    if (emailId && subject && body) {
      const mailtoURL = `mailto:${emailId}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoURL;
    } else {
      alert('Please fill out all email fields.');
    }
  };

  const handleCall = () => {
    const phoneNumber = document.getElementById('phoneNumberCall').value.trim();
    
    // Remove non-digit characters and validate the phone number
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
    if (formattedPhoneNumber.length === 10) {
      const telURL = `tel:+91${formattedPhoneNumber}`;
      window.location.href = telURL;
    } else {
      alert('Please enter a valid 10-digit phone number.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Send a Message</h1>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.button} ${styles.whatsappButton}`}
          onClick={() => showSection('whatsapp')}
        >
          <FaWhatsapp /> WhatsApp
        </button>
        <button
          className={`${styles.button} ${styles.emailButton}`}
          onClick={() => showSection('email')}
        >
          <FaEnvelope /> Email
        </button>
        <button
          className={`${styles.button} ${styles.callButton}`}
          onClick={() => showSection('call')}
        >
          <FaPhone /> Call
        </button>
      </div>

      <div className={`${styles.section} ${activeSection === 'whatsapp' ? '' : styles.hidden}`}>
        <input type="text" id="phoneNumber" placeholder="Enter phone number (with country code)" />
        <textarea id="message" placeholder="Enter your message"></textarea>
        <button className={`${styles.actionButton} ${styles.whatsappButton}`} onClick={handleSendWhatsApp}>
          Send WhatsApp Message
        </button>
      </div>

      <div className={`${styles.section} ${activeSection === 'email' ? '' : styles.hidden}`}>
        <input type="email" id="emailId" placeholder="Enter your email address" />
        <input type="text" id="subject" placeholder="Enter the subject" />
        <textarea id="body" placeholder="Enter your message"></textarea>
        <button className={`${styles.actionButton} ${styles.emailButton}`} onClick={handleSendEmail}>
          Send Email
        </button>
      </div>

      <div className={`${styles.section} ${activeSection === 'call' ? '' : styles.hidden}`}>
        <input type="text" id="phoneNumberCall" placeholder="Enter phone number (with country code)" />
        <button className={`${styles.actionButton} ${styles.callButton}`} onClick={handleCall}>
          Call
        </button>
      </div>
    </div>
  );
};

export default CommunicationForm;
