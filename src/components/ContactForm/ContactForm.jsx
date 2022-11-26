import React, { useRef } from "react";
import { Div } from "./ContactForm.styled";

const ContactForm = () => {
  const personalDataConsent = useRef();

  const acceptPersonalDataConsent = () => {
    return personalDataConsent.current.checked;
  }

  return (
    <Div>
      <h3>
        Lorem ipsum <span>Lorem ipsum lorem ipsum</span>
      </h3>
      <p>consectetur adipiscing elit. Ut auctor arcu</p>
      <h4>Zostaw kontakt, zadzwonimy do Ciebie</h4>
      <form action="">
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          placeholder="Imię i nazwisko"
          required
        />

        <input
          type="tel"
          name="phoneNumber"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="Telefon"
          required
        />

        <input
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          autoComplete="email"
          placeholder="Email"
          required
        />

        <input
          type="text"
          name="message"
          placeholder="Lorem ipsum lorem ipsum"
          required
        />

        <label htmlFor="personalDataConsent">
          <input ref={personalDataConsent} type="checkbox" name="personalDataConsent" id="personalDataConsent" value="personalDataConsent" required />
          <span onClick={acceptPersonalDataConsent}>
            Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych
            więcej...
          </span>
        </label>

        <button type="submit">Wyślij</button>
      </form>
    </Div>
  );
};

export default ContactForm;
