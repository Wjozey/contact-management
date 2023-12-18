import React from 'react';
import base from '../api/base';

function Deletebtn({ contactID }) {
  const deleteContact = () => {
    base('Contacts').destroy(contactID, function (err, deleteContact) {
      if (err) {
        console.error(err);
        return;
      }
      prompt('Deleted record', deleteContact.id);
    });
  };
  return (
    <div className="position-absolute">
      <button onClick={deleteContact} type="button" className="btn btn-outline-danger">
        <i className="bi bi-trash-fill"></i>
      </button>

    </div>
  );
}

export default Deletebtn;
