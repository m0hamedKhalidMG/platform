// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #222;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-top: auto;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;
`;
const LinkStyled = styled.a`
  color: #c39e6f;
  text-decoration: none;
  margin-left: 4px;
`;
function Footer() {
  return (
    <FooterContainer>
      <p>
        © 2025 جميع الحقوق محفوظة - اكتشف العلا
        <LinkStyled
          href="https://vision2030.gov.sa"
          target="_blank"
          rel="noreferrer"
        >
          رؤية السعودية 2030
        </LinkStyled>
      </p>
    </FooterContainer>
  );
}
export default Footer;
