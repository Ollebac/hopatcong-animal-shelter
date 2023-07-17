import './scss/not-found.scss';

import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className='blue_bar'></div>
      <div className='error_logo_container'>
        <img src='/images/logo.svg' className='error_logo' alt='Adopt Local Hopatcong Animal Control' width={300} />
      </div>
      <div className='error_page'>
        <img src='/images/dog-eyes-1.jpg' className='error_image' alt='Puppy covering eyes' width={300} />
        <span>
          <h2>OH NO! It looks like you're lost!</h2>
        </span>
        <button className='error_home_button'>
          <h1>
            <Link href='/' className='error_button_text'>
              Take Me Home!
            </Link>
          </h1>
        </button>
      </div>
    </>
  );
}
