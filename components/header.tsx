import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from './container';
import Link from 'next/link';

const Header: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ru')}>Russian</button>
      {/* Add more language buttons as needed */}
      <Container>
        <nav className="flex space-x-4">
          <Link href="/">About</Link>
          <Link href="/posts">Posts</Link>
        </nav>
      </Container>
    </div>
  );
};

export default Header;