'use client';

import Image from 'next/image';
import Link from 'next/link';

import LoginMenu from './login';
import { Header, Logo, Menu, MenuBar, DropdownContent, Notification } from './style';

const GlobalHeader = () => {
  return (
    <Header>
      <Menu>
        <MenuBar>
          <Image src={`/icon/menu.png`} alt="menu" width={30} height={30} />
          <DropdownContent>
            <Link href="#">메뉴 1</Link>
            <Link href="#">메뉴 2</Link>
            <Link href="#">메뉴 3</Link>
          </DropdownContent>
        </MenuBar>
        <Link href="/" passHref>
          <Logo>
            <Image src={`/icon/logo.png`} alt="DMvelo Logo" width={70} height={20} />
          </Logo>
        </Link>
      </Menu>
      <Menu>
        <Notification>
          <Link href="/notification">
            <Image src={`/icon/notification.png`} alt="notification" width={30} height={30} />
          </Link>
        </Notification>
        <LoginMenu isLogin={false}>
          <Image src={`/icon/user.png`} alt="login" width={30} height={27}></Image>
        </LoginMenu>
      </Menu>
    </Header>
  );
};

export default GlobalHeader;
