// src/components/Navigation.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaVideo,
  FaBook,
  FaPodcast,
  FaMapMarkedAlt,
  FaPoll,
  FaComments,
  FaChartBar,
  FaInfoCircle,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const NavBar = styled.nav`
  background: #fff;
  padding: 15px 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #c39e6f;
`;
const MobileIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;
const NavItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? '0' : '-100%')};
    width: 250px;
    height: 100%;
    background: #fff;
    flex-direction: column;
    padding-top: 60px;
    transition: right 0.3s;
  }
`;
const NavItem = styled.li`
  a {
    display: flex;
    align-items: center;
    color: #555;
    text-decoration: none;
    font-size: 1rem;
    &:hover {
      color: #c39e6f;
    }
    svg {
      margin-right: 8px;
    }
  }
`;

function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <NavBar>
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <img src="/logo.jpeg" alt="اكتشف العلا" style={{ height: '40px' }} />
    <span>اكتشف العلا</span>
  </Link>
      <MobileIcon onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <NavItems open={open}>
        <NavItem>
          <Link to="/">
            الرئيسية
            <FaHome />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/manuals">
            أدلة
            <FaBook />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/podcasts">
            بودكاست
            <FaPodcast />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/maps">
            خرائط
            <FaMapMarkedAlt />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/surveys">
            استبانات
            <FaPoll />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/interviews">
            مقابلات
            <FaComments />
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/videos">
            فيديوهات
            <FaVideo />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/infographics">
            إنفوجرافيك
            <FaChartBar />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/about">
            عن المنصة
            <FaInfoCircle />
          </Link>
        </NavItem>
      </NavItems>
    </NavBar>
  );
}
export default Navigation;
