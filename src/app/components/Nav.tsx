'use client';

import Link from 'next/link';
import { useState } from 'react';

import '../scss/nav.scss';

export default function Nav() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  return (
    <nav className='nav_menu_container'>
      <div className='social_links_container_mobile'>
        <a className='social_link_container' href='https://www.facebook.com/Hopatconganimalshelter'>
          <img src='/images/logo-facebook.svg' className='social_link' alt='Facebook Logo' width={30} />
        </a>
        <a className='social_link_container' href='https://www.instagram.com/hopatcong_animal_shelter_/'>
          <img src='/images/logo-instagram.svg' className='social_link' alt='Instagram Logo' width={30} />
        </a>
      </div>
      <li className='mobile_menu_button' onClick={() => setMobileMenu(!mobileMenu)}>
        MENU
      </li>
      <div className={`${mobileMenu === true ? 'mobile_menu_active' : 'mobile_menu_inactive'}`}>
        <Link href='/' className='menu_item' onClick={() => setMobileMenu(!mobileMenu)}>
          Animal Shelter
        </Link>
        <Link href='/animal-control' className='menu_item' onClick={() => setMobileMenu(!mobileMenu)}>
          Animal Control
        </Link>
        <Link href='/licensing' className='menu_item' onClick={() => setMobileMenu(!mobileMenu)}>
          Licensing
        </Link>
        <Link href='/applications' className='menu_item' onClick={() => setMobileMenu(!mobileMenu)}>
          Applications
        </Link>
        <button>
          <Link href='/support-us' className='menu_item' onClick={() => setMobileMenu(!mobileMenu)}>
            Support Us
          </Link>
        </button>
      </div>
      <div className='nav_menu_desktop'>
        <div className='social_links_container_desktop'>
          <a className='social_link_container' href='https://www.facebook.com/Hopatconganimalshelter'>
            <img src='/images/logo-facebook.svg' className='social_link' alt='Facebook Logo' width={30} />
          </a>
          <a className='social_link_container' href='https://www.instagram.com/hopatcong_animal_shelter_/'>
            <img src='/images/logo-instagram.svg' className='social_link' alt='Instagram Logo' width={30} />
          </a>
        </div>
        <div>
          <Link href='/' className='menu_item'>
            Animal Shelter
          </Link>
          <Link href='/animal-control' className='menu_item'>
            Animal Control
          </Link>
          <Link href='/licensing' className='menu_item'>
            Licensing
          </Link>
          <Link href='/applications' className='menu_item'>
            Applications
          </Link>
          <button className='menu_item'>
            <Link href='/support-us' className='white'>
              Support Us
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
