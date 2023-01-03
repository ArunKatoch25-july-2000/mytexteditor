import React from "react";
import Navbar from "./Navbar";
import "../css/contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="main_contact_section">
        <h2>
          Email: <span>akinfo554@gmail.com</span>
        </h2>
        <span>My Social links:</span>
        <div class="social_links">
          <a
            href="https://www.facebook.com/profile.php?id=100005266396367"
            target="_blank"
          >
            <img src="https://img.icons8.com/color/48/null/facebook-new.png" />
          </a>
          <a href="https://github.com/ArunKatoch25-july-2000" target="_blank">
            <img src="https://img.icons8.com/sf-black-filled/48/null/github.png" />
          </a>

          <a
            href="https://www.linkedin.com/in/arun-katoch-885a1419b/"
            target="_blank"
          >
            <img src="https://img.icons8.com/color/48/null/linkedin-circled--v1.png" />
          </a>
          <a href="https://www.instagram.com/a.r.u.n_katoch/" target="_blank">
            <img src="https://img.icons8.com/fluency/48/null/instagram-new.png" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
