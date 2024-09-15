import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #004D14; // Traditional Forest Green for footer background
  color: #F6F7F2; // Cultured for text color
  padding: 1rem 2rem;
  text-align: center;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; {new Date().getFullYear()} Tat Thang Tong. All rights reserved.</p>
    </FooterWrapper>
  );
}

export default Footer;
