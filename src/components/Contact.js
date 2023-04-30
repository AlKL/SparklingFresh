import '../styles/contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// Need to validate the input on submit

const Questionnaire = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
            process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAIL_JS_API_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div className='sectionWrapper'>
                <div className='formSectionContainer sectionWrapperWidth'>
                    <form className='formContainer' ref={form} onSubmit={sendEmail}>
                        <div className='formBackground'>
                            <div className='formTitle'>
                                <h1>Love to hear from you,</h1>
                                <h1>Get in touch !!!</h1>
                            </div>
                            <div className='labelContainer'>
                                <label className='labelTest'>Name</label>
                                <input type="text" name="from_name" />
                                <label>Email</label>
                                <input type="email" name="email_id" />
                                <label>Message</label>
                                <textarea name="message" />
                                <input type="submit" value="Send" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
}

export default Questionnaire;