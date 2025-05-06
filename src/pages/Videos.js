// src/pages/Videos.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import videos from '../data/videos';

const VideosContainer = styled.div`
  padding: 60px 20px;
  max-width: 1200px;
  margin: auto;
`;

const Heading = styled(motion.h1)`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 50px;
  color: #2c3e50;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: #000;
`;

const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const Content = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  color: #c39e6f;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 16px;
  flex: 1;
`;

const PlayButton = styled.a`
  align-self: flex-start;
  background: #c39e6f;
  color: #fff;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 600;
  transition: background 0.3s;
  &:hover {
    background: #a67b5b;
  }
`;

export default function Videos() {
  return (
    <VideosContainer>
      <Heading
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        الفيديوهات
      </Heading>
      <Grid>
        {videos.map((vid, i) => (
          <Card
            key={vid.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <ThumbnailWrapper>
              <VideoFrame
                src={vid.videoUrl.replace('watch?v=', 'embed/')}
                title={vid.title}
                allowFullScreen
                loading="lazy"
              />
            </ThumbnailWrapper>
            <Content>
              <Title>{vid.title}</Title>
              <Description>{vid.description}</Description>
              <PlayButton href={vid.videoUrl} target="_blank" rel="noreferrer">
                مشاهدة
              </PlayButton>
            </Content>
          </Card>
        ))}
      </Grid>
    </VideosContainer>
  );
}
