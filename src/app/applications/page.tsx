import '../scss/applications.scss';

export default function Applications() {
  return (
    <div className='page_container'>
      <div className='page_header_container'>
        <img src='/images/logo.svg' className='site_logo' alt='Adopt Local Hopatcong Animal Shelter' width={300} />
        <div className='applications_outer_header_container'>
          <div className='applications_inner_header_container'>
            <h1 className='mobile_title'>Applications</h1>
            <img src='/images/application.svg' className='application_img' alt='Application' width={100} />
          </div>
          <div className='line_break line_break_applications'></div>
        </div>
      </div>
      <div className='paragraph_container'>
        <p className='paragraph_content_applications'>
          If you are interested in adopting, fostering, or volunteering at the Hopatcong Animal Shelter, please fill out
          the appropriate application below.
        </p>
        <div className='application_links_container'>
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSftlrnDVNUbD_UpPop7I2BUJLO3gB1HvNhmajSeKq3H0tssjw/viewform'
            className='app_link_one'
            target='_blank'
          >
            <button className='application_button'>CAT ADOPTION</button>
          </a>
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLScWm9lsa9ZkyyXVPj7DHi_oN6rZ8ERcgDuoKw4CwaZgDkdqLg/viewform'
            className='app_link_two'
            target='_blank'
          >
            <button className='application_button'>FOSTERING</button>
          </a>
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSfhdYJgc9s3sIvb4YUwnE835QaD4XSXn9PU9OZKl9vb4yJb1g/viewform'
            className='app_link_three'
            target='_blank'
          >
            <button className='application_button'>DOG ADOPTION</button>
          </a>
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSeoYcidWeUKmZdL5PF1L-rtYT8_grg56-oZ5mPfyqyfNQhDwg/viewform'
            className='app_link_four'
            target='_blank'
          >
            <button className='application_button'>VOLUNTEERING</button>
          </a>
          <img src='/images/animals-black.svg' className='app_image' alt='Dog and Cat sitting side by side' />
        </div>
      </div>
    </div>
  );
}
