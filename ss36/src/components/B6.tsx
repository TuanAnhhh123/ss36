import React, { useEffect } from 'react';

const  B6: React.FC = () => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    document.title = `Vị trí cuộn: ${scrollPosition}`;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel 
        turpis nec nulla pharetra aliquam. Nullam vitae vestibulum justo. Integer 

      </p>
    </div>
  );
};

export default B6;
