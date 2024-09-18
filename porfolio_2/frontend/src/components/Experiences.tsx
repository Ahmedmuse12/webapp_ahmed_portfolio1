// src/components/Experiences.tsx

import React from 'react';
import Experience from './Experience';  // Importer Experience-komponenten

export default function Experiences() {
  const experiences = [
    'Figma UI for customer X',
    'Website for customer Y',
    'Other experience...'
  ];

  return (
    <div>
      {experiences.map((experience, index) => (
        <Experience key={index}>{experience}</Experience>  // Bruk map for å iterere over erfaringene
      ))}
    </div>
  );
}
