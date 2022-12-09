import React, { useState } from 'react';
import { Container } from 'react-bootstrap';


function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError(true);
        } else {
            setError(false);
            setName("");
            setEmail("");
            setMessage("");
        }

    }

    return (
        <Container>
            <h1>Contact</h1>
            <form
                className="flex-row justify-center justify-space-between-md align-center"
                onSubmit={handleFormSubmit}
            >
                <div className="col-12 col-lg-9">
                    <label>Name:</label>
                    <input
                        value={name}
                        className="form-input w-100"
                        onChange={(event) => setName(event.target.value)}
                    />
                    <label>Email:</label>
                    <input
                        value={email}
                        className="form-input w-100"
                        onBlur={() => setError(!validateEmail(email))}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label>Message:</label>
                    <textarea
                        rows="4"
                        value={message}
                        className="form-input w-100"
                        onChange={(event) => setMessage(event.target.value)}
                    ></textarea>
                </div>

                <div className="col-12 col-lg-3">
                    <button className="btn btn-info btn-block py-3" type="submit">
                        Contact Me
                    </button>
                </div>
                {error ?
                    (
                        <div className="col-12 my-3 bg-danger text-white p-3">
                            Invalid Email Address
                        </div>
                    )
                    :
                    (
                        <></>
                    )
                }
            </form>

        </Container>


    )
}

export default Contact;