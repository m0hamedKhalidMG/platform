// src/pages/OtherContent.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import other from '../data/other';

const OtherContainer = styled.div`
  padding: 60px 20px;
  max-width: 900px;
  margin: 0 auto;
`;
const Heading = styled(motion.h1)`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: #2c3e50;
`;
const Section = styled.div`
  margin-bottom: 40px;
`;
const SectionTitle = styled.h2`
  color: #c39e6f;
  margin-bottom: 16px;
  font-size: 1.5rem;
`;
const Text = styled.p`
  color: #555;
  margin-bottom: 12px;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const Item = styled.li`
  margin-bottom: 8px;
  color: #555;
`;
const ExternalLink = styled.a`
  color: #c39e6f;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
const Logo = styled.img`
  width: 180px;
  display: block;
  margin: 0 auto 20px;
`;

function OtherContent() {
  return (
    <OtherContainer>
      <Heading
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        محتويات أخرى
      </Heading>
      <Section>
        <SectionTitle>الشعار</SectionTitle>
        <Logo src={other.logo} alt="شعار المنصة" loading="lazy" />
      </Section>
      <Section>
        <SectionTitle>رسالة ترحيبية</SectionTitle>
        <Text>{other.welcomeMessage}</Text>
      </Section>
      <Section>
        <SectionTitle>الرؤية والمهمة</SectionTitle>
        <Text>
          <strong>الرؤية:</strong> {other.vision}
        </Text>
        <Text>
          <strong>المهمة:</strong> {other.mission}
        </Text>
      </Section>
      <Section>
        <SectionTitle>الأهداف</SectionTitle>
        <List>
          {other.objectives.map((obj, idx) => (
            <Item key={idx}>{obj}</Item>
          ))}
        </List>
      </Section>
      <Section>
        <SectionTitle>مبادرات مستقبلية</SectionTitle>
        <List>
          {other.initiatives.map((init, idx) => (
            <Item key={idx}>{init}</Item>
          ))}
        </List>
      </Section>
      <Section>
        <SectionTitle>روابط إلكترونية</SectionTitle>
        <List>
          {other.externalLinks.map((link) => (
            <Item key={link.id}>
              <ExternalLink href={link.url} target="_blank" rel="noreferrer">
                {link.title}
              </ExternalLink>
            </Item>
          ))}
        </List>
      </Section>
      <Section>
        <SectionTitle>مقالات ومحتوى ثقافي</SectionTitle>
        <List>
          {other.articles.map((article) => (
            <Item key={article.id}>
              <ExternalLink href={article.url} target="_blank" rel="noreferrer">
                {article.title}
              </ExternalLink>
            </Item>
          ))}
        </List>
      </Section>
    </OtherContainer>
  );
}
export default OtherContent;
