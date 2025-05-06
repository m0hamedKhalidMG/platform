// src/pages/Manuals.js
import React from 'react';
import styled from 'styled-components';
import manuals from '../data/manuals';

const Container = styled.div`
  padding: 60px 20px;
  max-width: 800px;
  margin: 0 auto;
`;
const Heading = styled.h1`
  text-align: center;
  margin-bottom: 32px;
  font-size: 2rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
`;
const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`;
const Title = styled.h3`
  font-size: 1.25rem;
  color: #c39e6f;
  margin-bottom: 8px;
`;
const Description = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 12px;
`;
const Download = styled.a`
  display: inline-block;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  background: #c39e6f;
  color: #fff;
  text-decoration: none;
  transition: background 0.2s;
  &:hover {
    background: #a67b5b;
  }
`;

function Manuals() {
  return (
    <Container>
      <Heading>الأدلة التفاعلية</Heading>
      <Grid>
        {manuals.map((m) => (
          <Card key={m.id}>
            <Title>{m.title}</Title>
            <Description>{m.description}</Description>
            <Download href={m.fileUrl} target="_blank" rel="noreferrer">
              تحميل
            </Download>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
export default Manuals;
