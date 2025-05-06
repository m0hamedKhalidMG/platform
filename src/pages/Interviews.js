// src/pages/Interviews.js
import React from 'react';
import styled from 'styled-components';
import interviews from '../data/interviews';

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
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`;
const Frame = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
`;
const Body = styled.div`
  padding: 16px;
`;
const Title = styled.h3`
  font-size: 1.5rem;
  color: #c39e6f;
  margin-bottom: 8px;
`;
const Description = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

function Interviews() {
  return (
    <Container>
      <Heading>مقابلاتنا</Heading>
      <List>
        {interviews.map((i) => (
          <Card key={i.id}>
            <Frame
              src={i.videoUrl}
              title={i.title}
              allowFullScreen
              loading="lazy"
            />
            <Body>
              <Title>{i.title}</Title>
              <Description>{i.description}</Description>
            </Body>
          </Card>
        ))}
      </List>
    </Container>
  );
}
export default Interviews;
