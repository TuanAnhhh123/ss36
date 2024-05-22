import React, { useState } from 'react';
import './Navbar.css'; 

const B3: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <nav>
      <ul>
        <li
          className={activeTab === 'home' ? 'active' : ''}
          onClick={() => handleTabClick('home')}
        >
          Trang chủ
        </li>
        <li
          className={activeTab === 'products' ? 'active' : ''}
          onClick={() => handleTabClick('products')}
        >
          Sản phẩm
        </li>
        <li
          className={activeTab === 'about' ? 'active' : ''}
          onClick={() => handleTabClick('about')}
        >
          Giới thiệu
        </li>
        <li
          className={activeTab === 'contact' ? 'active' : ''}
          onClick={() => handleTabClick('contact')}
        >
          Liên hệ
        </li>
      </ul>
    </nav>
  );
};

export default B3;
