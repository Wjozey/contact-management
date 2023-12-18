import React from 'react';
import Deletebtn from './Deletebtn';

function Contact({ contact }) {
  const contactID = contact.id;
  return (
    <div className="col-md-4">
      <div className="card homeCards mb-4">
        <div className="card-header d-flex flex-column position-relative justify-content-center">
          <h4 className="fw-bold">{contact.fields.Name}</h4>
          {contact.fields.Title}
          <Deletebtn contactID={contactID} />
        </div>
        <div className="card-body">
          <div className="d-flex flex-column justify-content-center">
            <span>
              <i className="bi bi-phone-fill me-2"></i>
              {contact.fields.Phone}
            </span>
            <span>
              <i className="bi bi-envelope-fill me-2"></i>
              {contact.fields.Email}
            </span>
          </div>
          <p className="card-text">Date: {contact.fields.Started}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
