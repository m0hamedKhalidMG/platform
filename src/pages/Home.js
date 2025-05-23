// src/pages/Home.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FiVideo,
  FiBook,
  FiMic,
  FiMapPin,
  FiBarChart2,
  FiFileText,
  FiInfo,
  FiActivity,
  FiX,
} from 'react-icons/fi';
import { motion } from 'framer-motion';

const features = [
  { to: '/videos', icon: <FiVideo />, label: 'فيديوهات' },
  { to: '/manuals', icon: <FiBook />, label: 'أدلة' },
  { to: '/podcasts', icon: <FiMic />, label: 'بودكاست' },
  { to: '/maps', icon: <FiMapPin />, label: 'خرائط' },
  { to: '/infographics', icon: <FiBarChart2 />, label: 'إنفوجرافيك' },
  { to: '/Manualsc', icon: <FiActivity />, label: 'تجارب المؤثرين ' },

  { to: '/interviews', icon: <FiVideo />, label: 'مقابلات' },
  
  { to: '/about', icon: <FiInfo />, label: 'عن المنصة' },
];

const HeroSection = styled.section`
  background: url('/assets/hero-bg.jpg') center/cover no-repeat;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(236, 217, 196, 0.7);
  }
  color: #2c3e50;
  padding: 80px 20px;
  text-align: center;
  @media (max-width: 480px) {
    padding: 60px 10px;
  }
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: auto;
`;
const HeroTitle = styled(motion.h1)`
  font-size: 2.25rem;
  margin-bottom: 16px;
`;
const HeroSubtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 24px;
`;

const MainButton = styled(Link)`
  background: #c39e6f;
  color: #fff;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  display: inline-block;
  margin-top: 12px;
  transition: background 0.2s;
  &:hover {
    background: #a67b5b;
  }
`;

const MessageBox = styled.div`
  background: #fff8f0;
  color: #2c3e50;
  padding: 30px 20px;
  margin: 40px auto;
  max-width: 800px;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  position: relative;
  text-align: center;
  line-height: 1.8;
  font-size: 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: #2c3e50;
  cursor: pointer;
  &:hover {
    color: #c0392b;
  }
`;

const ContentSection = styled.section`
  padding: 60px 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
`;

const ContentGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 40px;
`;

const ContentCard = styled(Link)`
  width: 220px;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #2c3e50;
  text-decoration: none;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`;

const CardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 12px;
  color: #c39e6f;
`;

const CardLabel = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

function Home() {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>اكتشف العلا بأسلوب جديد</HeroTitle>
          <HeroSubtitle>
            رحلة سهلة لاكتشاف فيديوهات، خرائط، إنفوجرافيك والمزيد.
          </HeroSubtitle>
          <MainButton to="/maps">ابدأ من هنا</MainButton>
        </HeroContent>
      </HeroSection>

      {showMessage && (
        <MessageBox>
          <CloseButton onClick={() => setShowMessage(false)}>
            <FiX />
          </CloseButton>
          <p>
            مرحبًا بك في منصّة اكتشف العلا لاستكشاف محافظة العُلا، جوهرة التاريخ والطبيعة في قلب المملكة.
            <br />
            نأخذك هنا في رحلة فريدة بين حضارات ضاربة في القدم، وتجارب سياحية، وثقافية، وتعليمية، تُمكّنك من رؤية العلا كما لم ترها من قبل.
            <br />
            ابدأ رحلتك الآن، واستعد لاكتشاف كنوز العُلا!
          </p>
        </MessageBox>
      )}

      <ContentSection>
        <SectionTitle>وجهاتنا</SectionTitle>
        <ContentGrid>
          {features.map((f) => (
            <ContentCard key={f.to} to={f.to}>
              <CardIcon>{f.icon}</CardIcon>
              <CardLabel>{f.label}</CardLabel>
            </ContentCard>
          ))}
        </ContentGrid>
      </ContentSection>
    </>
  );
}

export default Home;
