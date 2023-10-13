import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from '../public/styles/header.module.scss';
import { Icon } from 'semantic-ui-react'
import { Button, MenuItemProps, Dropdown, Menu } from 'semantic-ui-react';
import { getActiveItemFromPath } from '../utils/location';
import { useRouter } from 'next/router';
import { useWindowSize } from '../utils/hooks/useWindowSize';
export const activeItemAbout = 'about';
export const activeItemPosts = 'posts';

const Header: React.FC = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  
  const activeItem = getActiveItemFromPath();
  const winSize = useWindowSize();
  const minWidthSize = winSize.width < 360;

  return (
    <Menu vertical={minWidthSize} className={style.menu}>
        <Menu.Item
          onClick={() => router.push('/')}
          className={style.icon}
        >
          <Icon name='home' />
        </Menu.Item>
        <Menu.Item
          name={activeItemAbout}
          active={activeItem === activeItemAbout}
          onClick={() => router.push('/')}
        />
        <Menu.Item
          name={activeItemPosts}
          active={activeItem === activeItemPosts}
          onClick={() => router.push('/posts')}
        />
        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => changeLanguage('en')}>English</Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage('ru')}>Russian</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
  );
};

export default Header;