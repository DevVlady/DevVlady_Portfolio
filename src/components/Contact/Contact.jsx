import React from 'react';
import { ContactContainer, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormInputMsg, FormButton, SendIcon } from './ContactElements';

const Contact = () => {
    return (
        <>
            <ContactContainer id='contact'>
                <FormWrap>
                    <FormContent>
                        <Form action="">
                            <FormH1>Contact Me</FormH1>
                            <FormLabel htmlFor='for'>First & Last Name</FormLabel>
                            <FormInput type='name' required />
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Message</FormLabel>
                            <FormInputMsg type='text' required />
                            <FormButton type='submit'>Send Message <SendIcon/>
                            </FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </ContactContainer>
        </>
    )
}

export default Contact
