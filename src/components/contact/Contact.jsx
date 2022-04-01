import "./contact.css"

// import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import Phone from '../../images/Phone.png';
import Email from '../../images/email.png';
import { useRef } from "react";
import emailjs from 'emailjs-com'


function Contact(){

    const formRef = useRef();

    function formSubmitted(e){
        e.preventDefault();
        emailjs.sendForm("service_ebmh8hb", 
        "template_9izfnzj", 
        formRef.current, 
        "jH27kSqIiUkbPafAF")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


    return(
        <div className="main-container">
            <div className="c">
                <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 id="contact" className="c-title">Do you want to talk? Hate my color scheme? Let me know:</h1>
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
                    <p className="c-desc">
                        <b className="desc-bold">I'm always interested in great opportunities!</b>
                        <br></br>
                        <br></br>
                         If you have questions, comments,
                        or an opportunity, please don't hesitate to fill out the form below.
                    </p>
                    <form ref={formRef} onSubmit={formSubmitted}>
                        <input type="text" placeholder="Who are you?" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email Address" name="user_email" />
                        <textarea rows="6" placeholder="What's the secret?" name="message"/>
                        <br></br>
                        <button>Submit</button>
                    </form>
                    </div>
                </div>
            </div>


            <div className="c-bottom"></div>
        </div>
    )
}

export default Contact