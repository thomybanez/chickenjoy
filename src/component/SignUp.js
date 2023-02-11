import React, { useState } from "react"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const registerUser = async (email, password, passwordConfirmation) => {
    const requestBody = {
      email,
      password,
      password_confirmation: passwordConfirmation
    };

    console.log(requestBody)
  
    const response = await fetch("http://206.189.91.54/api/v1/auth/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // console.log("RESPONSE", response);
    // console.log("RESPONSE.HEADERS", response.headers);
    // console.log("RESPONSE.STATUS", response.status);
    // console.log("RESPONSE.STATUS_TEXT", response.statusText);
    // consoldatae.log("RESPONSE.BODY", await response.json());

    const rawdata = await response.json();
    const data = rawdata.data
    const status = rawdata.status
    const errors = rawdata.errors

    const dataKeys = Object.keys(data)
    console.log("SOME DATA KEYS"+dataKeys)

    console.log(`DATA ${data} STATUS ${status} ERRORS ${errors}`)
    

    const id = Object.keys(rawdata)
    console.log("GETTING PIECE DATA" +id) 
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await registerUser(email, password, passwordConfirmation);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "10vw",
        border: "2px solid rgb(250,250,250)",
        backgroundColor: "rgb(225,225,225)",
        padding: "50px",
        height: "50vh",
        borderRadius: "25px"
      }}
      onSubmit={handleSubmit}
    >
      <p style={{ color: "black" }}>Sign Up Now</p>
      <label style={{ color: "black", fontSize: "0.7em", fontWeight: "400", margin: "10px" }}>
        EMAIL
      </label>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label style={{ color: "black", fontSize: "0.7em", fontWeight: "400", margin: "10px" }}>
        PASSWORD
      </label>
      <input
        type="text"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <label style={{ color: "black", fontSize: "0.7em", fontWeight: "400", margin: "10px" }}>
        CONFIRM PASSWORD
      </label>
      <input
        type="text"
        value={passwordConfirmation}
        onChange={(event) => setPasswordConfirmation(event.target.value)}
      />
      <button style={{ margin: "10px" }} type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;