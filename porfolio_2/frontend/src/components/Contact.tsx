// src/components/Contact.tsx

import React from 'react';

interface ContactProps {
  email: string;
}

export function Contact({ email }: ContactProps) {
  return (
    <div>
      <p>Contact: {email}</p>
    </div>
  );
}
