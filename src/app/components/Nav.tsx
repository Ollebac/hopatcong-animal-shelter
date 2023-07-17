'use client';

import Link from 'next/link';
import { useState } from 'react';

import '../scss/nav.scss';

export default function Nav() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  return (
    <nav className='nav_menu_container'>
      <li className='mobile_menu_button' onClick={() => setMobileMenu(!mobileMenu)}>
        MENU
      </li>
      <div className={`${mobileMenu === true ? 'mobile_menu_active' : 'mobile_menu_inactive'}`}>
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
          Application
        </Link>
        <button>
          <Link href='/support-us' className='menu_item'>
            Support Us
          </Link>
        </button>
      </div>
      {/* <div className='nav_menu_inner_container'> */}
      <div className='nav_menu_desktop'>
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
          Application
        </Link>
        <button className='menu_item'>
          <Link href='/support-us' className='white'>
            Support Us
          </Link>
        </button>
      </div>
      {/* </div> */}
    </nav>
  );
}
