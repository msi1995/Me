import "./contact.css";
import { useState } from "react";
import emailSuccess from "../../gifs/email1loopcropped.gif";

// import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import Phone from "../../images/Phone.png";
import Email from "../../images/email.png";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formWasSubmitted, SetFormWasSubmitted] = useState(false);
  const formRef = useRef();

  function formSubmitted(e) {
    e.preventDefault();
    if (
      e.target["name"].value === "" ||
      e.target["subject"].value === "" ||
      e.target["email"].value === "" ||
      e.target["msg"].value === ""
    ) {
      alert("Please fill out the form completely.");
      return -1;
    }
    SetFormWasSubmitted(true);

    emailjs
      .sendForm(
        "service_ebmh8hb",
        "template_9izfnzj",
        formRef.current,
        "jH27kSqIiUkbPafAF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="main-container">
      <div className="c-bg" />
      <div className="c">
        <div className="c-bg" />
        <div className="c-wrapper">
          <div className="c-left">
            <h1 id="contact" className="c-title">
              Do you want to talk? Hate my color scheme? Let me know:
            </h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="text" className="c-icon" />
                661-916-2753
              </div>
              <div className="c-info-item">
                <img src={Email} alt="text" className="c-icon" />
                lloyd.dg7@gmail.com
              </div>
            </div>
          </div>
          <div className="c-right">
            {!formWasSubmitted ? (
              <div>
                <p className="c-desc">
                  <b className="desc-bold">
                    I'm always interested in great opportunities!
                  </b>
                  <br></br>
                  <br></br>
                  If you have questions, comments, or an opportunity, please
                  don't hesitate to fill out the form below.
                </p>
                <form ref={formRef} onSubmit={formSubmitted}>
                  <input
                    id="name"
                    type="text"
                    placeholder="Who are you?"
                    name="user_name"
                  />
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    name="user_subject"
                  />
                  <input
                    id="email"
                    type="text"
                    placeholder="Email Address"
                    name="user_email"
                  />
                  <textarea
                    id="msg"
                    rows="6"
                    placeholder="What's the secret?"
                    name="message"
                  />
                  <br></br>
                  <button>Submit</button>

                  {/* this might fix issue with slow load on image */}
                  <img
                    src={emailSuccess}
                    alt="Email sent, thanks!"
                    style={{ display: "none" }}
                  />
                </form>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: "24px" }}>
                  Thanks! I'll get back to you soon.
                </span>
                <img
                  src={emailSuccess}
                  alt="Email sent, thanks!"
                  style={{ display: "inline", width: "350px" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="c-bottom"></div>
    </div>
  );
}

export default Contact;
