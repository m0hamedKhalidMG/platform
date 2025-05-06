// src/pages/Maps.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Styled Components
const Section = styled.section`
  padding: 80px 20px;
  width: 100%;
`;
const Heading = styled(motion.h1)`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 40px;
  color: #2c3e50;
`;
const MapWrapper = styled.div`
  height: 500px;
  max-width: 1000px;
  margin: 0 auto 40px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
`;
const LinkWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;
const TourLink = styled.a`
  display: inline-block;
  background: #c39e6f;
  color: #fff;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  transition: background 0.3s;
  &:hover {
    background: #a67b5b;
  }
`;

// Map markers for AlUla
const markers = [
  { id: 'hegra', title: 'مدائن صالح', position: [26.7965, 37.9741] },
  { id: 'elephant-rock', title: 'صخرة الفيل', position: [26.7341, 36.8649] },
  { id: 'maraya', title: 'مرآة العلا', position: [26.7156, 36.4211] },
  { id: 'jabal-ikmah', title: 'جبل إيقمة', position: [26.7353, 36.5072] },
];

export default function Maps() {
  return (
    <Section>
      <Heading
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        خرائط تفاعلية لمدينة العلا
      </Heading>

      <MapWrapper>
        <MapContainer
          center={[26.75, 36.6]}
          zoom={11}
          scrollWheelZoom
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {markers.map((m) => (
            <Marker key={m.id} position={m.position}>
              <Popup>{m.title}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </MapWrapper>

      <LinkWrapper>
        <TourLink
          href="https://360riyadh.com/360/3dtour/Al%20Ula/tour.html"
          target="_blank"
          rel="noreferrer"
        >
          افتح الجولة ثلاثية الأبعاد في علامة تبويب جديدة
        </TourLink>
      </LinkWrapper>
    </Section>
  );
}
