import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style.scss";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [defaultPhone, setDefaultPhone] = useState("");

  useEffect(() => {
    setDefaultPhone("+996");
  }, []);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (e) => {
    if (e.target.value.length <= 13) {
      setPhone(e.target.value);
    }
  };

  async function sendData(e) {
    e.preventDefault();

    if (!name || !email || (!phone && !defaultPhone)) {
      alert("Please fill in all the fields!");
      return;
    } else if (!validateName(name)) {
      errName.innerText = "Please enter a valid name!";
      return;
    }

    if (!validateEmail(email)) {
      errEmail.innerText = "Please enter a valid email adress!";
      return;
    }

    if (!validatePhone(phone ? phone : defaultPhone)) {
      errPhone.innerText = "Please enter a valid phone number!";
      return;
    }

    setName("");
    setEmail("");
    setPhone("");
    setDefaultPhone("+996");

    alert("DATA SENT!");

    try {
      await axios.post("http://localhost:2007/sendData", {
        name,
        email,
        phone: phone ? phone : defaultPhone,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const validateName = (name) => {
    const regex = /^[\w\s]{2,30}$/;
    return regex.test(name);
  };

  const validateEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\+?\d{1,3}[- ]?\d{3}[- ]?\d{3}[- ]?\d{3}[- ]?\d{2}$/;
    return regex.test(phone);
  };

  return (
    <div>
      <form onSubmit={sendData}>
        <h2 className="form_title">
          <span>Registration</span>
        </h2>

        <input
          type="text"
          required
          value={name}
          id="fullNameInput"
          onChange={handleChangeName}
          placeholder="Enter Your Full Name*"
        />
        <span id="errName"></span>

        <input
          type="text"
          required
          value={email}
          id="emailAddressInput"
          onChange={handleChangeEmail}
          placeholder="Enter Your Email Address*"
        />
        <span id="errEmail"></span>

        <input
          type="text"
          required
          value={phone ? phone : defaultPhone}
          id="phoneNumberInput"
          onChange={handleChangePhone}
          placeholder="000 000 000"
        />
        <span id="errPhone"></span>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};
