import React from 'react';
import { ReactComponent as PhoneIcon} from '../../assets/svgs/mobile.svg'
import { ReactComponent as EmailIcon} from '../../assets/svgs/email.svg'
import { ReactComponent as CalendarIcon} from '../../assets/svgs/calendar.svg'
import { ReactComponent as LocationIcon} from '../../assets/svgs/location.svg'
import { ContactInformation, GenericObject } from '../../types';

interface ContactCardProps {
  contact: ContactInformation;
  data: GenericObject;
}

const ContactCard = (props: ContactCardProps) => {
  return (
    <div className="card-details d-flex">
      <div className="icon-container small-radius">
        {
          props.contact.name === "phone" ?
          <PhoneIcon /> :
          props.contact.name === "email" ?
          <EmailIcon /> :
          props.contact.name === "location" ?
          <LocationIcon /> :
          props.contact.name === "dob" &&
          <CalendarIcon />
        }
      </div>
      <div className="d-flex info-details">
        <p className="index">{props.contact.name}</p>
        <p className="value">{props.data[props.contact.name]}</p>
      </div>
    </div>
  )
}

export default ContactCard;
