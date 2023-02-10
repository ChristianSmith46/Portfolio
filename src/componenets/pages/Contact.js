import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';


function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [requiredField, setRequiredField] = useState({});
    const [response, setResponse] = useState(false);

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setRequiredField({ name, email, message });

        if (!validateEmail(email)) {
            setError(true);
            setResponse(false);

        } else {
            try{
                await fetch('https://9e3xroamk5.execute-api.us-east-1.amazonaws.com/portfolio/contact', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, message})
            });
            setError(false);
            setName("");
            setEmail("");
            setMessage("");
            setRequiredField({ name, email, message });
            setResponse(true);
            } catch (error) {
                console.error(error);
            }
        }

    }

    return (
        <Container>
            <h1>Contact</h1>
            <p style={{ fontSize: 15 }}>You can contact me directly through email at <a href='mailto:christian.46.smith@gmail.com'>christian.46.smith@gmail.com</a> or fill out the contact form below</p>
            <form
                className="flex-row justify-center justify-space-between-md align-center"
                onSubmit={handleFormSubmit}
            >
                <div className="col-12 col-lg-9">
                    <label>Name: {requiredField.name === "" && <span style={{ color: "red" }}>*Required Field</span>}</label>
                    <input
                        value={name}
                        className="form-input w-100"
                        onChange={(event) => setName(event.target.value)}
                    />
                    <label>Email: {requiredField.email === "" && <span style={{ color: "red" }}>*Required Field</span>}</label>
                    <input
                        value={email}
                        className="form-input w-100"
                        onBlur={() => setError(!validateEmail(email))}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label>Message: {requiredField.message === "" && <span style={{ color: "red" }}>*Required Field</span>}</label>
                    <textarea
                        rows="4"
                        value={message}
                        className="form-input w-100"
                        onChange={(event) => setMessage(event.target.value)}
                    ></textarea>
                </div>

                <div className="col-12 col-lg-3">
                    <Button type="submit" disabled={!name || !email || !message}>Contact Me</Button>
                </div>
                {error &&
                    (
                        <div className="col-12 my-3 bg-danger text-white p-3">
                            Invalid Email Address
                        </div>
                    )
                }
                {response &&
                    (
                        <div className="col-12 my-3 p-3">
                            Thank you for the message!
                        </div>
                    )
                }
            </form>

        </Container>


    )
}

export default Contact;