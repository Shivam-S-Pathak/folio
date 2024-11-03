import React, { useState, useRef, useEffect } from "react";
import Styles from "./contactForm.module.css";
import emailjs from "@emailjs/browser";
import { PulseLoader } from "react-spinners";

const Contact = ({ isDarkMode, isSideVisible }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef();

  const initialFormState = {
    fullName: "",
    email: "",
    contactNumber: "",
    reason: "",
    site: "portfolio",
  };
  const [formData, setFormData] = useState(initialFormState);
  console.log(formData);

  const inputRefs = useRef([]);

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .send("service_qguhlgq", "template_gzq53za", formData, {
        publicKey: "b3sJrCBk7wDHXZMPT",
      })
      .then(
        () => {
          setIsSubmitting(false);
          console.log(formData);
          alert("Thank you for contacting me😃😃!!You'll get reply ASAP");
          setFormData(initialFormState);
          inputRefs.current.forEach((input) => {
            if (input) {
              input.previousElementSibling.style.display = "none";
              input.parentElement.classList.remove(
                isDarkMode ? Styles.focusedDark : Styles.focusedLight
              );
            }
          });
        },
        (error) => {
          setIsSubmitting(false);
          alert(
            "sorry something went wrong😟😟!! Please try again later",
            error.text
          );
          setFormData(initialFormState);
          inputRefs.current.forEach((input) => {
            if (input) {
              input.previousElementSibling.style.display = "none";
              input.parentElement.classList.remove(
                isDarkMode ? Styles.focusedDark : Styles.focusedLight
              );
            }
          });
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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={observerRef}
      className={`${
        isDarkMode ? Styles.formContainerDark : Styles.formContainerLight
      } ${isSideVisible ? Styles.formContainerBlur : ""} ${
        isSubmitting ? Styles.disabled : ""
      }`}
      id="contactMe"
    >
      <div
        className={`${Styles.contentContainer} ${
          isVisible ? Styles.visible : Styles.notVisible
        }`}
      >
        <div
          className={`${isDarkMode ? Styles.headerDark : Styles.headerLight} ${
            isVisible ? Styles.visible : Styles.notVisible
          }`}
        >
          <h1>Get in touch</h1>
        </div>
        <form
          ref={form}
          onSubmit={submitHandler}
          className={`${Styles.formItems} `}
        >
          <fieldset
            className={`${
              isDarkMode ? Styles.fieldsetDark : Styles.fieldsetLight
            }`}
          >
            <legend className={Styles.legend}>
              Enter your Full name here *
            </legend>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
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
            <legend className={Styles.legend}>Enter your email here</legend>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email here *"
              onChange={changeHandler}
              className={isDarkMode ? Styles.emailDark : Styles.emailLight}
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
              ref={setRef(2)}
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
              ref={setRef(3)}
            ></textarea>
          </fieldset>
          <button type="submit">
            {isSubmitting ? <PulseLoader color="white" size={13} /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
