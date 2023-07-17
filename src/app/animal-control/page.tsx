import '../scss/control.scss';
import '../scss/shelter.scss';

export default function AnimalControl() {
  return (
    <div className='page_container'>
      <div className='page_header_container'>
        <img src='/images/logo.svg' className='site_logo' alt='logo' width={300} />
        <div className='page_header_content'>
          <h1 className='mobile_title'>Animal Control</h1>
          <div className='line_break'></div>
          <div className='info_container'>
            <div className='contact_info'>
              <h2>Contact</h2>
              <a href='tel:9733985000'>(973) 398-5000</a>
              <p>
                111 River Styx Road,
                <br />
                Hopatcong, NJ 07843
              </p>
            </div>
            <div className='hours_info'>
              <h2>Hours</h2>
              <p> ON CALL </p>
            </div>
          </div>
          <div className='line_break line_break_bottom'></div>
        </div>
      </div>
      <div className='paragraph_container_control'>
        <div>
          <p className='paragraph_content_control'>
            <strong>Hopatcong Animal Control</strong> is run out of the Hopatcong Police Department and currently
            services the following towns: Hopatcong, Wharton, Mt. Arlington, and Byram.
          </p>
          <li className='control_list'>
            For <strong className='red_text'>emergencies</strong>, please call 911.
          </li>
          <li className='control_list'>
            <strong>
              <i>Residents: </i>
            </strong>
            For non-emergencies, please call the Hopatcong Police Department at{' '}
            <a href='tel:9733985000'>(973) 398-5000</a>.
          </li>
          <li className='control_list'>
            <strong>
              <i>Non-residents: </i>
            </strong>
            For non-emergencies, please call the non-emergency line of your local police department.
          </li>
        </div>
        <img
          src='/images/patch-officer.svg'
          className='patch_img'
          alt='NJ Animal Control Patch'
          width={200}
          height={223}
        />
      </div>
    </div>
  );
}
