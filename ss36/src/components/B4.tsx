import React, { useEffect, useRef } from 'react';

const B4: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus vào ô này" />
    </div>
  );
};

export default B4;
