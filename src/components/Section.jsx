import React from 'react';

export const Section = ({ children, id, className = '', dark = false }) => {
  return (
    <section
      id={id}
      className={`section ${dark ? 'section-dark' : ''} ${className}`}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};
