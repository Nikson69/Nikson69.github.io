// components/MyComponent.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('hello')}</h1>
      <p>{t('hello')}</p>
    </div>
  );
};

export default HomePage;