// src/pages/Infographics.js
import React, { useState } from 'react';
import styled from 'styled-components';
import infographics from '../data/infographics';

// الأنماط الخاصة بالمكونات
const Container = styled.div`
  padding: 60px 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 32px;
  font-size: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer; /* تغيير شكل المؤشر ليشير الى انه قابل للنقر */
`;

const Body = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  color: #c39e6f;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: #c39e6f;
  }
`;

function Infographics() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <Container>
      <Heading>إنفوجرافيك منظم</Heading>
      <Grid>
        {infographics.map((item) => (
          <Card key={item.id}>
            <Image
              src={item.imageUrl}
              alt={item.title}
              loading="lazy"
              onClick={() => openModal(item.imageUrl)}
            />
            <Body>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </Body>
          </Card>
        ))}
      </Grid>

      {isModalOpen && (
        <Modal onClick={closeModal}>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <ModalImage src={selectedImage} alt="Modal Image" />
        </Modal>
      )}
    </Container>
  );
}

export default Infographics;
