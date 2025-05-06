import React from 'react';
import styled from 'styled-components';
import statistics from '../data/statistics';

const StatisticsContainer = styled.div`
  padding: 40px 20px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const StatCard = styled.div`
  background: #fff;
  margin: 15px;
  padding: 20px;
  border-radius: 8px;
  display: inline-block;
  width: 200px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StatTitle = styled.h3`
  margin-bottom: 10px;
  color: #ff5252;
`;

const StatValue = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const StatDesc = styled.p`
  color: #555;
`;

function Statistics() {
  return (
    <StatisticsContainer>
      <h1>الإحصائيات</h1>
      {statistics.map((stat) => (
        <StatCard key={stat.id}>
          <StatTitle>{stat.title}</StatTitle>
          <StatValue>{stat.value}</StatValue>
          <StatDesc>{stat.description}</StatDesc>
        </StatCard>
      ))}
    </StatisticsContainer>
  );
}

export default Statistics;
