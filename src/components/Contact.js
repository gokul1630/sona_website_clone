import React from 'react'
import { Link } from 'react-router-dom'
import contactList from '../data/ContactList'
import emailList from '../data/EmailList'
import ContactModel from './contact_us/ContactModel'
import Footer from './Home/Footer'

function Contact(props) {
  return (
    <div className="container-fluid">
      <img
        className="img-fluid"
        src="https://raw.githubusercontent.com/gokul1630/sona_website_clone/main/src/assets/images/HeaderImages/contact-sona.jpg"
        alt="contact-us-sona"
      />
      <div className="bottom-nav">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">Contact Us</li>
        </ol>
      </div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Office
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#emails"
            type="button"
            role="tab"
            aria-controls="emails"
            aria-selected="false"
          >
            Email Id
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contacts"
            type="button"
            role="tab"
            aria-controls="contacts"
            aria-selected="false"
          >
            Contacts
          </button>
        </li>
      </ul>
      <div className="tab-content" id="TabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <h2 id={'contact-us-txt'}>Contact Us</h2>
          <p className={'address-txt'}>
            <strong>Sona College of Technology ,</strong>
            <br />
            Junction Main Road,
            <br />
            Salem - 636 005, Tamilnadu, India.
            <br />
            Phone: 91-427-4099999
            <br />
            Fax: 91-427-4099888.
            <br />
            E-mail Id: info@sonatech.ac.in
          </p>
          <h2 id={'contact-us-txt'}>Bangalore Office :</h2>
          <p className={'address-txt'}>
            Sona Towers, 71 Millers Road, Bangalore - 560 052.
            <br />
            Karnataka, India.
            <br />
            Tel. +91-802228 1131, Fax. +91-80-2225 2350
          </p>
        </div>
        <div
          className="tab-pane fade"
          id="emails"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <table className={'table table-bordered'}>
            <thead>
              <tr>
                <th>NAME</th>
                <th>E-Mail Id</th>
              </tr>
            </thead>
            <tbody>
              {emailList.map((data) => (
                <ContactModel
                  name={data.name}
                  contact={data.mail}
                  key={data.name}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="tab-pane fade"
          id="contacts"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <h2 id={'contact-us-txt'}>Contact Us</h2>
          <p className={'address-txt'}>
            Reception No. : +91 427 4099999
            <br />
            Direct Number : +91 427 - 4099
          </p>
          <table className={'table table-bordered'}>
            <thead>
              <tr>
                <th>Name</th>
                <th> Ext.No.</th>
              </tr>
            </thead>
            <tbody>
              {contactList.map((data) => (
                <ContactModel
                  name={data.name}
                  contact={data.contact}
                  key={data.name}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  )
}

export default Contact
