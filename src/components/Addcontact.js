import React, { useRef } from 'react';
import base from '../api/base';

function AddContact() {
  const nameRef = useRef();
  const positionRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const dateRef = useRef();

  const addContact = (e) => {
    e.preventDefault();
    const Name = nameRef.current.value;
    const Title = positionRef.current.value;
    const Email = emailRef.current.value;
    const Phone = numberRef.current.value;
    const Started = dateRef.current.value;
    base('Contacts').create(
      { Name, Title, Email, Phone, Started },
      function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        prompt(record.getId());
      }
    );
  };
  return (
    <div className="mt-5 card p-5 form-add">
      <h4 className="mb-5">Add Contacts</h4>
      <form>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label text-start d-block"
          >
            Contact Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
            ref={nameRef}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label text-start d-block"
          >
            Relationship
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleTitle"
            ref={positionRef}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label text-start d-block"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={emailRef}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label text-start d-block"
          >
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputNumber"
            ref={numberRef}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label text-start d-block"
          >
            Added Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleDate"
            ref={dateRef}
          />
        </div>
        <button
          type="submit"
          onClick={addContact}
          className="mt-4 btn btn-primary d-block"
        >
          Add New Contacts
        </button>
      </form>
    </div>
  );
}

export default AddContact;
