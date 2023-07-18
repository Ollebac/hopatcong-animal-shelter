import '../scss/licensing.scss';

export default function Licensing() {
  return (
    <div className='page_container'>
      <div className='page_header_container'>
        <img src='/images/logo.svg' className='site_logo' alt='Adopt Local Hopatcong Animal Shelter' width={300} />
        <div className='page_header_content'>
          <h1 className='mobile_title'>Pet Licensing</h1>
          <div className='line_break'></div>
          <div className='info_container'>
            <div className='contact_info'>
              <h2>Contact</h2>
              <a href='tel:9737701200'>(973) 770-1200</a>
              <p className='phone_extension'>ext. 114, 136, 140</p>
            </div>
            <img src='/images/badge-rabies.svg' className='badge_rabies' alt='Animal Rabies Tag' width={150} />
            <img src='/images/badge-license.svg' className='badge_license_top' alt='Animal License Tag' width={120} />
          </div>
          <div className='line_break line_break_bottom'></div>
        </div>
      </div>
      <div className='paragraph_container'>
        <div>
          <p className='paragraph_content_licensing'>
            <strong>Licensing:</strong> The Borough of Hopatcong licensing period is from January 1st to December 31st
            of each year. All dogs and cats 7 months or older must be licensed. There will be a late fee of $5.00 for
            each dog license for every month that you are late after January 31st.
          </p>
          <div className='licensing_list_container'>
            <div>
              <li className='licensing_list'>
                <strong>Cat License:</strong>
              </li>
              <li className='licensing_sublist'>Spayed/Neutered: $11.00</li>
              <li className='licensing_sublist'>Not Spayed/Neutered: $13.00 </li>
              <li className='licensing_list'>
                <strong>Dog License:</strong>
              </li>
              <li className='licensing_sublist'>Spayed/Neutered: $11.00</li>
              <li className='licensing_sublist'>Not Spayed/Neutered: $14.00 </li>
            </div>
            <img
              src='/images/badge-license.svg'
              className='badge_license_bottom'
              alt='Animal License Tag'
              width={120}
            />
          </div>
          <p className='paragraph_content_licensing'>
            If renewing by mail, please return the{' '}
            <a href='../../documents/PetApplication2023.pdf' target='_blank' className='link'>
              application
            </a>
            , proof of spay or neuter, and rabies certificate (which shall not expire before October 31st of the
            following year) along with a self-addressed stamped envelope with (2) first class stamps. Make checks
            payable to: The Borough of Hopatcong. If renewing in person, please fill out the{' '}
            <a href='../../documents/PetApplication2023.pdf' target='_blank' className='link'>
              application
            </a>{' '}
            and bring it with you to Borough Hall along with the same documentation as above. Licenses will be issued
            between the hours of 9am and 4pm. Exact change or check only.
          </p>
          <p className='paragraph_content_licensing'>
            <strong>Rabies Vaccine:</strong> State Law requires that rabies vaccinations cover 10 months of the
            licensing year. Therefore, each dog or cat must have a valid rabies vaccination expiring no sooner than
            October 31st of the following year.
          </p>
          <p className='paragraph_content_licensing'>
            A <strong>FREE</strong> Rabies Clinic will be held in the month of May every year. The Borough is currently
            working to move the free rabies clinic to align with the registration and renewal period.
          </p>
          <p className='paragraph_content_licensing'>
            To stay up to date with our Rabies Clinic and other events, follow the Hopatcong Animal Shelter’s official
            <strong>
              {' '}
              <a href='https://www.facebook.com/Hopatconganimalshelter' target='blank' className='link'>
                Facebook
              </a>
            </strong>{' '}
            page.
          </p>
        </div>
      </div>
    </div>
  );
}
