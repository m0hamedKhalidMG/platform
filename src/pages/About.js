// src/pages/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FiMap,
  FiBarChart2,
  FiUsers,
  FiActivity,
  FiBookOpen,
  FiHeart,
  FiGlobe,
  FiInfo,
} from 'react-icons/fi';
import info from '../data/platformInfo';

const Container = styled.section`
  padding: 60px 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  & > svg {
    margin-left: 8px;
    margin-right: 0;
    font-size: 1.5rem;
    color: #c39e6f;
  }
`;

const Text = styled.p`
  line-height: 1.6;
  margin-bottom: 12px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CardIcon = styled.div`
  font-size: 2rem;
  color: #c39e6f;
  margin-bottom: 8px;
`;

const CardTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
`;

const CardValue = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 20px;
  margin-bottom: 12px;
`;

const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  & > a {
    color: #c39e6f;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 600;
  }
`;

export default function About() {
  return (
    <Container>
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        عن المنصة
      </Title>

      {/* Vision, Mission & Objectives */}
      <Section>
        <SectionHeader>
          <FiInfo /> رؤية ورسالة وأهداف المنصة
        </SectionHeader>
        <Text>
          <strong>الرؤية:</strong> {info.vision}
        </Text>
        <Text>
          <strong>المهمة:</strong> {info.mission}
        </Text>
        <Text>
          <strong>الأهداف:</strong>
        </Text>
        <List>
          {info.objectives.map((obj) => (
            <li key={obj}>{obj}</li>
          ))}
        </List>
      </Section>

      {/* Overview */}
      <Section>
        <SectionHeader>
          <FiMap /> نبذة تعريفية عن المنطقة
        </SectionHeader>
        <Text>{info.overview}</Text>
      </Section>

      {/* Indicators */}
      <Section>
        <SectionHeader>
          <FiBarChart2 /> مؤشرات عن المنطقة
        </SectionHeader>
        <CardGrid>
          {Object.entries(info.indicators).map(([key, val]) => (
            <Card key={key}>
              <CardIcon>
                <FiActivity />
              </CardIcon>
              <CardTitle>{key}</CardTitle>
              <CardValue>{val}</CardValue>
            </Card>
          ))}
        </CardGrid>
      </Section>

      {/* Agriculture */}
      <Section>
        <SectionHeader>
          <FiUsers /> الزراعة
        </SectionHeader>
        <CardGrid>
          <Card>
            <CardIcon>
              <FiUsers />
            </CardIcon>
            <CardTitle>عدد المزارع</CardTitle>
            <CardValue>{info.agriculture.farms}</CardValue>
          </Card>
          <Card>
            <CardIcon>
              <FiActivity />
            </CardIcon>
            <CardTitle>النخيل</CardTitle>
            <CardValue>{info.agriculture.palmTrees.toLocaleString()}</CardValue>
          </Card>
          <Card>
            <CardIcon>
              <FiActivity />
            </CardIcon>
            <CardTitle>أشجار الحمضيات</CardTitle>
            <CardValue>
              {info.agriculture.citrusTrees.toLocaleString()}
            </CardValue>
          </Card>
        </CardGrid>
      </Section>

      {/* Education */}
      <Section>
        <SectionHeader>
          <FiBookOpen /> القطاع التعليمي
        </SectionHeader>
        <CardGrid>
          <Card>
            <CardIcon>
              <FiUsers />
            </CardIcon>
            <CardTitle>طلاب</CardTitle>
            <CardValue>{info.education.students}</CardValue>
          </Card>
          <Card>
            <CardIcon>
              <FiUsers />
            </CardIcon>
            <CardTitle>طالبات</CardTitle>
            <CardValue>{info.education.femaleStudents}</CardValue>
          </Card>
          <Card>
            <CardIcon>
              <FiBookOpen />
            </CardIcon>
            <CardTitle>المعلمين</CardTitle>
            <CardValue>{info.education.teachers}</CardValue>
          </Card>
        </CardGrid>
      </Section>

      {/* Health Sector */}
      <Section>
        <SectionHeader>
          <FiHeart /> القطاع الصحي
        </SectionHeader>
        <CardGrid>
          <Card>
            <CardIcon>
              <FiHeart />
            </CardIcon>
            <CardTitle>كادر طبي</CardTitle>
            <CardValue>{info.healthSector.medicalStaff}</CardValue>
          </Card>
          <Card>
            <CardIcon>
              <FiHeart />
            </CardIcon>
            <CardTitle>كادر فني</CardTitle>
            <CardValue>{info.healthSector.technicalStaff}</CardValue>
          </Card>
        </CardGrid>
      </Section>

      {/* Social & Links */}
      <Section>
        <SectionHeader>
          <FiGlobe /> الشبكات الاجتماعية
        </SectionHeader>
        <LinkList>
          {info.socialLinks.map((link) => (
            <LinkItem key={link.id}>
              <a href={link.url} target="_blank" rel="noreferrer">
                <FiGlobe /> {link.title}
              </a>
            </LinkItem>
          ))}
        </LinkList>
      </Section>

      <Section>
        <SectionHeader>
          <FiBarChart2 /> المدونات والمقالات العلمية
        </SectionHeader>
        <LinkList>
          {info.blogLinks.map((link) => (
            <LinkItem key={link.id}>
              <a href={link.url} target="_blank" rel="noreferrer">
                <FiGlobe /> {link.title}
              </a>
            </LinkItem>
          ))}
          {info.articles.map((link) => (
            <LinkItem key={link.id}>
              <a href={link.url} target="_blank" rel="noreferrer">
                <FiGlobe /> {link.title}
              </a>
            </LinkItem>
          ))}
        </LinkList>
      </Section>

      {/* Vision2030 */}
      <Section>
        <SectionHeader>
          <FiBarChart2 /> متوافق مع
        </SectionHeader>
        <LinkList>
          <LinkItem>
            <a href={info.vision2030Link} target="_blank" rel="noreferrer">
              <FiGlobe /> رؤية المملكة 2030
            </a>
          </LinkItem>
        </LinkList>
      </Section>
    </Container>
  );
}
