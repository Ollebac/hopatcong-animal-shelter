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
          <button className='app_link_one application_button'>CAT ADOPTION</button>
          <button className='app_link_two application_button'>FOSTERING</button>
          <button className='app_link_three application_button'>DOG ADOPTION</button>
          <button className='app_link_four application_button'>VOLUNTEERING</button>
          <img src='/images/animals-black.svg' className='app_image' alt='Dog and Cat sitting side by side' />
        </div>
      </div>
    </div>
  );
}
