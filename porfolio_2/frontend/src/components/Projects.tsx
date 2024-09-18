// src/components/Projects.tsx

import React from 'react';
import Project from './Project';  // Importer Project-komponenten

export default function Projects() {
  const projects = [
    'Project One: Building a React app',
    'Project Two: Designing a website',
    'Project Three: Implementing an API',
    'Project Four: Database Management'
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <Project key={index}>{project}</Project>  // Bruk map for å iterere over prosjektene
      ))}
    </div>
  );
}
