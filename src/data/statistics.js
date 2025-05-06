// src/pages/Statistics.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import statistics from '../data/statistics';

const StatisticsContainer = styled.div`
  padding: 60px 20px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;
const HeadingStats = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #2c3e50;
`;
const GridStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;
const StatCard = styled(motion.div)`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  width: 200px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
const StatTitle = styled.h3`
  margin-bottom: 8px;
  color: #c39e6f;
`;
const StatValue = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 4px;
`;
const StatDesc = styled.p`
  color: #555;
  font-size: 0.9rem;
`;

function Statistics() {
  return (
    <StatisticsContainer>
      <HeadingStats
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        الإحصائيات
      </HeadingStats>
      <GridStats>
        {statistics.map((stat, i) => (
          <StatCard
            key={stat.id}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <StatTitle>{stat.title}</StatTitle>
            <StatValue>{stat.value}</StatValue>
            <StatDesc>{stat.description}</StatDesc>
          </StatCard>
        ))}
      </GridStats>
    </StatisticsContainer>
  );
}
export default Statistics;
