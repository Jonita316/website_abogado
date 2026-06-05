import React, { useState } from "react";
import styled from "styled-components";

const FormStyles = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    margin-top: 1rem;
    box-shadow: 6px 6px 6px #000;
    position: relative;
    z-index: 1;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: var(--gray-1);
    color: #000000;
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 6px 6px 6px #000;
    position: relative;
    z-index: 1;
  }
  .error {
    color: red;
    font-size: 1.6rem;
    margin-top: 1rem;
  }
`;

const SuccessMessageStyles = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: var(--deep-dark);
  border-radius: 8px;
  border: 2px solid var(--gray-1);
  box-shadow: 6px 6px 6px #000;
  position: relative;
  z-index: 1;

  img {
    width: 100px;
    height: 100px;
    margin: 0 auto 2rem auto;
    display: block;
  }

  h2 {
    font-size: 2.5rem;
    color: var(--white);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.8rem;
    color: var(--gray-1);
  }
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("Por favor, complete todos los campos.");
      return;
    }
    setError("");

    const professionalWhatsappMessage = `
*MENSAJE DE CONTACTO*

*NOMBRE:* ${name.toUpperCase()}
*CORREO:* ${email.toUpperCase()}

*DETALLE DE MENSAJE:*
${message}
    `.trim();

    const whatsappUrl = `https://api.whatsapp.com/send?phone=593993972833&text=${encodeURIComponent(
      professionalWhatsappMessage,
    )}`;
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <SuccessMessageStyles>
        <h2>¡Mensaje en camino!</h2>
        <p>
          Gracias por contactarnos. Hemos abierto WhatsApp para que puedas
          enviar tu mensaje.
        </p>
      </SuccessMessageStyles>
    );
  }

  return (
    <FormStyles onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">
          SU NOMBRE
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email">
          SU CORREO
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="message">
          SU MENSAJE
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit">ENVIAR</button>
    </FormStyles>
  );
}
