import { useEffect, useState } from 'react';
import '../stylesheets/Home.css';
import base from '../api/base';

import Contact from './Contact';
import Addcontact from './Addcontact';

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    base('Contacts')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setContacts(records);
        fetchNextPage();
      });
  }, []);

  return (
    <div className="Home">
      <h3 className="app-heading mb-5 mt-4 fw-bolder">
        Contact Management Application
      </h3>
      <div>
        <Addcontact />
      </div>
      <div className="row">
          {contacts.length > 0 ? (
              <>
                  {contacts.map((e) => (
                      <div className="contact-card">
                          <Contact key={e.id} contact={e} />
                      </div>
                  ))}
              </>
          ) : (
              <div className="spinner-border mx-auto text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
          )}
      </div>

    </div>
  );
}

export default ContactList;
