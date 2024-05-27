import React, { useState, useRef, useEffect } from "react";
import Styles from "./contactForm.module.css";
import emailjs from "@emailjs/browser";

const Contact = ({ isDarkMode }) => {
  const form = useRef();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    reason: "",
  });

  const inputRefs = useRef([]);

  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_qguhlgq", "template_gzq53za", form.current, {
        publicKey: "b3sJrCBk7wDHXZMPT",
      })
      .then(
        () => {
          alert("Thank you for contacting me😃😃!!You'll get reply ASAP");
        },
        (error) => {
          alert("sorry something went wrong😟😟!! Please try again later", error.text);
        }
      );
  };

  const focusHandler = (name, isDarkMode) => {
    const inputRef = inputRefs.current.find((ref) => ref && ref.name === name);
    if (inputRef) {
      inputRef.previousElementSibling.style.display = "block";
      inputRef.parentElement.classList.add(
        isDarkMode ? Styles.focusedDark : Styles.focusedLight
      );
    }
  };

  const blurHandler = (name, isDarkMode) => {
    const inputRef = inputRefs.current.find((ref) => ref && ref.name === name);
    if (inputRef && inputRef.value === "") {
      inputRef.previousElementSibling.style.display = "none";
      inputRef.parentElement.classList.remove(
        isDarkMode ? Styles.focusedDark : Styles.focusedLight
      );
    }
  };

  useEffect(() => {
    const handleFocusEvent = (event) => {
      focusHandler(event.target.name, isDarkMode);
    };
    const handleBlurEvent = (event) => {
      blurHandler(event.target.name, isDarkMode);
    };

    inputRefs.current.forEach((input) => {
      if (input) {
        input.addEventListener("focus", handleFocusEvent);
        input.addEventListener("blur", handleBlurEvent);
      }
    });

    return () => {
      inputRefs.current.forEach((input) => {
        if (input) {
          input.removeEventListener("focus", handleFocusEvent);
          input.removeEventListener("blur", handleBlurEvent);
        }
      });
    };
  }, [isDarkMode]);

  const setRef = (index) => (el) => {
    inputRefs.current[index] = el;
  };

  return (
    <div
      className={
        isDarkMode ? Styles.formContainerDark : Styles.formContainerLight
      }
      id="contactMe"
    >
      <div className={Styles.contentContainer}>
        <div className={isDarkMode ? Styles.headerDark : Styles.headerLight}>
          <h1>Get in touch</h1>
        </div>
        <form ref={form} onSubmit={submitHandler} className={Styles.formItems}>
          <fieldset
            className={`${
              isDarkMode ? Styles.fieldsetDark : Styles.fieldsetLight
            }`}
          >
            <legend className={Styles.legend}>
              Enter your first name here *
            </legend>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="Enter your first name here *"
              onChange={changeHandler}
              required
              className={
                isDarkMode ? Styles.firstNameDark : Styles.firstNameLight
              }
              ref={setRef(0)}
              autoComplete="off"
            />
          </fieldset>

          <fieldset
            className={`${
              isDarkMode ? Styles.fieldsetDark : Styles.fieldsetLight
            }`}
          >
            <legend className={Styles.legend}>
              Enter your last name here *
            </legend>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Enter your last name here *"
              onChange={changeHandler}
              className={
                isDarkMode ? Styles.lastNameDark : Styles.lastNameLight
              }
              ref={setRef(1)}
              autoComplete="off"
              required
            />
          </fieldset>

          <fieldset
            className={`${
              isDarkMode ? Styles.fieldsetDark : Styles.fieldsetLight
            }`}
          >
            <legend className={Styles.legend}>Enter your email here</legend>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email here *"
              onChange={changeHandler}
              className={isDarkMode ? Styles.emailDark : Styles.emailLight}
              ref={setRef(2)}
              autoComplete="off"
              required
            />
          </fieldset>

          <fieldset
            className={`${
              isDarkMode ? Styles.fieldsetDark : Styles.fieldsetLight
            }`}
          >
            <legend className={Styles.legend}>
              Enter your contact number here
            </legend>
            <input
              type="number"
              name="contactNumber"
              value={formData.contactNumber}
              placeholder="Enter your contact number here"
              onChange={changeHandler}
              className={isDarkMode ? Styles.numberDark : Styles.numberLight}
              ref={setRef(3)}
              autoComplete="off"
            />
          </fieldset>

          <fieldset
            className={`${
              isDarkMode ? Styles.fieldsetDark : Styles.fieldsetLight
            }`}
          >
            <legend className={Styles.legend}>
              Enter the reason of contact
            </legend>
            <textarea
              name="reason"
              value={formData.reason}
              placeholder="Enter the reason of contact"
              onChange={changeHandler}
              className={isDarkMode ? Styles.reasonDark : Styles.reasonLight}
              ref={setRef(4)}
            ></textarea>
          </fieldset>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
