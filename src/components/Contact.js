import '../styles/contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

// Use re-captcha

const Questionnaire = () => {
    const form = useRef();
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    const validateName = (name) => {
        // Use a regular expression to check if the name is valid
        const nameRegex = /^[A-Za-z]+([\s]?[A-Za-z]+)*$/;
        return nameRegex.test(name);
    }

    const validateEmail = (email) => {
        // Use a regular expression to check if the email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleNameBlur = (e) => {
        const name = e.target.value;
        if (!validateName(name)) {
            setNameError('Invalid name');
        } else {
            setNameError('');
        }
    }

    const handleEmailBlur = (e) => {
        const email = e.target.value;
        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();

        // Check if the name and email are valid before submitting the form
        const name = form.current.from_name.value;
        if (!validateName(name)) {
            setNameError('Invalid name');
            return;
        }

        const email = form.current.email_id.value;
        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
            return;
        }

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

    function onCaptchaChange() {
        setIsVerified(true);
    }

    return (
        <>
            <div className='sectionWrapper'>
                <div className='formSectionContainer sectionWrapperWidth'>
                    <form className='formContainer' ref={form} onSubmit={sendEmail}>
                        <div className='formBackground'>
                            <div className='formTitle'>
                                <h1>Love to hear from you,</h1>
                                <h1>Get in touch!</h1>
                            </div>
                            <div className='labelContainer'>
                                {nameError ? <span className="error">{nameError}</span> : <label>Name</label>}
                                <input className='inputFull' type="text" name="from_name" onBlur={handleNameBlur} required />
                                {emailError ? <span className="error">{emailError}</span> : <label>Email Address</label>}
                                <input className='inputFull' type="email" name="email_id" onBlur={handleEmailBlur} required />
                                <label>Message</label>
                                <textarea name="message" />
                                <ReCAPTCHA
                                    sitekey="6LcInhUmAAAAAKQLMnlPdyrrr-hRSWP61tz_9ifY"
                                    onChange={onCaptchaChange}
                                />
                                <input className='inputSubmit' type="submit" value="Send" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Questionnaire;
