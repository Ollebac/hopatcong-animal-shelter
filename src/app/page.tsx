import Image from 'next/image';
import Link from 'next/link';

import './scss/shelter.scss';

export default function Home() {
  return (
    <div className='page_container'>
      <div className='page_header_container'>
        <img src='/images/logo.svg' className='site_logo' alt='logo' width={300} />
        <div className='page_header_content'>
          <h1 className='mobile_title'>Animal Shelter</h1>
          <div className='line_break'></div>
          <div className='info_container'>
            <div className='contact_info'>
              <h2>Contact</h2>
              <a href='tel:9736013847'>(973) 601-3847</a>
              <p>
                {' '}
                332 Durban Ave,
                <br />
                Hopatcong, NJ 07843{' '}
              </p>
            </div>
            <div className='hours_info'>
              <h2>Hours</h2>
              <p> Mon - Sat: 9:00am - 12:00pm </p>
              <p> Sun: CLOSED </p>
            </div>
          </div>
          <div className='line_break line_break_bottom'></div>
        </div>
      </div>
      <div className='paragraph_container'>
        <p className='paragraph_content'>
          At the <strong>Hopatcong Animal Shelter</strong>, we are committed to keeping pets safe, happy, and healthy
          while they wait to be placed in a “furever” home. Located at the corner of Durban Avenue and Flora Avenue in
          Hopatcong, NJ, the <strong>Hopatcong Animal Shelter</strong> is run by Gianna DiMateo, HLEO, and stands as a
          place for misplaced animals of Hopatcong to transition to their new home.
        </p>
        <p className='paragraph_content'>
          If you are looking for a pet and want to become a "furever" home, please call our number above. The adoption
          procedure is very easy and convenient. Prior to calling, please fill out the appropriate{' '}
          <Link href='/applications' className='link'>
            application
          </Link>
          . If you would like to see any animals currently in our care, feel free to come by during our regular hours;
          no appointment is necessary! If you are looking to adopt but our regular ours are not convenient, you may call
          to set up an appointment.
        </p>
        <p className='paragraph_content' id='surrenders_text'>
          <strong>Regarding Surrenders:</strong> If you have an animal to surrender, you MUST call us before you drop
          off your pet.
        </p>
      </div>
    </div>
  );
}
