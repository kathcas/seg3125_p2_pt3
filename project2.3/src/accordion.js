import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleAccordion} style={{ cursor: 'pointer', fontWeight: 'bold', margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
        {title}
        <span>{isOpen ? '▲' : '▼'}</span> {/* Using Unicode characters for the arrows */}
      </div>
      {isOpen && <div style={{ paddingLeft: '20px' }}>{content}</div>}
    </div>
  );
};

export default AccordionItem;