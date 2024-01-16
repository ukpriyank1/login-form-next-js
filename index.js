import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleName = (e) => {
    let name = e.target.value;
    if (name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(name);
  };

  const handleEmail = (e) => {
    let email = e.target.value;
    if (!email.match(emailRegex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(email);
  };

  const handleSubmit = (e) => {
    //     alert("name" + "=" + name + "email" + "=" + email);
    //   };

    e.preventDefault();
    let name = e.target[0].value;
    if (name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    let email = e.target[1].value;
    if (!email.match(emailRegex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!name.length < 3 && email.match(emailRegex)) {
      {
        // <span style={{ color: "green" }}> Form has been Submitted...</span>;
        alert("Form has been Submitted...");
      }
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name: </label>
        <input
          type="text"
          placeholder="Enter your Name"
          name="name"
          onChange={handleName}
        />
        <br />
        {nameError ? (
          <span style={{ color: "red" }}>Name length must be 3 character</span>
        ) : (
          ""
        )}
        <br />
        <br />
        <label htmlFor="">Enter Name: </label>
        <input
          type="text"
          placeholder="Enter your Name"
          name="name"
          onChange={handleEmail}
        />
        <br />
        {emailError ? <span style={{ color: "red" }}>Invalid Email</span> : ""}
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}
