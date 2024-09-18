// src/components/Experience.tsx

import React from 'react';

interface ExperienceProps {
  children: React.ReactNode;  // Sørg for at typen er riktig
}

export default function Experience({ children }: ExperienceProps) {
  return <p>{children}</p>;  // Viser innholdet som sendes inn via children
}
