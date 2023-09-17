import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from './container';
import Link from 'next/link';
import { Button } from 'semantic-ui-react';

const Header: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Button class="ui yellow button" onClick={() => changeLanguage('en')}>English</Button>
      <Button class="ui yellow button" onClick={() => changeLanguage('ru')}>Russian</Button>
      {/* Add more language buttons as needed */}
      <Container>
        <nav className="flex space-x-4">
          <Link href="/">About</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/rss.xml">RSS Feed</Link>
        </nav>
      </Container>
    </div>
  );
};

export default Header;