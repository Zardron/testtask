import emailjs from "emailjs-com";
import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [state, setState] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  function sendEmail(e) {
    e.preventDefault();

    if (!state.name || !state.email || !state.message) {
      toast.error("Please fill up all fields");

      e.target.reset();
    } else {
      emailjs
        .sendForm(
          "service_90azas6",
          "template_0nktc75",
          e.target,
          "GOSNKTcFgAf4ET6zy"
        )
        .then(
          (result) => {
            toast.success("Message successfully sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "80vh",
        backgroundColor: "#212121",
        justifyContent: "center",
        borderBottom: "1px solid #4d4d4d",
      }}
    >
      <form
        onSubmit={sendEmail}
        className="mt-2"
        style={{
          width: "50vw",
          height: "80vh",
          backgroundColor: "#212121",
          justifyContent: "center",
          borderBottom: "1px solid #4d4d4d",
          margin: "auto",
          paddingTop: "50px",
        }}
      >
        <div className=" form-group mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
        </div>
        <div className="col-8 form-group pt-2 mx-auto">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
        </div>
        <div className="col-8 form-group pt-2 mx-auto">
          <textarea
            className="form-control"
            id=""
            cols="30"
            rows="8"
            placeholder="Your message"
            name="message"
            value={state.message}
            onChange={handleInput}
          ></textarea>
        </div>
        <div className="col-8 pt-3 mx-auto">
          <input
            type="submit"
            style={{
              flex: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              border: "none",
              padding: "15px 20px",
              backgroundColor: " #3548fe",
              color: "white",
              cursor: "pointer",
              borderRadius: "30px",
              fontWeight: "600",
              marginTop: "10px",
            }}
            className="btn btn-info"
            value="Send Message"
          ></input>
        </div>
      </form>
    </div>
  );
}
