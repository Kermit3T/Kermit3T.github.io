import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  background-color: #F6F7F2; // Cultured as main backdrop
  padding: 2rem;
`;

const Title = styled.h2`
  color: #013222; // Dark Green for headings
`;

const ContactInfo = styled.div`
  background-color: #E9EDE4; // Alabaster for contact info background
  padding: 1rem;
  border-radius: 5px;
`;

const ContactItem = styled.p`
  color: #046200; // X11 Dark Green for contact details
`;

function Contact() {
  return (
    <ContactWrapper>
      <Title>Contact</Title>
      <ContactInfo>
        <ContactItem>Email: JohnTong0905@gmail.com</ContactItem>
        <ContactItem>LinkedIn: linkedin.com/in/john-tong0905</ContactItem>
        <ContactItem>GitHub: github.com/Kermit3T</ContactItem>
      </ContactInfo>
    </ContactWrapper>
  );
}

export default Contact;
