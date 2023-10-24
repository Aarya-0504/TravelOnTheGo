import React from "react";
import { Form, Button } from 'react-bootstrap';
import { useEffect, useRef, useState } from "react";
import './FeedBack.css'
function FeedBack() {
  const nameRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const handleSubmit = async (e) => {
    setResult("");
    e.preventDefault();
    // validating data
    if (!name || !email || !subject || text?.length < 10) {
      setResult("Please verify your inputs ...");
      return null;
    }
    
    const data = { name, email, subject, text };
    console.log(data);
   fetch("http://localhost:8000/api/feedbacksystem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      // JSON response
      return response.json();
    } else {
      // HTML or other content type
      return response.text(); // You can use response.text() to read the content
    }
      })
      .then((json) => {
        console.log(json?.message);
        setResult(`Result: ${json?.message}`);
      })
      .catch((error) => {
        console.log(error?.message);
        setResult(`Error: ${error?.message}`);
      });
  };
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div className="p-4 feedback">
      <h1>TravelOnTheGo - Feedback</h1>
      <form onSubmit={handleSubmit} className="form__container">
        <div className="form__controls">
          <label htmlFor="name">Name</label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            className="input__subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="text">Text</label>
          <textarea
            rows="5"
            id="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <button className="btn btn-danger">Send Feedback</button>
        </div>
      </form>
      <p>{result}</p>
    </div>
  );
}

export default FeedBack;