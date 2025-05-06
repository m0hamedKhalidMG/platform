// src/pages/Podcasts.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import podcasts from '../data/podcasts';

const PodcastsContainer = styled.div`
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
const Card = styled(motion.div)`
  background: #fff;
  margin-bottom: 24px;
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
const Audio = styled.audio`
  width: 100%;
  margin-bottom: 12px;
`;

function Podcasts() {
  return (
    <PodcastsContainer>
      <Heading
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        بودكاست
      </Heading>
      {podcasts.map((pod, i) => (
        <Card
          key={pod.id}
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Title>{pod.title}</Title>
          <Audio controls src={pod.audioUrl}>
            المتصفح لا يدعم تشغيل الصوت.
          </Audio>
          <Description>{pod.description}</Description>
        </Card>
      ))}
    </PodcastsContainer>
  );
}
export default Podcasts;
