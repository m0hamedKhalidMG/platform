// src/pages/Reports.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import reports from '../data/reports';

const ReportsContainer = styled.div`
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
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
`;
const Card = styled(motion.div)`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
const Title = styled.h3`
  margin-bottom: 12px;
  color: #c39e6f;
`;
const Description = styled.p`
  margin-bottom: 16px;
  color: #555;
`;
const Download = styled.a`
  display: inline-block;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 8px;
  background: #c39e6f;
  color: #fff;
  transition: background 0.2s;
  &:hover {
    background: #a67b5b;
  }
`;

function Reports() {
  return (
    <ReportsContainer>
      <Heading
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        التقارير المصورة
      </Heading>
      <Grid>
        {reports.map((report, i) => (
          <Card
            key={report.id}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Title>{report.title}</Title>
            <Description>{report.description}</Description>
            <Download href={report.fileUrl} target="_blank" rel="noreferrer">
              تحميل التقرير
            </Download>
          </Card>
        ))}
      </Grid>
    </ReportsContainer>
  );
}
export default Reports;
