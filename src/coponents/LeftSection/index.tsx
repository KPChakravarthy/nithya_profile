import React from 'react';
import { ReactComponent as NithyaAnime} from '../../assets/svgs/nithya_animated.svg'
import { ReactComponent as LinkedIn} from '../../assets/svgs/linkedin.svg'
import { ReactComponent as DownloadIcon} from '../../assets/svgs/download.svg'
import './leftSection.scss'
import ContactCard from './ContactCard';

interface LeftBarProps {
  sectionData: any;
}

const LeftSection = (props: LeftBarProps) => {
  const contactInformation = [
    {
      id: "contact-info-1",
      name: "phone",
    },
    {
      id: "contact-info-2",
      name: "email",
    },
    {
      id: "contact-info-3",
      name: "location",
    },
    {
      id: "contact-info-4",
      name: "dob",
    },
  ]

  return (
    <div className="left-container center-align">
      <p className="animated-image">
        <NithyaAnime />
      </p>
      <h2 className="mt-20">Nithya Aathreya</h2>
      <div className="d-inline-block card small-radius mt-10 title-card">
        <span>UI/UX Designer</span>
      </div>
      <div className="social-links">
        <LinkedIn />
      </div>
      <div className="card contact-information large-radius">
        {
          contactInformation.map(ci => (
            <React.Fragment key={ci.id}>
              <ContactCard contact={ci} data={props.sectionData.contactInfo} />
            </React.Fragment>
          ))
        }
      </div>
      <a href={props.sectionData.resumeLink} target="_blank">
        <button className="primary-btn download-cv">
          <DownloadIcon /> Download CV
        </button>
      </a>
    </div>
  )
}

export default LeftSection;
