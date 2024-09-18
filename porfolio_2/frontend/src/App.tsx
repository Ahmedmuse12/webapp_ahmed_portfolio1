// src/App.tsx

import React from 'react';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import { Header } from './components/Header';
import { Contact } from './components/Contact';

function App() {
  const student = 'Halgeir Geirson';
  const degree = 'Bachelor IT';
  const points = 180;
  const email = 'student@hiof.no';

  return (
    <div>
      <Header student={student} degree={degree} points={points} />
      <Experiences />  {/* Viser erfaringene */}
      <Projects />     {/* Viser prosjektene */}
      <Contact email={email} />  {/* Viser kontaktinfo */}
    </div>
  );
}

export default App;
