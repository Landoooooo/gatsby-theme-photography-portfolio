import React, { useState } from "react"
import Layout from "../layout/layout"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2em;
`

const Contact = () => {
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  return (
    <Layout>
      <ContactContainer>
        <div>
          <a href="https://www.instagram.com/dcwb_productions" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
        </div>
        <FormContainer>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {/* You still need to add the hidden input with the form name to your JSX form */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your name:
                <br />
                <input type="text" name="name" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Phone Number:
                <br />
                <input type="text" name="phoneNumber" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Message:
                <br />
                <textarea name="message" onChange={handleChange} />
              </label>
            </p>
            <p>
              <button type="submit">Submit</button>
            </p>
          </form>
        </FormContainer>
      </ContactContainer>
    </Layout>
  )
}

export default Contact
