import '../styles/contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import wave from '../images/wave.png'
import hands from '../images/hands.png'

// Validation ideas
// Name - if name is never entered ie length > 0, then don't show the error.
// Show the error if they submit with length == 0
// Animate it as well


// Email - if

const Questionnaire = () => {
    const form = useRef();
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [messageError, setMessageError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [captchaError, setCaptchaError] = useState('');

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

    const validateMessage = (message) => {
        return message.length > 0;
    }

    const handleNameBlur = (e) => {
        const name = e.target.value;
        if (!validateName(name)) {
            setNameError('Invalid name**');
        } else {
            setNameError('');
        }
    }

    const handleEmailBlur = (e) => {
        const email = e.target.value;
        if (!validateEmail(email)) {
            setEmailError('Invalid email address**');
        } else {
            setEmailError('');
        }
    }

    const handleMessageBlur = (e) => {
        const message = e.target.value;
        if (!validateMessage(message)) {
            setMessageError('Invalid message**');
        } else {
            setMessageError('');
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

        if (!isVerified) {
            // CAPTCHA not selected
            setCaptchaError('Confirm that you are not a robot');
            return;
        }

        console.log('1');

        emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
            process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAIL_JS_API_KEY)
            .then((result) => {
                console.log(result.text);
                setIsSubmitted(true);
            }, (error) => {
                console.log(error.text);
            });

        console.log('2');

    };

    function onCaptchaChange() {
        setIsVerified(true);
    }

    return (
        <>
            <div className='sectionWrapper'>
                <div className='formSectionContainer sectionWrapperWidth'>
                    {isSubmitted ? (
                        <div className="thankYouContainer">
                            <h1>Thank you for your email!</h1>
                            <h3>
                                We appreciate your message and will get back to you soon.
                                <img className='emailImg' src={hands} alt='Emoji of two hands clasped together in a praying form.'></img>
                            </h3>
                        </div>
                    ) : (
                        <form className='formContainer' ref={form} onSubmit={sendEmail}>
                            <div className='formBackground'>
                                <div className='formTitle'>
                                    <h1>We would like to hear from you. </h1>
                                    <h1>Send us an email! <img className='emailImg' src={wave} alt='Emoji of a hand waving.'></img></h1>
                                </div>
                                <div className='labelContainer'>
                                    {nameError ? <span className="error">{nameError}</span> : <label>Name</label>}
                                    <input className='inputFull' type="text" name="from_name" onBlur={handleNameBlur} required />
                                    {emailError ? <span className="error">{emailError}</span> : <label>Email</label>}
                                    <input className='inputFull' type="email" name="email_id" onBlur={handleEmailBlur} required />
                                    {messageError ? <span className="error">{messageError}</span> : <label>Message</label>}
                                    <textarea name="message" onBlur={handleMessageBlur} required />
                                    <p className='captchaConfirm'>{captchaError}</p>
                                    <ReCAPTCHA
                                        className='captcha'
                                        sitekey="6LcInhUmAAAAAKQLMnlPdyrrr-hRSWP61tz_9ifY"
                                        onChange={onCaptchaChange}
                                    />
                                    <input className='inputSubmit' type="submit" value="Send" />
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </>
    );

}

export default Questionnaire;
