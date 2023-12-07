import React from "react";
import Layout from "../components/Layout/Layout";
import "./Contact.css";
import { AiTwotoneShop } from "react-icons/ai";
import { BsFolderSymlinkFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div id="page-header-contact">
        <h2>#Let's_talk</h2>
        <p>LEAVE A MESSAGE.We would love to hear from you</p>
      </div>
      <div id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit our location or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <AiTwotoneShop />
              <p>&nbsp;Kalpavruksha near Morya Gosavi Mandir,Chinchwad Pune</p>
            </li>
            <li>
              <BsFolderSymlinkFill />
              <p>&nbsp;Link of this website</p>
            </li>
            <li>
              <BsFillTelephoneFill />
              <p>&nbsp;phone number</p>
            </li>
            <li>
              <MdAccessTimeFilled />
              <p>&nbsp;Except Wednesday,all days:5.00PM to 11.00PM</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.
      8359746212454!2d73.77690651490032!3d18.626445970788993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
      1!3m3!1m2!1s0x3bc2b9a4e8d2b591%3A0x4ef56ccd20373d98!2sShree%20Moraya%20Gosavi%20Ganpati%20Mandir
      !5e0!3m2!1sen!2sin!4v1668014224989!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div id="form-details" className="section-p1">
        <form action>
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            name
            id
            cols={30}
            rows={10}
            placeholder="Your MESSAGE"
            defaultValue={""}
          />
          <button className="normal">Submit</button>
        </form>
        <div>
          <img src="client/public/icon.jpeg" alt />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
