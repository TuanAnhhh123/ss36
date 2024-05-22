import React, { useState, useEffect, ChangeEvent } from 'react';

const B1: React.FC = () => {
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'Nhập tiêu đề';
    }
  }, [title]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập tiêu đề"
        value={title}
        onChange={handleChange}
      />
      {title ? (
        <div>
          Tiêu đề...
          <button onClick={() => setTitle('')}>X</button>
        </div>
      ) : (
        <div>Nhập tiêu đề</div>
      )}
    </div>
  );
};

export default B1;
