import React from 'react';
import emailjs from 'emailjs-com';
// import{ init } from 'emailjs-com';
import { ContactContainer, FormWrap, FormContent, Form, FormH1, FormP, FormLabel, FormInput, FormInputMsg, FormButton, SendIcon } from './ContactElements';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_0b8w00fd3suFAUWpKXPNW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <>
            <ContactContainer id='contact'>
                <FormWrap>
                    <FormContent>
                        <Form className="contact-form" onSubmit={sendEmail}>
                            <FormH1>Contact Me</FormH1>
                            <FormP>Have a question, would like to look over my portfolio, or simply connect with me via social media? Either way, I can't wait to hear from you. vladimir@devvlady.com</FormP>
                            <FormLabel htmlFor='for'>First & Last Name</FormLabel>
                            <FormInput type="text" name="user_name" required />
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type="email" name="user_email" required />
                            <FormLabel htmlFor='for'>Message</FormLabel>
                            <FormInputMsg type='message' name="message" required />
                            <FormButton type='submit' value="Send">Send Message <SendIcon />
                            </FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </ContactContainer>
        </>
    )
}

export default Contact
