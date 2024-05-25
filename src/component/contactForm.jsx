import React, { useState, useRef, useEffect } from 'react';
import Styles from './contactForm.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        reason: '',
    });

    const inputRefs = useRef([]);

    const changeHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    };

    const submitHandler = (event) => {
        const { firstName, lastName, email, contactNumber, reason } = formData;
        alert(
            "Form Submitted",
            firstName,
            lastName,
            email,
            contactNumber,
            reason
        );
    };

    const focusHandler = (name) => {
        const inputRef = inputRefs.current.find((ref) => ref.name === name);
        if (inputRef) {
            inputRef.previousElementSibling.style.display = 'block';
            inputRef.parentElement.classList.add(Styles.focused);

        }

    };

    const blurHandler = (name) => {
        const inputRef = inputRefs.current.find((ref) => ref.name === name);
        if (inputRef && inputRef.value === '') {
            inputRef.previousElementSibling.style.display = 'none';
            inputRef.parentElement.classList.remove(Styles.focused);

        }
    };

    useEffect(() => {
        const handleFocusEvent = (event) => {
            focusHandler(event.target.name);
        }
        const handleBlurEvent = (event) => {
            blurHandler(event.target.name);
        }
        inputRefs.current.forEach((input) => {
            input.addEventListener('focus', handleFocusEvent);
            input.addEventListener('blur', handleBlurEvent);
        });

        return () => {
            inputRefs.current.forEach((input) => {
                input.removeEventListener('focus', handleFocusEvent);
                input.removeEventListener('blur', handleBlurEvent);
            });
        };
    }, [inputRefs]);




    return <>
        <div className={Styles.formContainer} id='contactMe'>
            <div className={Styles.header}>
                <h1>Contact me</h1>
                {/* <hr className={Styles.line} /> */}
            </div>
            <div className={Styles.contentContainer} >
                <form onSubmit={submitHandler} className={Styles.formItems}>

                    <div className={Styles.personalContact}>
                        <fieldset className={`${Styles.fieldset}`}>
                            <legend className={Styles.legend}>Enter your first name here *</legend>
                            <input type="text" name='firstName' value={formData.firstName} placeholder='Enter your first name here *' onChange={changeHandler} required ref={(el) => (inputRefs.current.push(el))} autoComplete='off' />
                        </fieldset>

                        <fieldset className={`${Styles.fieldset}`}>
                            <legend className={Styles.legend}>Enter your last name here *</legend>
                            <input type="text" name='lastName' value={formData.lastName} placeholder='Enter your last name here *' onChange={changeHandler} ref={(el) => (inputRefs.current.push(el))} autoComplete='off' required />
                        </fieldset>
                    </div>
                    <div className={Styles.personalContact}>
                        <fieldset className={`${Styles.fieldset}`}>
                            <legend className={Styles.legend}>Enter your email here</legend>
                            <input type="email" name='email' value={formData.email} placeholder='Enter your email here *' onChange={changeHandler} ref={(el) => (inputRefs.current.push(el))} autoComplete='off' required />
                        </fieldset>
                        <fieldset className={`${Styles.fieldset}`}>
                            <legend className={Styles.legend}>Enter your contact number here</legend>
                            <input type="number" name='contactNumber' value={formData.contactNumber} placeholder='Enter your contact number here' onChange={changeHandler} ref={(el) => (inputRefs.current.push(el))} autoComplete='off' />
                        </fieldset>
                        <fieldset className={`${Styles.textAreaFieldset}`}>
                            <legend className={Styles.legend}>Enter the reason of contact</legend>
                            <textarea name="reason" value={formData.reason} placeholder='Enter the reason of contact' onChange={changeHandler} ref={(el) => (inputRefs.current.push(el))}  ></textarea>
                        </fieldset>
                    </div>

                    <button type='submit'>Submit</button>
                </form >
            </div>
        </div >
    </>
};

export default Contact;
