import React, { useState, useEffect } from 'react';

const B2: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `Click ${count} lần`;
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <div>
        {count === 0 ? 'Click 0 lần' : `Click ${count} lần`}
        {count > 0 && (
          <button onClick={() => setCount(0)}>X</button>
        )}
      </div>
    </div>
  );
};

export default B2;
