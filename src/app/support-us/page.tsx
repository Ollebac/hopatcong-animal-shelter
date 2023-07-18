import '../scss/support-us.scss';

export default function Licensing() {
  return (
    <div className='page_container'>
      <div className='page_header_container'>
        <img src='/images/logo.svg' className='site_logo' alt='Adopt Local Hopatcong Animal Shelter' width={300} />
        <div className='page_header_content'>
          <div className='complex_header_outer'>
            <div className='complex_header_inner'>
              <h1 className='mobile_title'>Support Us</h1>
              <img src='/images/giving-hands.svg' className='support_icon' alt='Giving Hands' width={300} />
            </div>
            <img src='/images/animals-color.svg' className='support_icon' alt='Cat ' width={300} />
          </div>
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
          At the <strong>Hopatcong Animal Shelter</strong>, we rely heavily on donations to keep our shelter clean and
          our animals comfortable. If you would like to support us, please consider donating some of our most used items
          (listed below) or donating items via{' '}
          <a href='https://www.amazon.com/hz/wishlist/ls/AYEJ46WBAYBA?ref_=wl_fv_le' className='link' target='_blank'>
            <strong>Amazon</strong>
          </a>{' '}
          or{' '}
          <a href='https://www.chewy.com/g/hopatcong-animal-shelter_b73319191' className='link' target='_blank'>
            <strong>Chewy!</strong>
          </a>
        </p>
      </div>
      <div className='paragraph_container_support'>
        <div className='support_list_container'>
          <p className='needed_items_title'>
            <strong>Most Needed Items:</strong>
          </p>
          <li className='support_list'>Recycled Paper, Original Pellet Cat Litter (Unscented)</li>
          <li className='support_list'>Fresh Step Drawstring Cat Litter Box Liners - Scented (Large)</li>
          <li className='support_list'>Glad OdorShield Tall Kitchen Drawstring Trash Bags</li>
          <li className='support_list'>Purina ONE Tender Selects Blend w/ Real Salmon Dry Cat Food</li>
          <li className='support_list'>Cat Chow Complete Dry Cat Food</li>
        </div>
        <div className='wishlist_links_container'>
          <a
            href='https://www.amazon.com/hz/wishlist/ls/AYEJ46WBAYBA?ref_=wl_fv_le'
            className='wishlist_link'
            target='_blank'
          >
            <img src='/images/amazon.svg' className='wishlist_image' alt='Amazon Wishlist Link' width={300} />
          </a>
          <a
            href='https://www.chewy.com/g/hopatcong-animal-shelter_b73319191'
            className='wishlist_link'
            target='_blank'
          >
            <img src='/images/chewy.svg' className='wishlist_image' alt='Chewy Wishlist Link' width={300} />
          </a>
        </div>
      </div>
    </div>
  );
}
