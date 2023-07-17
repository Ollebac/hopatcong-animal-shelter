import '../scss/footer.scss';

import Link from 'next/link';

export default function Footer() {
  return (
    <div className='footer_container'>
      {/* <div className='footer_item'> */}
      <h3 className='footer_title'>Pet Licensing</h3>
      <h3 className='footer_title'>Volunteering</h3>
      <h3 className='footer_title'>Supporting</h3>

      <p className='footer_content'>
        All dogs and cats 7 months or older must be licensed. For more information regarding licensing your pets,{' '}
        <Link href='licensing' className='link'>
          click here
        </Link>
        .
      </p>
      {/* </div>
      <div className='footer_item'> */}

      <p className='footer_content'>
        If you would like to volunteer at the Hopatcong Animal shelter, whether its walking a dog or playing with cats,
        please fill out our{' '}
        <Link href='applications' className='link'>
          volunteer application
        </Link>{' '}
        and we’ll get in touch!
      </p>
      {/* </div>
      <div className='footer_item'> */}
      <p className='footer_content'>
        We are always in need of donations to help keep our facility functioning. Please consider{' '}
        <Link href='support-us' className='link'>
          supporting
        </Link>{' '}
        us by donating our wish listed items.
      </p>
      {/* </div> */}
    </div>
  );
}
