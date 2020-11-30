import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_krt2ko5",
        e.target,
        "user_F8pDOk3xtZy6Y62wn5Klu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container">
      <h2>Contacto</h2>
      <form onSubmit={sendEmail}>
        <div className="row100">
          <div className="col">
            <div className="input-text">
              <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                required={true}
              />
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <div className="input-text">
              <input
                type="email"
                placeholder="Email"
                name="email"
                required={true}
              />
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <div className="input-text">
              <input
                type="text"
                placeholder="Motivo"
                name="motivo"
                required={true}
              />
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <div className="input-text textarea">
              <textarea
                placeholder="Mensaje"
                name="mensaje"
                required={true}
              ></textarea>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <input type="submit" value="Enviar" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
